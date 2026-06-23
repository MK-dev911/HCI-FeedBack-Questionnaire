# 📊 Multi-Target HCI Dataset Collector & Telemetry Engine 🌸

This repository contains a high-fidelity, responsive Human-Computer Interaction (HCI) evaluation framework engineered to capture micro-behavioral user telemetry during web application assessments. Built entirely on a lightweight, zero-dependency vanilla architecture, the system dynamically guides participants through targeted testing phases while constructing rich, multi-dimensional datasets explicitly structured for downstream machine learning and behavior-predictive pipelines.

---

## ⚡ Core Architecture & Engineering Breakdown

The platform is split into two specialized engineering domains: Frontend Architecture and Machine Learning Telemetry Pipelines.

### 🎨 Frontend Web Engineering
* **Dynamic Bi-Directional UI Switching (LTR/RTL):** Fully responsive localization pipeline supporting English (Left-to-Right) and Persian (Right-to-Left) structural layout mirroring instantly on user toggle.
* **Aesthetic Responsive Design:** A cohesive, tailored design system leveraging modern CSS variables to deliver an elegant pink, lavender, and dark-theme accent suite optimized for visibility and reduced evaluation fatigue.
* **Efficient State Management:** Pure DOM execution ensuring complete clean-resets of forms, custom analytical fill gradients, and progress metrics between test sessions without reloading the browser.

### 📊 Machine Learning Data & Tracking Pipeline
* **Granular Focus Duration Tracking:** High-precision telemetry hooks calculating the exact cumulative focal interaction duration (measured in milliseconds) per question block, accounting for paused or resting states.
* **Continuous Rating Telemetry:** Non-snapping micro-sliders running on an unrated baseline to eliminate participant anchoring bias, letting users input ultra-precise float values ($1.00$ to $5.00$).
* **Micro-Interaction Counters:** Tracks real-time adjustments and modification frequencies per heuristic to feed model features dealing with user hesitation or cognitive load.

---

## 🛠️ Telemetry Data Structure (JSON Export)

Upon completing the evaluation matrix, the engine packages all localized interaction variables into a single, comprehensive client-compiled JSON payload ready for model ingestion:

```json
{
  "session_metadata": {
    "total_duration_seconds": 142.65,
    "generated_timestamp": "2026-06-23T14:35:10.123Z",
    "evaluation_campaign_size": 6,
    "participant": {
      "name": "Jane Doe",
      "age": 22,
      "job_or_field": "Computer Engineering"
    }
  },
  "website_evaluations": {
    "digikala": {
      "website_id": "digikala",
      "url": "[https://www.digikala.com](https://www.digikala.com)",
      "time_spent_seconds": 45.2,
      "metrics": {
        "hci_responsiveness": {
          "score": 4.65,
          "opinions": "Visual transitions were remarkably snappy.",
          "interaction_count": 8,
          "focus_time_ms": 12450
        },
        "perf_cls": {
          "score": 2.15,
          "opinions": "Banners caused a heavy shift during image load.",
          "interaction_count": 3,
          "focus_time_ms": 8900
        }
      }
    }
  }
}
```

---

## 🚀 Tech Stack
* **Language:** Vanilla ECMAScript 6+ (JavaScript)
* **Markup/Styling:** HTML5 / Advanced CSS3 Custom Properties
* **Data Interchange** Format: Standardized JSON Payload

---

## 📂 Quick Start & Local Execution
1. You can simply click on the URL( )
 
 Or
 
3. Clone this repository directly onto your local environment:
 ```bash
   git clone [https://github.com/MK-dev911/HCI-FeedBack-Questionnaire.git]
