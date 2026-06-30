# 📊 HCI Dataset Collector & Telemetry Engine 🌸

This repository houses a high-fidelity, responsive Human-Computer Interaction (HCI) evaluation framework meticulously engineered to capture micro-behavioral user telemetry during interactive web application assessments. Built entirely on a lightweight, zero-dependency vanilla architecture, the system dynamically guides participants through targeted testing campaigns while constructing rich, multi-dimensional datasets explicitly structured for downstream machine learning engineering and behavior-predictive pipelines.

By blending robust performance tracking with user-centric interaction design, this engine transforms traditional qualitative feedback into high-density, quantitative features ideal for training classification, regression, and cognitive-load estimation models.

> **✨ Live Environment Evaluation:** [Explore the Live Questionnaire Interface ↗](https://mk-dev911.github.io/HCI-FeedBack-Questionnaire/)

---

## ⚡ Core Architecture & Engineering Breakdown

To maintain strict structural separation and clean data-collection hygiene, the platform is divided into two highly specialized engineering domains: **Frontend Web Engineering** and **Machine Learning Telemetry Pipelines**.

### 🎨 Frontend Web Engineering
* **Dynamic Bi-Directional UI Switching (LTR/RTL):** Features a fully responsive, state-driven localization engine. The UI transitions seamlessly between English (Left-to-Right) and Persian (Right-to-Left) structural layout mirroring instantly upon user toggle. This ensures zero friction for international and local cohort distributions.
* **Aesthetic Responsive Design 🎀:** Built with a cohesive, carefully tailored visual system. Utilizing modern CSS custom properties (`:root` variables), the interface renders an elegant, minimal palette featuring soft pink, clean lavender, and midnight-dark theme accents. This specialized styling is deliberately optimized for high readability, visual clarity, and the mitigation of participant evaluation fatigue during extended testing sessions.
* **Efficient Pure-DOM State Management:** To keep the platform fast and lightweight, all state mutations are handled via pure vanilla DOM execution. The pipeline ensures complete, leak-free clean resets of forms, slider fill states, and progress indicators when moving between different target systems without requiring expensive browser reloads or third-party framework overhead.

### 📊 Machine Learning Data & Tracking Pipeline
* **Granular Focus Duration Tracking ($T_{focus}$):** Utilizes high-precision event hooks (`mousedown`, `touchstart`, `input`) to calculate the exact cumulative active interaction span (measured in milliseconds) per question block. By filtering out idle or resting states, it isolates true active processing time as a proxy feature for cognitive complexity.
* **Continuous Scale Telemetry ($1.00 \rightarrow 5.00$):** Operates on non-snapping micro-sliders initializing on a neutral, "unrated" baseline state. This structural design choice completely eliminates participant anchoring bias. Once touched, it captures ultra-precise floating-point data points ($1.00$ to $5.00$), offering a continuous spectrum of sentiment data far richer than discrete Likert integer steps.
* **Micro-Interaction Counters:** Real-time modification and calibration frequencies are actively tallied per individual heuristic. Tracking how often a user shifts a slider back and forth yields crucial model features that represent user hesitation, certainty, or cognitive load during evaluation.
* **Qualitative Feature Synthesis:** Each continuous metric is paired with an optional, contextual text-input layer. This pairs quantitative interaction metadata with raw natural language strings, enabling advanced multi-modal downstream analysis (e.g., combining numeric sentiment vectors with text-based NLP embeddings).

---

## 🏛️ Core HCI & Performance Principles Mapping

The evaluation framework consists of **14 continuous rating metrics** across **3 semantic categories**. To ensure structural integrity, every short metric key mapped within the generated JSON file corresponds to an academic HCI principle or a precise Web Performance standard.

### Part 1: Interaction & Usability Design (HCI)
These metrics evaluate structural usability based on standard Human-Computer Interaction heuristics.

| JSON Metric Key | HCI Principle | English Questionnaire Context | Persian Questionnaire Context |
| :--- | :--- | :--- | :--- |
| `hci_flexibility` | **Flexibility & Efficiency of Use** | Easy to use in different ways based on user needs. | استفاده از سایت به روش‌های مختلف و بر اساس نیاز من راحت است. |
| `hci_applicability` | **Utility & Functional Adequacy** | Contains all the actual features and tools required. | سایت دقیقاً همان امکاناتی که به کارم می‌آید را دارد. |
| `hci_accessibility` | **Universal Accessibility / Responsiveness** | Easy to read and interact across mobile and desktop. | راحت می‌توانم محتوای سایت را در هر دستگاهی بخوانم و استفاده کنم. |
| `hci_reliability` | **Error Prevention & Robustness** | Works smoothly without errors, structural bugs, or freezing. | سایت خیلی روان و بدون خطا یا هنگ کردن کار می‌کند. |
| `hci_responsiveness`| **Visibility of System Status / Feedback** | Controls and buttons react instantly upon user action. | دکمه‌ها و صفحات سایت به محض کلیک کردن، سریع عمل میکنند. |
| `hci_consistency` | **Consistency and Standards** | Layout, terminology, and aesthetic are cohesive across views. | ظاهر سایت و کلمات استفاده شده در همه صفحات شبیه به هم و یکدست است. |

### Part 2: Technical Speed & Responsiveness (Core Web Vitals)
These metrics correlate user perceived latency with standard algorithmic web performance telemetry.

| JSON Metric Key | Technical Counterpart | English Questionnaire Context | Persian Questionnaire Context |
| :--- | :--- | :--- | :--- |
| `perf_cls` | **Cumulative Layout Shift (CLS)** | Visual stability; elements don't jump around during loading. | متن‌ها و تصاویر سر جای خود هستند و موقع باز شدن صفحه ناگهان جابه‌جا نمی‌شوند. |
| `perf_inp` | **Interaction to Next Paint (INP)** | Continuous interface responsiveness when typing or clicking. | سایت موقع کلیک کردن یا تایپ کردن خیلی سریع جواب می‌دهد. |
| `perf_tbt` | **Total Blocking Time (TBT)** | Main-thread blocking limits; scrolling isn't frozen. | بدون معطل شدن یا قفل کردن صفحه، می‌توانم فوراً اسکرول کنم و کلیک کنم. |
| `perf_fcp` | **First Contentful Paint (FCP)** | Raw perceived speed of initial DOM content loading. | سایت خیلی سریع و زود بالا می‌آید. |
| `perf_tti` | **Time to Interactive (TTI)** | UI serialization; layout is completely ready for safe input. | به محض اینکه ظاهر سایت بالا آمد، فوراً آماده به کار بود و قطعات سایت معطلم نکردند. |
| `perf_fid` | **First Input Delay (FID)** | First impression discrete responsiveness upon initial action. | همان اولین باری که روی دکمه‌ای کلیک کردم، سایت بدون هیچ مکثی عکس‌العمل نشان داد. |

### Part 3: Overall Validation
High-level target metrics evaluating user task culmination and satisfaction.

| JSON Metric Key | Objective | English Questionnaire Context | Persian Questionnaire Context |
| :--- | :--- | :--- | :--- |
| `val_satisfaction` | **Subjective Satisfaction** | Overall qualitative happiness with the session experience. | در کل، از کار کردن با این سایت راضی هستم. |
| `val_success` | **User Task Success Rate** | Frictionless completion of the user's primary intent. | امروز کارم را در این سایت راحت و بدون دردسر انجام دادم. |

---

## 🗂️ Data Schema Specification (JSON Blueprint)

When a participant completes an evaluation for a targeted system, a central state JSON file named via the convention `${sanitized_name}_${timestamp}.json` is updated and synced. Below is the structural layout documentation of the generated data:

```json
{
  "session_metadata": {
    "total_duration_seconds": 124.5,     // Total time spent on the entire platform
    "generated_timestamp": "2026-06-30T09:45:00.000Z",
    "evaluated_sites_count": 1,
    "participant": {
      "name": "Jane Doe",
      "age": 23,
      "job_or_field": "Computer Engineering"
    }
  },
  "website_evaluations": {
    "digikala": {                        // Target platform unique identifier
      "website_id": "digikala",
      "url": "[https://www.amazon.com](https://www.amazon.com)",   // Swaps dynamically to international equivalent (e.g. Amazon) if locale is English
      "time_spent_seconds": 45.2,         // Total active evaluation duration on this specific site
      "metrics": {
        "hci_flexibility": {
          "score": 4.65,                 // Continuous scale data points (1.00 - 5.00)
          "opinions": "Very intuitive adaptive layout structures.", // Qualitative text input (or null if skipped)
          "interaction_count": 4,        // Dynamic input modification events counter
          "focus_time_ms": 8450          // Cumulative slider active focus interaction span
        },
        "hci_applicability": {
          "score": null,                 // Fields remain safely null if user skips the optional question
          "opinions": null,
          "interaction_count": 0,
          "focus_time_ms": 0
        }
        // ... Repeated cleanly for all 14 metrics defined in the mapping matrices
      }
    }
  }
}
```

---

## 🌐 Dynamic Internationalization & Cross-Border Evaluation

To combat geographic networking restrictions (where specific localized Iranian platforms do not resolve outside the host country), the system incorporates an intelligent fallback mechanism. Changing the application locale dynamically remaps both the UI layout direction and the systemic evaluation targets into globally recognizable peers while maintaining the same `id` structure in the JSON backend.

| Platform ID | Iranian Target System (Persian Locale) | International Equivalent (English Locale) |
| :--- | :--- | :--- |
| `digikala` | دیجی‌کالا (فروشگاه آنلاین) | Amazon (E-Commerce) |
| `snapp` | اسنپ (سوپر اپلیکیشن) | Uber (Ride-Hailing & Super App) |
| `aparat` | آپارات (سرویس اشتراک ویدیو) | YouTube (Video Platform) |
| `divar` | دیوار (نیازمندی‌های آنلاین) | Craigslist / eBay (Classifieds) |
| `filimo` | فیلیمو (سامانه نمایش ویدیو) | Netflix (Streaming Service) |
| `torob` | ترب (موتور جستجوی خرید) | Google Shopping (Price Search) |

---

## 🚀 Tech Stack
* **Language:** Vanilla ECMAScript 6+ (JavaScript)
* **Markup/Styling:** HTML5 / Advanced CSS3 Custom Properties
* **Data Interchange** Format: Standardized JSON Payload

---

## 📂 Quick Start & Local Execution
1. You can simply click on the URL (https://mk-dev911.github.io/HCI-FeedBack-Questionnaire/)
 
 Or
 
3. Clone this repository directly onto your local environment:
 ```bash
   git clone [https://github.com/MK-dev911/HCI-FeedBack-Questionnaire.git]
```

---

## 📈 Future Milestones

[ ] Implement an automated feature-engineering script to preprocess the raw interaction counts and focus metrics into standardized ML tensor shapes.

...
