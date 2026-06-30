@import url('https://fonts.googleapis.com/css2?family=Poppins:wght=400;500;600;700&family=Vazirmatn:wght=400;500;700&display=swap');

:root {
  /* ☀️ پالت رنگی رسمی و آکادمیک (سفید و سورمه‌ای) */
  --primary-navy: #1E3A8A;       
  --primary-blue: #3B82F6;       
  --bg-gradient: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%); 
  --card-bg: rgba(255, 255, 255, 0.95);
  --block-bg: rgba(248, 250, 252, 0.7);
  --text-main: #0F172A;          
  --text-muted: #475569;         
  --track-bg: #CBD5E1;           
  --shadow-color: rgba(30, 58, 138, 0.08);
  --error-color: #EF4444;        
  --input-bg: rgba(255, 255, 255, 1);
  --input-border: rgba(203, 213, 225, 1);
}

/* 🌙 پالت دارک‌مود مهندسی و آکادمیک */
body.dark-theme {
  --bg-gradient: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); 
  --card-bg: rgba(30, 41, 59, 0.95);
  --block-bg: rgba(15, 23, 42, 0.5);
  --text-main: #F8FAFC;
  --text-muted: #94A3B8;
  --track-bg: #334155;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --input-bg: rgba(15, 23, 42, 0.6);
  --input-border: rgba(51, 65, 85, 0.8);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--bg-gradient);
  background-attachment: fixed;
  color: var(--text-main);
  line-height: 1.6;
  padding: 2rem 1rem 4rem 1rem;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  transition: background 0.4s ease, color 0.4s ease;
}

body.rtl {
  font-family: 'Vazirmatn', sans-serif;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.top-bar {
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  margin-bottom: 1rem;
  direction: ltr !important; 
}

.action-btn {
  background: var(--card-bg);
  border: 1px solid var(--input-border);
  color: var(--text-main);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px var(--shadow-color);
  backdrop-filter: blur(10px);
  transition: all 0.25s ease;
}

.action-btn:hover {
  transform: translateY(-2px);
  border-color: var(--primary-blue);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.2);
}

.circle-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-size: 1.1rem;
}

.lang-btn {
  padding: 0 1.2rem;
  border-radius: 14px;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  gap: 0.5rem;
}

.progress-container {
  width: 100%;
  height: 6px;
  background: rgba(203, 213, 225, 0.4);
  border-radius: 10px;
  margin-bottom: 1.5rem;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(to right, var(--primary-navy), var(--primary-blue));
  transition: width 0.4s ease;
}

.registration-zone {
  text-align: center;
  padding: 3.5rem 2rem !important;
  margin-top: 2rem;
}

.main-gradient-title {
  font-size: 2.4rem;
  font-weight: 700;
  background: linear-gradient(to right, var(--primary-navy), var(--primary-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.8rem;
}

.vertical-input-stack {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 400px;
  margin: 2rem auto 0 auto;
}

.input-field-wrapper {
  width: 100%;
  text-align: initial;
}

.registration-zone.required-error {
  border: 2px solid var(--error-color);
  box-shadow: 0 0 25px rgba(239, 68, 68, 0.25);
}

.target-website-card {
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
  border: 2px dashed var(--primary-blue);
  background-color: var(--card-bg);
  border-radius: 24px;
  padding: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 10px 25px var(--shadow-color);
  backdrop-filter: blur(16px);
}

body.dark-theme .target-website-card {
  border-color: var(--primary-blue);
}

.target-badge-label {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary-blue);
  margin-bottom: 0.4rem;
}

#target-site-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.8rem;
}

.visit-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--card-bg);
  border: 1px solid var(--input-border);
  color: var(--primary-navy);
  padding: 0.4rem 1.2rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.25s ease;
}

.visit-link-btn:hover {
  background: var(--primary-navy);
  color: #ffffff;
  border-color: var(--primary-navy);
  transform: translateY(-1px);
}

.header {
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 15px 35px var(--shadow-color);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2.5rem;
  text-align: center;
}

.header h1 {
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(to right, var(--primary-navy), var(--primary-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.header p {
  color: var(--text-muted);
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
}

.legend-container {
  display: flex;
  justify-content: space-between;
  max-width: 450px;
  margin: 0 auto;
  background: rgba(30, 58, 138, 0.04);
  padding: 0.4rem 1.2rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
  border: 1px solid rgba(203, 213, 225, 0.5);
}

.survey-card {
  background: var(--card-bg);
  border-radius: 24px;
  box-shadow: 0 15px 35px var(--shadow-color);
  padding: 2.5rem;
  margin-bottom: 3rem;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section-title {
  font-size: 1.3rem;
  padding-bottom: 0.8rem;
  margin-bottom: 2rem;
  color: var(--primary-navy);
  font-weight: 600;
  position: relative;
}
body.dark-theme .section-title {
  color: var(--primary-blue);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 3px;
  background: var(--primary-blue);
  border-radius: 2px;
}

body:not(.rtl) .section-title::after { left: 0; }
body.rtl .section-title::after { right: 0; }

.question-block {
  background: var(--block-bg);
  padding: 1.8rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.question-block:last-child { margin-bottom: 0; }

.question-block:hover {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 8px 25px rgba(30, 58, 138, 0.05);
}

body.dark-theme .question-block:hover { background: rgba(30, 41, 59, 0.8); }

.question-block.required-error {
  border-color: var(--error-color);
  background: rgba(239, 68, 68, 0.05);
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.15);
}

.question-text {
  font-weight: 500;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
}

.slider-wrapper {
  position: relative;
  margin-bottom: 1.2rem;
}

.range-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.navbar-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 10px;
  background: var(--track-bg);
  outline: none;
  z-index: 2;
}

.navbar-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ffffff;
  border: 4px solid var(--primary-blue);
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(59, 130, 246, 0.3);
  transition: transform 0.15s ease;
}
.navbar-slider::-webkit-slider-thumb:hover { transform: scale(1.2); }

.navbar-slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ffffff;
  border: 4px solid var(--primary-blue);
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(59, 130, 246, 0.3);
  transition: transform 0.15s ease;
}

.navbar-slider.unrated { background: var(--track-bg) !important; }
.navbar-slider.unrated::-webkit-slider-thumb {
  background: #FFFFFF;
  border-color: #CBD5E1;
  box-shadow: none;
}
body.dark-theme .navbar-slider.unrated::-webkit-slider-thumb {
  background: #1E293B;
  border-color: #475569;
}

.score-display-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.scale-context {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

.scale-context.active-status {
  color: var(--primary-blue);
  font-weight: 600;
}

.value-badge {
  background: var(--input-bg);
  color: var(--text-muted);
  border: 1px solid var(--input-border);
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 700;
}

.value-badge.active-status {
  color: var(--primary-navy);
  border-color: rgba(30, 58, 138, 0.4);
  background: #ffffff;
}
body.dark-theme .value-badge.active-status {
  background: #1E293B;
  color: #60A5FA;
  border-color: rgba(96, 165, 250, 0.4);
}

.opinion-container { width: 100%; margin-top: 1rem; }

.opinion-input {
  width: 100%;
  height: 45px;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  font-family: inherit;
  font-size: 0.9rem;
  color: var(--text-main);
  outline: none;
  transition: all 0.3s ease;
}

.opinion-input:focus {
  border-color: var(--primary-blue);
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}
body.dark-theme .opinion-input:focus {
  background: #0F172A;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
}

.submit-btn {
  display: block;
  width: 100%;
  background: linear-gradient(135deg, var(--primary-navy), var(--primary-blue));
  color: white;
  border: none;
  padding: 1.2rem;
  font-size: 1.15rem;
  font-weight: 600;
  border-radius: 18px;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(30, 58, 138, 0.2);
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(30, 58, 138, 0.3);
}
