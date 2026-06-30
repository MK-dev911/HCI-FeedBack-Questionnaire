# 📊 HCI Dataset Collector & Telemetry Engine 🌸

This repository houses a high-fidelity, highly optimized Human-Computer Interaction (HCI) evaluation framework engineered to capture micro-behavioral user telemetry during interactive web application assessments. Built entirely on a lightweight, zero-dependency vanilla architecture (`HTML5`, `CSS3`, `Vanilla JavaScript`), the system dynamically guides participants through targeted testing campaigns while constructing rich, multi-dimensional datasets explicitly structured for downstream machine learning algorithms and behavioral-predictive pipelines.

> 🌐 **Live Production Environment:** [Experience the Evaluation Platform Live](https://mk-dev911.github.io/HCI-FeedBack-Questionnaire/)

---

## ⚡ Core Architecture & Engineering Breakdown

The platform is split into two highly specialized engineering domains, isolating visual presentation from data collection to maintain a clean separation of concerns.

### 🎨 Frontend Web Engineering
* **Dynamic Bi-Directional UI Switching (LTR/RTL):** Features a robust localization pipeline. When a user toggles between English and Persian, the system instantly mirrors the layout engine (Left-to-Right $\leftrightarrow$ Right-to-Left), injects localized typography fonts (`Poppins` vs. `Vazirmatn`), and re-renders contextual cues seamlessly without disrupting application state.
* **Aesthetic & Accessible Design System:** A cohesive, custom-tailored design suite featuring a balanced, minimal layout with clean aesthetic accents (including option suites for customized themes, subtle curves, and a premium dark-theme mode). The system relies entirely on semantic CSS variables to deliver high-contrast readability, reducing evaluation fatigue and maximizing user engagement.
* **Zero-Dependency State Management:** Eliminates bloated modern framework overhead by utilizing native DOM runtime operations. The interface ensures instant, clean-resets of forms, continuous custom slider fill-gradients, progress tracking metrics, and state synchronization across evaluation iterations without requiring a single page reload.

### 📊 Machine Learning Data & Tracking Pipeline
* **Granular Focus Duration Telemetry:** Implements high-precision event listeners (`mousedown`, `touchstart`, `input`) to compute the exact cumulative focal interaction duration (measured in milliseconds) for each standalone question block. This isolates active interaction windows from idle browser states.
* **Continuous Rating Scales & Bias Elimination:** Replaces standard discrete integer radio buttons with non-snapping continuous micro-sliders. Sliders start on an unrated baseline state to eliminate participant anchoring bias, allowing users to input precise floating-point values ($1.00$ to $5.00$) to provide high-variance continuous features for model training.
* **Micro-Interaction Hesitation Counters:** Captures real-time adjustment frequencies and input modification counts per heuristic. This data provides the machine learning pipeline with unique mathematical proxies for user hesitation, cognitive load, and visual ambiguity.
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

* **Core Runtime Engine:** Vanilla ECMAScript 6+ (JavaScript) – Zero-dependency, pure client-side execution logic.
* **Markup & UI Layer:** HTML5 / Advanced CSS3 Custom Properties (Semantic variables for dynamic theme execution and bi-directional LTR/RTL structural layout overrides).
* **Data Interchange & Schema Engine:** Standardized JSON Payload Architecture (Structured object serialization mapped natively for model ingestion and asynchronous database synchronization).

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
