const styleFixes = document.createElement('style');
styleFixes.textContent = `
  [data-i18n="demographics_desc"] { 
    white-space: pre-line; 
    line-height: 1.8; 
    margin: 20px 0 16px 0;
    text-align: justify;
    font-size: 0.95rem;
    padding: 24px;
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%);
    border: 1px solid rgba(30, 58, 138, 0.15);
    border-radius: 16px;
    color: #1E293B;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.01);
  }

  #estimated-time-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background-color: #EFF6FF;
    border: 1px dashed #3B82F6;
    border-radius: 20px;
    color: #1E3A8A;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 24px;
    width: max-content;
  }

  .custom-modal-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    z-index: 10000; opacity: 0; pointer-events: none;
    transition: opacity 0.3s ease;
  }
  .custom-modal-overlay.show { opacity: 1; pointer-events: auto; }
  .custom-modal-card {
    background: #FFFFFF; padding: 30px; border-radius: 24px;
    width: 90%; max-width: 480px; text-align: center;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    border: 1px solid rgba(30, 58, 138, 0.2);
    transform: translateY(20px); transition: transform 0.3s ease;
  }
  .custom-modal-overlay.show .custom-modal-card { transform: translateY(0); }
  .custom-modal-title { font-size: 1.3rem; font-weight: 700; color: #1E3A8A; margin-bottom: 12px; }
  .custom-modal-text { font-size: 0.95rem; color: #475569; line-height: 1.6; margin-bottom: 24px; }
  .custom-modal-actions { display: flex; gap: 12px; justify-content: center; }
  .modal-btn {
    padding: 12px 20px; border-radius: 12px; font-weight: 600; font-size: 0.9rem;
    cursor: pointer; transition: all 0.2s ease; border: none;
  }
  .modal-btn-primary { background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%); color: white; }
  .modal-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3); }
  .modal-btn-secondary { background: #F1F5F9; color: #475569; border: 1px solid #E2E8F0; }
  .modal-btn-secondary:hover { background: #E2E8F0; }

  .dark-theme [data-i18n="demographics_desc"] {
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%);
    border-color: rgba(59, 130, 246, 0.3); color: #E2E8F0;
  }
  .dark-theme #estimated-time-badge { background-color: rgba(30, 58, 138, 0.4); border-color: #3B82F6; color: #93C5FD; }
  .dark-theme .custom-modal-card { background: #0F172A; border-color: rgba(59, 130, 246, 0.4); }
  .dark-theme .custom-modal-title { color: #3B82F6; }
  .dark-theme .custom-modal-text { color: #94A3B8; }
  .dark-theme .modal-btn-secondary { background: #1E293B; color: #E2E8F0; border-color: #334155; }
  .dark-theme .modal-btn-secondary:hover { background: #334155; }
`;
document.head.appendChild(styleFixes);

const modalOverlay = document.createElement('div');
modalOverlay.className = 'custom-modal-overlay';
modalOverlay.id = 'decision-modal';
modalOverlay.innerHTML = `
  <div class="custom-modal-card">
    <div class="custom-modal-title" id="modal-title">ثبت موفقیت‌آمیز اطلاعات</div>
    <div class="custom-modal-text" id="modal-text">اطلاعات ارزیابی این وب‌سایت با موفقیت ذخیره شد. مایلید یک وب‌سایت دیگر را هم تست کنید یا فرآیند پایان یابد؟</div>
    <div class="custom-modal-actions">
      <button class="modal-btn modal-btn-primary" id="modal-btn-continue">بررسی وب‌سایت بعدی 🔄</button>
      <button class="modal-btn modal-btn-secondary" id="modal-btn-close">اتمام و خروج ❌</button>
    </div>
  </div>
`;
document.body.appendChild(modalOverlay);

const translations = {
  en: {
    welcome_title: "Welcome Participant",
    demographics_label: "HCI Study Registration",
    demographics_desc: `Welcome!
Thank you sincerely for dedicating your time to participate in this research. 🌱
In this study, we aim to evaluate user experiences while interacting with a website to help design and improve more user-friendly and high-quality platforms.
You do not need any specialized knowledge or familiarity with web design or Human-Computer Interaction (HCI) to participate in this questionnaire. Simply explore the website as you normally would and answer the questions based on your personal experience and opinion.
All your responses are confidential and will be used solely for research purposes.
Thank you for your valuable support and cooperation, and we hope completing this questionnaire won't take much of your time.`,
    estimated_time: "⏱️ Estimated time per site: 3 to 5 minutes",
    name_placeholder: "Name or Pseudonym",
    age_placeholder: "Age",
    job_placeholder: "Job / Field of Study (Optional)",
    start_btn: "Begin System Evaluation →",
    header_title: "System Experience Evaluation",
    header_desc: "Please move the sliders to rate your experience. Feel free to skip any questions you want!",
    legend_min: "1.0 = Strongly Disagree",
    legend_max: "5.0 = Strongly Agree",
    not_rated: "Not Rated yet",
    opinion_holder: "Optional: Share your thoughts or context for this rating...",
    submit_btn_general: "Submit Evaluation Metrics",
    validation_alert: "Validation Error: Please review and calibrate all continuous rating sliders before submitting.",
    validation_demographics_alert: "Please enter your Name and Age to initialize your study profile.",
    evaluating_target: "Currently Evaluating Platform:",
    visit_site_btn: "Open Website in Split Screen ↗",
    completion_alert: "Excellent! Your evaluation campaign is complete and successfully submitted. Thank you for your participation!",
    modal_title: "Evaluation Submitted Successfully",
    modal_text: "Your ratings for this website have been securely logged. Would you like to evaluate another website to enrich our research data, or finish the session?",
    modal_btn_cont: "Evaluate Another Site 🔄",
    modal_btn_end: "Finish & Exit ❌",
    categories: {
      part1: "Part 1: Interaction & Usability Design (HCI)",
      part2: "Part 2: Technical Speed & Responsiveness",
      part3: "Part 3: Overall Validation"
    },
    likert: {
      str_disagree: "Strongly Disagree", disagree: "Disagree", neutral: "Neutral", agree: "Agree", str_agree: "Strongly Agree"
    },
    questions: {
      hci_flexibility: "It is easy to use the site in different ways based on my needs.",
      hci_applicability: "The site has all the features I actually need.",
      hci_accessibility: "I can use and read the site easily on both my phone and computer.",
      hci_reliability: "The site works smoothly without any errors, bugs, or freezing.",
      hci_responsiveness: "The buttons and pages react instantly when I click them.",
      hci_consistency: "The layout and look of the site are similar and neat on all pages.",
      perf_cls: "The text and images stay in place and do not jump around while loading.",
      perf_inp: "The site responds quickly when I type or click things.",
      perf_tbt: "I can scroll and click immediately without waiting for the page to unfreeze.",
      perf_fcp: "The website loads up very fast.",
      perf_tti: "Once the site loads, it is immediately ready and I can use the parts without waiting.",
      perf_fid: "The very first time I clicked a button or a link, the site responded immediately without delay.",
      val_satisfaction: "Overall, I am happy with my experience on this site.",
      val_success: "I easily finished what I wanted to do on the site today."
    }
  },
  fa: {
    welcome_title: "خوش آمدید",
    demographics_label: "ثبت‌نام فرآیند ارزیابی سیستم",
    demographics_desc: `خوش آمدید!
از اینکه وقت خود را برای شرکت در این پژوهش اختصاص داده‌اید، صمیمانه سپاسگزاریم. 🌱
در این پژوهش قصد داریم تجربه کاربران هنگام استفاده از یک وب‌سایت را بررسی کنیم تا بتوانیم به طراحی و بهبود وب‌سایت‌های کاربرپسندتر و باکیفیت‌تر کمک کنیم.
برای شرکت در این پرسشنامه نیازی به دانش تخصصی یا آشنایی با طراحی وب و تعامل انسان و کامپیوتر (HCI) ندارید. تنها کافی است وب‌سایت را مانند همیشه بررسی کنید و بر اساس تجربه و نظر شخصی خود به پرسش‌ها پاسخ دهید.
تمام پاسخ‌های شما محرمانه است و فقط برای اهداف پژوهشی استفاده خواهد شد.
از همراهی و همکاری ارزشمند شما سپاسگزاریم و امیدواریم تکمیل این پرسشنامه زمان زیادی از شما نگیرد.`,
    estimated_time: "⏱️ زمان تقریبی هر سایت: ۳ الی ۵ دقیقه",
    name_placeholder: "نام یا نام مستعار",
    age_placeholder: "سن",
    job_placeholder: "شغل / رشته تحصیلی (اختیاری)",
    start_btn: "شروع فرآیند ارزیابی سیستم ←",
    header_title: "ارزیابی تجربه کاربری وب‌سایت",
    header_desc: "لطفاً با حرکت دادن نوارها به تجربه‌تان امتیاز دهید. هر سوالی را که مایل نبودید می‌توانید بدون پاسخ رها کنید (اختیاری).",
    legend_min: "۱.۰ = کاملاً مخالفم",
    legend_max: "۵.۰ = کاملاً موافقم",
    not_rated: "هنوز امتیازی داده نشده",
    opinion_holder: "اختیاری: دیدگاه یا دلیل خود را برای این امتیاز بنویسید...",
    submit_btn_general: "ثبت اطلاعات ارزیابی وب‌سایت",
    validation_alert: "خطای اعتبار‌سنجی: لطفاً قبل از ارسال فرم، تمام نوارهای امتیازدهی را تنظیم کنید.",
    validation_demographics_alert: "لطفاً برای ایجاد پروفایل ارزیابی، نام و سن خود را وارد کنید.",
    evaluating_target: "وب‌سایت در حال ارزیابی:",
    visit_site_btn: "باز کردن هم‌زمان وب‌سایت در نیم‌صفحه کنار ↗",
    completion_alert: "بسیار عالی! تمام ارزیابی‌های شما با موفقیت در پرونده شما ذخیره شد. از زمان و همکاری صمیمانه شما سپاسگزاریم!",
    modal_title: "ثبت موفقیت‌آمیز اطلاعات وب‌سایت",
    modal_text: "امتیازات شما برای این وب‌سایت با موفقیت ثبت شد. مایلید برای کمک به دقت پژوهش ما، یک وب‌سایت دیگر را هم ارزیابی کنید یا مایلید فرآیند را تمام کنید؟",
    modal_btn_cont: "بررسی وب‌سایت بعدی 🔄",
    modal_btn_end: "اتمام و خروج نهایی ❌",
    categories: {
      part1: "بخش ۱: طراحی تعاملی و اصول کاربری (HCI)",
      part2: "بخش ۲: سرعت فنی و واکنش‌گرایی سایت",
      part3: "بخش ۳: اعتبارسنجی و رضایت کلی"
    },
    likert: {
      str_disagree: "کاملاً مخالفم", disagree: "مخالفم", neutral: "بی‌نظر", agree: "موافقم", str_agree: "کاملاً موافقم"
    },
    questions: {
      hci_flexibility: "استفاده از سایت به روش‌های مختلف و بر اساس نیاز من راحت است.",
      hci_applicability: "سایت دقیقاً همان امکاناتی که به کارم می‌آید را دارد.",
      hci_accessibility: "راحت می‌توانم محتوای سایت را در هر دستگاهی (گوشی یا کامپیوتر) بخوانم و استفاده کنم.",
      hci_reliability: "سایت خیلی روان و بدون خطا یا هنگ کردن کار می‌کند.",
      hci_responsiveness: "دکمه‌ها و صفحات سایت به محض کلیک کردن، سریع عمل میکنند.",
      hci_consistency: "ظاهر سایت و کلمات استفاده شده در همه صفحات شبیه به هم و یکدست است.",
      perf_cls: "متن‌ها و تصاویر سر جای خود هستند و موقع باز شدن صفحه ناگهان جابه‌جا نمی‌شوند.",
      perf_inp: "سایت موقع کلیک کردن یا تایپ کردن خیلی سریع جواب می‌دهد.",
      perf_tbt: "بدون معطل شدن یا قفل کردن صفحه، می‌توانم فوراً اسکرول کنم و کلیک کنم.",
      perf_fcp: "سایت خیلی سریع و زود بالا می‌آید.",
      perf_tti: "به محض اینکه ظاهر سایت بالا آمد، فوراً آماده به کار بود و قطعات سایت برای کلیک کردن من معطلم نکردند.",
      perf_fid: "همان اولین باری که روی یک دکمه یا لینک کلیک کردم، سایت بدون هیچ مکثی فوراً عکس‌العمل نشان داد.",
      val_satisfaction: "در کل، از کار کردن با این سایت راضی هستم.",
      val_success: "امروز کارم را در این سایت راحت و بدون دردسر انجام دادم."
    }
  }
};

// 🌍 پلتفرم جامع ارزیابی سیستم با معادل‌سازی فرامرزی
const masterWebsitesPool = [
  { id: "digikala", nameEn: "Amazon (E-Commerce)", nameFa: "دیجی‌کالا (فروشگاه آنلاین)", urlFa: "https://www.digikala.com", urlEn: "https://www.amazon.com" },
  { id: "snapp", nameEn: "Uber (Ride-Hailing & Super App)", nameFa: "اسنپ (سوپر اپلیکیشن)", urlFa: "https://www.snapp.ir", urlEn: "https://www.uber.com" },
  { id: "aparat", nameEn: "YouTube (Video Platform)", nameFa: "آپارات (سرویس اشتراک ویدیو)", urlFa: "https://www.aparat.com", urlEn: "https://www.youtube.com" },
  { id: "divar", nameEn: "Craigslist / eBay (Classifieds)", nameFa: "دیوار (نیازمندی‌های آنلاین)", urlFa: "https://divar.ir", urlEn: "https://www.ebay.com" },
  { id: "filimo", nameEn: "Netflix (Streaming Service)", nameFa: "فیلیمو (سامانه نمایش ویدیو)", urlFa: "https://www.filimo.com", urlEn: "https://www.netflix.com" },
  { id: "torob", nameEn: "Google Shopping (Price Search)", nameFa: "ترب (موتور جستجوی خرید)", urlFa: "https://torob.com", urlEn: "https://www.google.com/shopping" }
];

let evaluatedWebsiteIds = [];
let currentWebsite = null;

const surveyStructure = [
  { catKey: "part1", questions: ["hci_flexibility", "hci_applicability", "hci_accessibility", "hci_reliability", "hci_responsiveness", "hci_consistency"] },
  { catKey: "part2", questions: ["perf_cls", "perf_inp", "perf_tbt", "perf_fcp", "perf_tti", "perf_fid"] }, 
  { catKey: "part3", questions: ["val_satisfaction", "val_success"] }
];

let currentLang = 'fa'; 
let currentTheme = 'light';

const compiledDataset = {
  session_metadata: {
    total_duration_seconds: 0,
    generated_timestamp: new Date().toISOString(),
    evaluated_sites_count: 0,
    participant: { name: null, age: null, job_or_field: null }
  },
  website_evaluations: {}
};

let trackingMetrics = {};
let targetStageStartTime = null;
let campaignGlobalStartTime = null;
let totalQuestionsCount = 0;
let currentParticipantFilename = null;

const surveyContainer = document.getElementById('survey-content');

function pickRandomUnvisitedWebsite() {
  const availableSites = masterWebsitesPool.filter(site => !evaluatedWebsiteIds.includes(site.id));
  if (availableSites.length === 0) return null; 
  return availableSites[Math.floor(Math.random() * availableSites.length)];
}

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
  const computedTrackColor = getComputedStyle(document.body).getPropertyValue('--track-bg').trim() || '#CBD5E1';
  const directionalFlow = isRtl ? 'to left' : 'to right';
  
  if (slider.classList.contains('unrated')) {
    slider.style.background = computedTrackColor;
  } else {
    slider.style.background = `linear-gradient(${directionalFlow}, #1E3A8A 0%, #3B82F6 ${percentage}%, ${computedTrackColor} ${percentage}%, ${computedTrackColor} 100%)`;
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
  
  document.body.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', currentLang === 'fa');

  // 🔄 تغییر آدرس و نام بر اساس لوکیشن انتخابی کاربر
  if (currentWebsite) {
    if (currentLang === 'fa') {
      document.getElementById('target-site-title').textContent = currentWebsite.nameFa;
      document.getElementById('target-site-link').href = currentWebsite.urlFa;
    } else {
      document.getElementById('target-site-title').textContent = currentWebsite.nameEn;
      document.getElementById('target-site-link').href = currentWebsite.urlEn;
    }
  }

  document.getElementById('user-name').placeholder = pack.name_placeholder;
  document.getElementById('user-age').placeholder = pack.age_placeholder;
  document.getElementById('user-job').placeholder = pack.job_placeholder;

  document.getElementById('master-submit-btn').textContent = pack.submit_btn_general;
  
  document.getElementById('modal-title').textContent = pack.modal_title;
  document.getElementById('modal-text').textContent = pack.modal_text;
  document.getElementById('modal-btn-continue').textContent = pack.modal_btn_cont;
  document.getElementById('modal-btn-close').textContent = pack.modal_btn_end;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (pack[key]) {
      element.textContent = pack[key];
      if (key === 'demographics_desc') {
        let badge = document.getElementById('estimated-time-badge');
        if (!badge) {
          badge = document.createElement('div');
          badge.id = 'estimated-time-badge';
          element.after(badge);
        }
        badge.innerHTML = pack.estimated_time;
      }
    }
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

function setupNextWebsiteEvaluation() {
  currentWebsite = pickRandomUnvisitedWebsite();
  
  if (!currentWebsite) {
    alert(translations[currentLang].completion_alert);
    document.getElementById('screen-evaluation').style.display = 'none';
    return;
  }

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

async function syncDatasetToGitHub(payload) {
  const googleProxyUrl = "https://script.google.com/macros/s/AKfycbwsuLJrmqhlHhM8gXTY4vE5ga1tawiWAijKVN22WJOA-mfKI4p4MlnbmnN-iYUu95bx/exec"; 

  try {
    const response = await fetch(googleProxyUrl, {
      method: "POST",
      body: JSON.stringify({
        filename: currentParticipantFilename, 
        payload: payload 
      })
    });
    
    if (response.ok) {
      console.log("Central JSON state file updated successfully.");
    } else {
      console.error("Proxy rejected centralized data sync payload.");
    }
  } catch (error) {
    console.error("Network interface pipeline dropped:", error);
  }
}

function showDecisionModal() {
  document.getElementById('decision-modal').classList.add('show');
}

function hideDecisionModal() {
  document.getElementById('decision-modal').classList.remove('show');
}

document.getElementById('modal-btn-continue').addEventListener('click', () => {
  hideDecisionModal();
  setupNextWebsiteEvaluation();
});

document.getElementById('modal-btn-close').addEventListener('click', () => {
  hideDecisionModal();
  alert(translations[currentLang].completion_alert);
  document.getElementById('screen-evaluation').style.display = 'none';
});

document.getElementById('theme-toggle-btn').addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.classList.toggle('dark-theme', currentTheme === 'dark');
  document.getElementById('theme-icon').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  refreshAllSliderFills();
});

document.getElementById('lang-toggle-btn').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'fa' : 'en';
  applyLanguagePack();
});

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
  
  currentWebsite = pickRandomUnvisitedWebsite();
  targetStageStartTime = Date.now();

  regCard.style.display = 'none';
  document.getElementById('screen-evaluation').style.display = 'block';
  
  applyLanguagePack();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('target-site-link').addEventListener('click', function(e) {
  e.preventDefault();
  const halfWidth = Math.floor(window.screen.availWidth / 2);
  const fullHeight = window.screen.availHeight;
  const features = `width=${halfWidth},height=${fullHeight},left=0,top=0,resizable=yes,scrollbars=yes,status=no,location=yes`;
  window.open(this.href, 'hciTargetPlatformWindow', features);
});

document.getElementById('questionnaire-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  
  const currentWebsitePayload = {
    website_id: currentWebsite.id,
    url: currentLang === 'fa' ? currentWebsite.urlFa : currentWebsite.urlEn,
    time_spent_seconds: parseFloat(((Date.now() - targetStageStartTime) / 1000).toFixed(2)),
    metrics: {}
  };

  for (let [key, value] of formData.entries()) {
    const userOpinionText = document.getElementById(`opinion_${key}`).value.trim();
    const hasInteracted = trackingMetrics[key].hasInteracted;
    
    currentWebsitePayload.metrics[key] = {
      score: hasInteracted ? parseFloat(value) : null,
      opinions: userOpinionText !== "" ? userOpinionText : null,
      interaction_count: trackingMetrics[key].interactionCount,
      focus_time_ms: trackingMetrics[key].cumulativeFocusDurationMs
    };
  }

  compiledDataset.website_evaluations[currentWebsite.id] = currentWebsitePayload;
  
  evaluatedWebsiteIds.push(currentWebsite.id);
  compiledDataset.session_metadata.evaluated_sites_count = evaluatedWebsiteIds.length;
  compiledDataset.session_metadata.total_duration_seconds = parseFloat(((Date.now() - campaignGlobalStartTime) / 1000).toFixed(2));

  syncDatasetToGitHub(compiledDataset);
  showDecisionModal();
});

initializeFormStructure();
applyLanguagePack();
