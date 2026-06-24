const translations = {
  en: {
    welcome_title: "Welcome Participant",
    demographics_label: "HCI Study Registration",
    demographics_desc: "Please provide your basic details below to initialize your secure evaluation session.",
    name_placeholder: "Name or Pseudonym",
    age_placeholder: "Age",
    job_placeholder: "Job / Field of Study (Optional)",
    start_btn: "Begin System Evaluation →",
    header_title: "System Experience Evaluation",
    header_desc: "Please interact with every sliding bar to calibrate your precise score and share any opinions.",
    legend_min: "1.0 = Strongly Disagree",
    legend_max: "5.0 = Strongly Agree",
    not_rated: "Not Rated yet",
    opinion_holder: "Optional: Share your thoughts or context for this rating...",
    submit_btn_next: "Submit & Proceed to Next Website",
    submit_btn_final: "Compile & Export Entire Dataset JSON",
    validation_alert: "Validation Error: Please review and calibrate all continuous rating sliders before submitting.",
    validation_demographics_alert: "Please enter your Name and Age to initialize your study profile.",
    evaluating_target: "Currently Evaluating Platform:",
    visit_site_btn: "Explore Website",
    completion_alert: "Excellent! All evaluations are complete. Your compiled dataset JSON file is downloading now.",
    categories: {
      part1: "Part 1: Core HCI Attributes",
      part2: "Part 2: Perceived Performance",
      part3: "Part 3: Overall Value"
    },
    likert: {
      str_disagree: "Strongly Disagree",
      disagree: "Disagree",
      neutral: "Neutral",
      agree: "Agree",
      str_agree: "Strongly Agree"
    },
    questions: {
      hci_flexibility: "The system allows me to complete my tasks in multiple ways to suit my preferences or workflow.",
      hci_applicability: "The features provided are directly relevant and useful for what I need to accomplish.",
      hci_accessibility: "I can easily read, navigate, and interact with the application regardless of my device or environment.",
      hci_reliability: "The system functions smoothly without unexpected errors, bugs, or crashes.",
      hci_responsiveness: "The interface provides clear and immediate visual feedback when I take an action.",
      hci_consistency: "The layout, design, and terminology are uniform and predictable across all pages.",
      perf_cls: "Text, buttons, or images on the screen remain stable and do not suddenly jump around.",
      perf_inp: "When I interact with the site, it responds immediately without any noticeable lag.",
      perf_tbt: "Once the page appears, I can start scrolling and clicking right away without the screen feeling 'frozen'.",
      perf_fcp: "When I open a page, the main content (text and images) loads and appears very quickly.",
      val_satisfaction: "Overall, I am highly satisfied with my experience using this system.",
      val_success: "I was able to accomplish my goal today smoothly and without frustration."
    }
  },
  fa: {
    welcome_title: "خوش آمدید",
    demographics_label: "ثبت‌نام فرآیند ارزیابی HCI",
    demographics_desc: "لطفاً مشخصات پایه خود را جهت اعتبارسنجی فرآیند تحقیق و شروع نشست ارزیابی وارد نمایید.",
    name_placeholder: "نام یا نام مستعار",
    age_placeholder: "سن",
    job_placeholder: "شغل / رشته تحصیلی (اختیاری)",
    start_btn: "شروع فرآیند ارزیابی سیستم ←",
    header_title: "ارزیابی تجربه کاربر و عملکرد سیستم",
    header_desc: "لطفاً برای تنظیم امتیاز دقیق خود، نوار لغزنده هر سؤال را تغییر دهید و نظرات خود را به اشتراک بگذارید.",
    legend_min: "۱.۰ = کاملاً مخالفم",
    legend_max: "۵.۰ = کاملاً موافقم",
    not_rated: "هنوز امتیاز داده نشده",
    opinion_holder: "اختیاری: دیدگاه یا دلیل خود را برای این امتیاز بنویسید...",
    submit_btn_next: "ثبت و ورود به وب‌سایت بعدی",
    submit_btn_final: "تدوین و دانلود نهایی فایل جی‌سون (JSON)",
    validation_alert: "خطای اعتبار‌سنجی: لطفاً قبل از ارسال فرم، تمام نوارهای امتیازدهی را تنظیم کنید.",
    validation_demographics_alert: "لطفاً برای ایجاد پروفایل ارزیابی، نام و سن خود را وارد کنید.",
    evaluating_target: "وب‌سایت در حال ارزیابی:",
    visit_site_btn: "مشاهده و بررسی وب‌سایت",
    completion_alert: "بسیار عالی! ارزیابی تمام وب‌سایت‌ها به پایان رسید. فایل مجموعه داده اختصاصی شما هم‌اکنون دانلود می‌شود.",
    categories: {
      part1: "بخش ۱: ویژگی‌های اصلی تعامل انسان و کامپیوتر (HCI)",
      part2: "بخش ۲: عملکرد درک‌شده سیستم",
      part3: "بخش ۳: ارزش و رضایت کلی"
    },
    likert: {
      str_disagree: "کاملاً مخالفم",
      disagree: "مخالفم",
      neutral: "بی‌نظر",
      agree: "موافقم",
      str_agree: "کاملاً موافقم"
    },
    questions: {
      hci_flexibility: "سیستم به من اجازه می‌دهد تا وظایف خود را به روش‌های مختلف و متناسب با گردش کار خود انجام دهم.",
      hci_applicability: "ویژگی‌های ارائه شده کاملاً مرتبط و برای کاری که باید انجام دهم مفید هستند.",
      hci_accessibility: "من می‌توانم بدون توجه به نوع دستگاه یا محیط، به راحتی با برنامه ناوبری و تعامل داشته باشم.",
      hci_reliability: "سیستم به آرامی و بدون خطاها، باگ‌ها یا خرابی‌های غیرمنتظره کار می‌کند.",
      hci_responsiveness: "رابط کاربری هنگام انجام یک عمل، بازخورد بصری واضح و فوری ارائه می‌دهد.",
      hci_consistency: "چیدمان، طراحی و اصطلاحات در تمام صفحات یکنواخت و قابل پیش‌بینی هستند.",
      perf_cls: "متن‌ها، دکمه‌ها یا تصاویر روی صفحه پایدار می‌مانند و ناگهان جابجا نمی‌شوند.",
      perf_inp: "وقتی با سایت تعامل برقرار می‌کنم، بلافاصله و بدون هیچ تاخیر قابل توجهی پاسخ می‌دهد.",
      perf_tbt: "پس از ظاهر شدن صفحه، می‌توانم فوراً اسکرول و کلیک کنم بدون اینکه صفحه احساس «قفل شدن» داشته باشد.",
      perf_fcp: "وقتی صفحه‌ای را باز می‌کنم، محتوای اصلی (متن و تصاویر) بسیار سریع بارگذاری و ظاهر می‌شود.",
      val_satisfaction: "به طور کلی، من از تجربه استفاده از این سیستم بسیار راضی هستم.",
      val_success: "من توانستم هدف خود را امروز به راحتی و بدون ناامیدی انجام دهم."
    }
  }
};

const websitesPool = [
  { id: "digikala", nameEn: "Digikala (E-Commerce)", nameFa: "دیجی‌کالا (فروشگاه آنلاین)", url: "https://www.digikala.com" },
  { id: "snapp", nameEn: "Snapp (Super App)", nameFa: "اسنپ (سوپر اپلیکیشن)", url: "https://www.snapp.ir" },
  { id: "aparat", nameEn: "Aparat (Video Platform)", nameFa: "آپارات (سرویس اشتراک ویدیو)", url: "https://www.aparat.com" },
  { id: "divar", nameEn: "Divar (Classifieds Marketplace)", nameFa: "دیوار (نیازمندی‌های آنلاین)", url: "https://divar.ir" },
  { id: "filimo", nameEn: "Filimo (VOD Streaming)", nameFa: "فیلیمو (سامانه نمایش ویدیو)", url: "https://www.filimo.com" },
  { id: "torob", nameEn: "Torob (Shopping Search Engine)", nameFa: "ترب (موتور جستجوی خرید)", url: "https://torob.com" }
];

const surveyStructure = [
  { catKey: "part1", questions: ["hci_flexibility", "hci_applicability", "hci_accessibility", "hci_reliability", "hci_responsiveness", "hci_consistency"] },
  { catKey: "part2", questions: ["perf_cls", "perf_inp", "perf_tbt", "perf_fcp"] },
  { catKey: "part3", questions: ["val_satisfaction", "val_success"] }
];

let currentLang = 'fa'; 
let currentTheme = 'light';
let currentWebsiteIndex = 0;

const compiledDataset = {
  session_metadata: {
    total_duration_seconds: 0,
    generated_timestamp: new Date().toISOString(),
    evaluation_campaign_size: websitesPool.length,
    participant: {
      name: null,
      age: null,
      job_or_field: null
    }
  },
  website_evaluations: {}
};

let trackingMetrics = {};
let targetStageStartTime = null;
let campaignGlobalStartTime = null;
let totalQuestionsCount = 0;
let currentParticipantFilename = null;

const surveyContainer = document.getElementById('survey-content');

function initializeFormStructure() {
  surveyContainer.innerHTML = ''; 
  totalQuestionsCount = 0;

  surveyStructure.forEach(sec => {
    const card = document.createElement('div');
    card.className = 'survey-card';
    
    const title = document.createElement('h2');
    title.className = 'section-title';
    title.setAttribute('data-cat-key', sec.catKey);
    card.appendChild(title);

    sec.questions.forEach(qId => {
      totalQuestionsCount++;
      trackingMetrics[qId] = {
        hasInteracted: false,
        interactionCount: 0,
        lastInteractionTime: Date.now(),
        cumulativeFocusDurationMs: 0
      };

      const qBlock = document.createElement('div');
      qBlock.className = 'question-block';
      qBlock.id = `block_${qId}`;

      const textDiv = document.createElement('div');
      textDiv.className = 'question-text';
      textDiv.setAttribute('data-q-id', qId);

      const sliderWrapper = document.createElement('div');
      sliderWrapper.className = 'slider-wrapper';

      const scoreDisplayWrapper = document.createElement('div');
      scoreDisplayWrapper.className = 'score-display-wrapper';
      
      const contextIndicator = document.createElement('span');
      contextIndicator.className = 'scale-context';
      contextIndicator.id = `context_${qId}`;

      const valueBadge = document.createElement('span');
      valueBadge.className = 'value-badge';
      valueBadge.id = `badge_${qId}`;
      valueBadge.textContent = '--';

      scoreDisplayWrapper.appendChild(contextIndicator);
      scoreDisplayWrapper.appendChild(valueBadge);

      const rangeContainer = document.createElement('div');
      rangeContainer.className = 'range-container';

      const input = document.createElement('input');
      input.type = 'range';
      input.className = 'navbar-slider unrated';
      input.name = qId;
      input.min = '1.0';
      input.max = '5.0';
      input.step = '0.05';
      input.value = '3.0';

      input.addEventListener('input', (e) => {
        const liveValue = parseFloat(e.target.value).toFixed(2);
        
        if (!trackingMetrics[qId].hasInteracted) {
          trackingMetrics[qId].hasInteracted = true;
          input.classList.remove('unrated');
          valueBadge.classList.add('active-status');
          contextIndicator.classList.add('active-status');
          qBlock.classList.remove('required-error');
        }

        valueBadge.textContent = liveValue;
        contextIndicator.textContent = evaluateContextString(liveValue);

        trackingMetrics[qId].interactionCount++;
        const now = Date.now();
        trackingMetrics[qId].cumulativeFocusDurationMs += (now - trackingMetrics[qId].lastInteractionTime);
        trackingMetrics[qId].lastInteractionTime = now;

        updateSingleSliderFill(e.target);
        updateFormProgress();
      });

      input.addEventListener('mousedown', () => { trackingMetrics[qId].lastInteractionTime = Date.now(); });
      input.addEventListener('touchstart', () => { trackingMetrics[qId].lastInteractionTime = Date.now(); });

      const opinionContainer = document.createElement('div');
      opinionContainer.className = 'opinion-container';
      
      const textInput = document.createElement('input');
      textInput.type = 'text';
      textInput.className = 'opinion-input';
      textInput.id = `opinion_${qId}`;

      opinionContainer.appendChild(textInput);
      rangeContainer.appendChild(input);
      sliderWrapper.appendChild(scoreDisplayWrapper);
      sliderWrapper.appendChild(rangeContainer);
      
      qBlock.appendChild(textDiv);
      qBlock.appendChild(sliderWrapper);
      qBlock.appendChild(opinionContainer);
      card.appendChild(qBlock);
    });
    surveyContainer.appendChild(card);
  });
}

function updateSingleSliderFill(slider) {
  const percentage = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  const isRtl = document.body.classList.contains('rtl');
  const computedTrackColor = getComputedStyle(document.body).getPropertyValue('--track-bg').trim() || '#E2E8F0';
  const directionalFlow = isRtl ? 'to left' : 'to right';
  
  if (slider.classList.contains('unrated')) {
    slider.style.background = computedTrackColor;
  } else {
    slider.style.background = `linear-gradient(${directionalFlow}, #FF85A2 0%, #9E7BFF ${percentage}%, ${computedTrackColor} ${percentage}%, ${computedTrackColor} 100%)`;
  }
}

function refreshAllSliderFills() {
  document.querySelectorAll('.navbar-slider').forEach(slider => {
    updateSingleSliderFill(slider);
  });
}

function evaluateContextString(val) {
  const dict = translations[currentLang].likert;
  if (val <= 1.8) return dict.str_disagree;
  if (val <= 2.6) return dict.disagree;
  if (val <= 3.4) return dict.neutral;
  if (val <= 4.2) return dict.agree;
  return dict.str_agree;
}

function applyLanguagePack() {
  const pack = translations[currentLang];
  const currentWebsite = websitesPool[currentWebsiteIndex];
  
  document.body.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', currentLang === 'fa');

  document.getElementById('target-site-title').textContent = currentLang === 'fa' ? currentWebsite.nameFa : currentWebsite.nameEn;
  document.getElementById('target-site-link').href = currentWebsite.url;

  document.getElementById('user-name').placeholder = pack.name_placeholder;
  document.getElementById('user-age').placeholder = pack.age_placeholder;
  document.getElementById('user-job').placeholder = pack.job_placeholder;

  const submitBtn = document.getElementById('master-submit-btn');
  if (currentWebsiteIndex < websitesPool.length - 1) {
    submitBtn.textContent = pack.submit_btn_next;
  } else {
    submitBtn.textContent = pack.submit_btn_final;
  }

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (pack[key]) element.textContent = pack[key];
  });

  document.querySelectorAll('[data-cat-key]').forEach(element => {
    const key = element.getAttribute('data-cat-key');
    if (pack.categories[key]) element.textContent = pack.categories[key];
  });

  document.querySelectorAll('[data-q-id]').forEach(element => {
    const id = element.getAttribute('data-q-id');
    if (pack.questions[id]) element.textContent = pack.questions[id];
    
    const contextIndicator = document.getElementById(`context_${id}`);
    const slider = document.querySelector(`input[name="${id}"]`);
    if (trackingMetrics[id] && trackingMetrics[id].hasInteracted) {
      contextIndicator.textContent = evaluateContextString(parseFloat(slider.value));
    } else {
      contextIndicator.textContent = pack.not_rated;
    }

    const opInput = document.getElementById(`opinion_${id}`);
    if (opInput) opInput.placeholder = pack.opinion_holder;
  });

  refreshAllSliderFills();
}

function updateFormProgress() {
  let adjustedSlidersCount = 0;
  Object.keys(trackingMetrics).forEach(key => {
    if (trackingMetrics[key].hasInteracted) adjustedSlidersCount++;
  });
  const progressPercent = (adjustedSlidersCount / totalQuestionsCount) * 100;
  document.getElementById('survey-progress').style.width = `${progressPercent}%`;
}

function cleanResetFormState() {
  targetStageStartTime = Date.now();
  document.getElementById('questionnaire-form').reset();
  
  Object.keys(trackingMetrics).forEach(key => {
    trackingMetrics[key] = {
      hasInteracted: false,
      interactionCount: 0,
      lastInteractionTime: Date.now(),
      cumulativeFocusDurationMs: 0
    };
    
    const badge = document.getElementById(`badge_${key}`);
    const context = document.getElementById(`context_${key}`);
    const slider = document.querySelector(`input[name="${key}"]`);
    
    if (badge) { badge.textContent = '--'; badge.classList.remove('active-status'); }
    if (context) { context.textContent = translations[currentLang].not_rated; context.classList.remove('active-status'); }
    if (slider) { slider.classList.add('unrated'); }
  });

  updateFormProgress();
  applyLanguagePack();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function triggerJSONDownload(payload) {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", currentParticipantFilename || "hci_dataset.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// 🔐 Secure Global Pipeline: Streams dataset states safely into your Google Apps Script Proxy
async function syncDatasetToGitHub(payload) {
  // ⚠️ PASTE YOUR ACTUAL GOOGLE WEB APP EXECUTION URL HERE
  const googleProxyUrl = "https://script.google.com/macros/s/XXXXXX/exec"; 

  try {
    const response = await fetch(googleProxyUrl, {
      method: "POST",
      body: JSON.stringify({
        // Automatically targets the Dataset directory inside your repository
        filename: `Dataset/${currentParticipantFilename}`, 
        payload: payload
      })
    });
    
    if (response.ok) {
      console.log("State successfully compiled and streamed through Google endpoint proxy.");
    } else {
      console.error("Proxy rejected data stream transmission request.");
    }
  } catch (error) {
    console.error("Network interface pipeline dropped:", error);
  }
}

// Theme Event Wire
document.getElementById('theme-toggle-btn').addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.classList.toggle('dark-theme', currentTheme === 'dark');
  document.getElementById('theme-icon').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  refreshAllSliderFills();
});

// Localization Switch Wire
document.getElementById('lang-toggle-btn').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'fa' : 'en';
  applyLanguagePack();
});

// STEP 1: Registration Transition Engine
document.getElementById('start-session-btn').addEventListener('click', () => {
  const nameVal = document.getElementById('user-name').value.trim();
  const ageVal = document.getElementById('user-age').value.trim();
  const jobVal = document.getElementById('user-job').value.trim();
  const regCard = document.getElementById('screen-registration');

  if (!nameVal || !ageVal) {
    regCard.classList.add('required-error');
    alert(translations[currentLang].validation_demographics_alert);
    return;
  }

  compiledDataset.session_metadata.participant.name = nameVal;
  compiledDataset.session_metadata.participant.age = parseInt(ageVal, 10);
  compiledDataset.session_metadata.participant.job_or_field = jobVal !== "" ? jobVal : null;

  const sanitizedName = nameVal.toLowerCase().replace(/[^a-z0-9]/g, '_');
  const timestamp = Math.floor(Date.now() / 1000);
  currentParticipantFilename = `${sanitizedName}_${timestamp}.json`;

  campaignGlobalStartTime = Date.now();
  targetStageStartTime = Date.now();

  regCard.style.display = 'none';
  document.getElementById('screen-evaluation').style.display = 'block';
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// STEP 2: Multi-Website Loop Form Submission Handler
document.getElementById('questionnaire-form').addEventListener('submit', function(e) {
  e.preventDefault();

  let firstUnansweredBlock = null;
  let validationPassed = true;

  Object.keys(trackingMetrics).forEach(key => {
    const blockEl = document.getElementById(`block_${key}`);
    if (!trackingMetrics[key].hasInteracted) {
      validationPassed = false;
      blockEl.classList.add('required-error');
      if (!firstUnansweredBlock) firstUnansweredBlock = blockEl;
    } else {
      blockEl.classList.remove('required-error');
    }
  });

  if (!validationPassed) {
    firstUnansweredBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
    alert(translations[currentLang].validation_alert);
    return; 
  }

  const currentWebsite = websitesPool[currentWebsiteIndex];
  const formData = new FormData(this);
  
  const currentWebsitePayload = {
    website_id: currentWebsite.id,
    url: currentWebsite.url,
    time_spent_seconds: parseFloat(((Date.now() - targetStageStartTime) / 1000).toFixed(2)),
    metrics: {}
  };

  for (let [key, value] of formData.entries()) {
    const userOpinionText = document.getElementById(`opinion_${key}`).value.trim();
    currentWebsitePayload.metrics[key] = {
      score: parseFloat(value),
      opinions: userOpinionText !== "" ? userOpinionText : null,
      interaction_count: trackingMetrics[key].interactionCount,
      focus_time_ms: trackingMetrics[key].cumulativeFocusDurationMs
    };
  }

  compiledDataset.website_evaluations[currentWebsite.id] = currentWebsitePayload;

  // Handle routing progress or study completion loops cleanly
  if (currentWebsiteIndex < websitesPool.length - 1) {
    // Stream current intermediate state modification to remote proxy storage endpoint
    syncDatasetToGitHub(compiledDataset);
    currentWebsiteIndex++;
    cleanResetFormState();
  } else {
    // End of the entire campaign setup
    compiledDataset.session_metadata.total_duration_seconds = parseFloat(((Date.now() - campaignGlobalStartTime) / 1000).toFixed(2));
    
    // Final definitive push ensuring total duration metadata updates directly to repo
    syncDatasetToGitHub(compiledDataset);
    
    // Trigger local backup download and notify participant
    triggerJSONDownload(compiledDataset);
    alert(translations[currentLang].completion_alert);
  }
});

// Initial Setup Activation on Load
initializeFormStructure();
applyLanguagePack();
