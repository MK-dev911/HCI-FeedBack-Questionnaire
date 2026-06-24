// api/sync.js

export default async function handler(req, res) {
  // Enforce POST requests only
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { filename, payload } = req.body;
  
  // Pull the token securely from Vercel's isolated environment variables
  const token = process.env.GH_TOKEN;
  const owner = "MK-dev911";
  const repo = "HCI-FeedBack-Questionnaire";
  const branch = "main";
  const folderPath = "Dataset";

  if (!token) {
    return res.status(500).json({ error: 'Server configuration error: Missing deployment token.' });
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${folderPath}/${filename}`;

  try {
    // Step 1: Query GitHub to check if this specific user file already exists
    let currentFileSha = null;
    const checkResponse = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `token ${token}`,
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "HCI-Telemetry-Proxy" // GitHub API strictly requires a User-Agent header
      }
    });

    if (checkResponse.ok) {
      const fileData = await checkResponse.json();
      currentFileSha = fileData.sha; // Grab the tracking SHA identifier for updates
    }

    // Step 2: Formulate commit directives
    const commitMessage = currentFileSha 
      ? `Progressive update for telemetry matrix: ${filename}`
      : `Initialize unique participant profile: ${filename}`;

    // Convert the payload object into a clean Base64 string natively via Node.js Buffer
    const base64Content = Buffer.from(JSON.stringify(payload, null, 2)).toString('base64');

    const requestBody = {
      message: commitMessage,
      content: base64Content,
      branch: branch
    };

    if (currentFileSha) {
      requestBody.sha = currentFileSha;
    }

    // Step 3: Broadcast the payload transaction safely to GitHub's storage layer
    const pushResponse = await fetch(url, {
      method: "PUT",
      headers: {
        "Authorization": `token ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "HCI-Telemetry-Proxy"
      },
      body: JSON.stringify(requestBody)
    });

    if (pushResponse.ok) {
      return res.status(200).json({ success: true, message: "Dataset state successfully synchronized." });
    } else {
      const errorDetails = await pushResponse.json();
      return res.status(pushResponse.status).json({ error: errorDetails });
    }

  } catch (error) {
    return res.status(500).json({ error: "Internal Server Proxy Failure", details: error.message });
  }
}
