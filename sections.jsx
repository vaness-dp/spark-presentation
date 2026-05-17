// SPARK — Section components

const { useState, useEffect, useRef } = React;

// ============================================
// Icon helpers
// ============================================
const Icon = {
  Check: (p) =>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M5 12l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,

  X: (p) =>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>,

  Arrow: (p) =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="arrow" {...p}>
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,

  Tg: (p) =>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M21.4 4.3L2.8 11.2c-1.3.5-1.3 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.5.4.7.8.7.4 0 .6-.2.8-.5l2.5-2.4 5 3.7c.9.5 1.6.2 1.9-.9l3.4-15.7c.4-1.5-.4-2.2-1.5-1.7zm-3.2 4.3l-9.3 8.5-.4 4-1.9-5.6 11.3-7.1c.5-.3 1 .1.8.5z" />
    </svg>,

  Download: (p) =>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,

  Spark: (p) =>
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>

};

// Brand mark — refined 4-point spark with concave edges (gem/sparkle silhouette)
function SparkMark({ size = 22 }) {
  return (
    <svg
      className="spark-mark"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true">
      
      <path
        d="M12 0.5 C12 7 13 12 23.5 12 C13 12 12 17 12 23.5 C12 17 11 12 0.5 12 C11 12 12 7 12 0.5 Z"
        fill="currentColor" />
      
    </svg>);

}

// ============================================
// MODAL — Privacy / Terms
// ============================================
function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {if (e.key === "Escape") onClose();};
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="modal-head">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Закрыть">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>);

}

function PrivacyContent() {
  return (
    <>
      <p className="modal-eff">Дата вступления в&nbsp;силу: 1&nbsp;мая 2026&nbsp;г.</p>
      <p>Spark («мы», «сервис») уважает вашу конфиденциальность. Настоящая политика объясняет, какие данные мы собираем, как используем и&nbsp;защищаем их.</p>

      <h4>Какие данные мы&nbsp;собираем</h4>
      <p>При использовании бота мы получаем от&nbsp;Telegram: ваш user_id, имя пользователя (username), имя. В&nbsp;ходе диалога сохраняются ваши текстовые сообщения и&nbsp;ответы AI. При оплате через Telegram Stars — только факт успешной оплаты (реквизиты карты нам не&nbsp;передаются).</p>

      <h4>Как мы&nbsp;используем данные</h4>
      <p>Исключительно для предоставления сервиса: персонализации диалога, хранения прогресса, генерации финального плана. Мы&nbsp;не&nbsp;продаём данные третьим лицам и&nbsp;не&nbsp;используем их для рекламы.</p>

      <h4>Хранение данных</h4>
      <p>Данные хранятся на&nbsp;защищённых серверах Railway (США&nbsp;/&nbsp;ЕС). История диалога хранится до&nbsp;тех пор, пока вы не&nbsp;сбросите её командой&nbsp;/reset или не&nbsp;запросите удаление.</p>

      <h4>Ваши права</h4>
      <p>Вы вправе запросить удаление всех ваших данных в&nbsp;любой момент — напишите нам в&nbsp;поддержку: <a href="https://t.me/krylov_designer" target="_blank" rel="noopener">@krylov_designer</a>. Удаление выполняется в&nbsp;течение 72&nbsp;часов.</p>

      <h4>Контакт</h4>
      <p>По&nbsp;вопросам конфиденциальности: <a href="https://t.me/krylov_designer" target="_blank" rel="noopener">@krylov_designer</a></p>
    </>);

}

function TermsContent() {
  return (
    <>
      <p className="modal-eff">Дата вступления в&nbsp;силу: 1&nbsp;мая 2026&nbsp;г.</p>

      <h4>Описание сервиса</h4>
      <p>Spark&nbsp;— это AI-коучинг сервис в&nbsp;Telegram. Мы&nbsp;предоставляем инструмент для самоанализа и&nbsp;составления персонального плана. Spark не&nbsp;является лицензированным психологом, коучем или консультантом и&nbsp;не&nbsp;несёт ответственности за&nbsp;решения, принятые на&nbsp;основании диалога.</p>

      <h4>Оплата и&nbsp;возврат</h4>
      <p>Оплата разовая — за&nbsp;доступ к&nbsp;курсу. Возврат возможен в&nbsp;течение 24&nbsp;часов после оплаты, если вы не&nbsp;прошли более 2&nbsp;дней курса. Для возврата обратитесь в&nbsp;поддержку: <a href="https://t.me/krylov_designer" target="_blank" rel="noopener">@krylov_designer</a>.</p>

      <h4>Ограничения</h4>
      <p>Сервис предназначен для лиц старше 16&nbsp;лет. Запрещено использование в&nbsp;коммерческих целях без согласования с&nbsp;нами.</p>

      <h4>Изменения</h4>
      <p>Мы&nbsp;вправе изменять условия. При существенных изменениях уведомим через бота.</p>
    </>);

}

// ============================================
// NAV
// ============================================
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const smoothJump = (e, hash) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(hash);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 12;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
        <div className="wrap nav-inner">
          <a className="brand" href="#top" onClick={(e) => smoothJump(e, "#top")}>
            <SparkMark />
            <span className="brand-word">Spark</span>
          </a>
          
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#problem" onClick={(e) => smoothJump(e, "#problem")}>Почему Spark</a>
            <a href="#how" onClick={(e) => smoothJump(e, "#how")}>Как работает</a>
            <a href="#pricing" onClick={(e) => smoothJump(e, "#pricing")}>Цены</a>
            <a href="#vs" onClick={(e) => smoothJump(e, "#vs")}>Сравнение</a>
            <a href="#faq" onClick={(e) => smoothJump(e, "#faq")}>Вопросы</a>

            {/* Mobile only CTA inside menu — matches hero primary CTA */}
            <a className="btn btn-primary nav-mobile-cta" href="https://t.me/spark_find_bot" target="_blank" rel="noopener">
              <Icon.Tg className="icon-lead" /> Начать бесплатно <Icon.Arrow />
            </a>
          </div>
          
          <div className="nav-actions">
            <a className="btn btn-primary btn-sm btn-nav-cta" href="https://t.me/spark_find_bot" target="_blank" rel="noopener">
              <Icon.Tg /> Попробовать
            </a>
            
            <button className="burger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
              <div className={`burger-icon ${menuOpen ? "open" : ""}`}>
                <span></span><span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
      <div className={`nav-backdrop ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}></div>
    </>
  );
}

// ============================================
// HERO — animated chat
// ============================================
const CHAT_SCRIPT = [
{ who: "bot", text: "Когда ты в последний раз делал что-то и не смотрел на часы?" },
{ who: "me", text: "Когда занимался фотографией…" },
{ who: "bot", text: "Почему остановился? Что тогда помешало?" },
{ who: "me", text: "Казалось — несерьёзно, не заработаешь." }];


function ChatPreview() {
  return (
    <div className="chat-card">
      <div className="chat-head">
        <div className="chat-avatar">
          <SparkMark size={20} />
        </div>
        <div style={{ flex: 1 }}>
          <div className="chat-name">Spark</div>
          <div className="chat-status">в&nbsp;сети</div>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--muted-soft)" }}></span>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--muted-soft)" }}></span>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--muted-soft)" }}></span>
        </div>
      </div>
      <div className="chat-body">
        {CHAT_SCRIPT.map((m, i) =>
          <div 
            key={i} 
            className={`bubble bubble-once ${m.who === "bot" ? "bubble-bot" : "bubble-me"}`} 
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {m.text}
          </div>
        )}
        <div 
          className="bubble bubble-bot typing bubble-once" 
          style={{ animationDelay: `${CHAT_SCRIPT.length * 0.15}s` }}
        >
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-blob"></div>
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              <span className="badge-spark"><SparkMark size={11} /></span>
              <span>День&nbsp;1 — бесплатно сегодня</span>
              <span className="badge-arrow">→</span>
            </div>
            <h1 className="hero-title">
              <span className="word">Найди</span>{" "}
              <em className="word">своё&nbsp;дело</em>
              <br />
              <span className="word">за&nbsp;7&nbsp;дней.</span>
            </h1>
            <p className="hero-sub">
              Не курс и не вебинар. <strong>Живой диалог с&nbsp;AI</strong>, который задаёт правильные вопросы — и&nbsp;помогает найти ответы, что уже живут внутри тебя.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="https://t.me/spark_find_bot" target="_blank" rel="noopener">
                <Icon.Tg className="icon-lead" /> Начать бесплатно <Icon.Arrow />
              </a>
              <a className="btn btn-ghost" href="#how">
                Как это работает
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">07</div>
                <div className="hero-stat-label">дней до результата</div>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <div className="hero-stat-num">490 ₽</div>
                <div className="hero-stat-label">базовый · 990₽ Pro</div>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <div className="hero-stat-num">∞</div>
                <div className="hero-stat-label">в Telegram, без подписки</div>
              </div>
            </div>
          </div>
          <div>
            <ChatPreview />
          </div>
        </div>
      </div>
    </section>);

}

// ============================================
// PROBLEM
// ============================================
const PROBLEMS = [
{
  n: "01",
  h: "«Надо разобраться, но не сейчас»",
  p: "Годами откладываешь вопрос «чем я хочу заниматься» — потому что не знаешь с чего начать и страшно получить неудобный ответ."
},
{
  n: "02",
  h: "Коуч за 50 000 ₽ не вариант",
  p: "Живой коучинг дорогой, редкий и непредсказуемый по качеству. Онлайн-курсы — абстрактные, без обратной связи под твою ситуацию."
},
{
  n: "03",
  h: "Книги и тесты не работают",
  p: "Тест на тип личности и пять книг о призвании — ты уже пробовал. Результата нет, потому что нет живого диалога под тебя."
},
{
  n: "04",
  h: "ChatGPT даёт советы, а не вопросы",
  p: "Обычный AI говорит что делать. Spark задаёт вопросы, которые заставляют думать самого — именно это и меняет направление."
}];


function Problem() {
  return (
    <section className="section section-warm" id="problem">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Проблема</span>
          <h2 className="section-title">
            Ты уже знаешь&nbsp;ответы.<br />
            <em>Просто не слышишь себя.</em>
          </h2>
        </div>
        <div className="problem-grid">
          {PROBLEMS.map((p, i) =>
          <div key={i} className="problem-card reveal-card" data-delay={i + 1}>
              <div className="problem-num">{p.n}</div>
              <h3>{p.h}</h3>
              <p>{p.p}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ============================================
// HOW IT WORKS — interactive stepper
// ============================================
const DAYS = [
{
  n: 1,
  t: "Где ты сейчас",
  d: "Точка отсчёта. Что есть, что не устраивает, что привело.",
  chat: [
  { who: "bot", text: "Где ты сейчас находишься? Не на карте — в жизни." },
  { who: "me", text: "Работа норм, но топчусь на месте." },
  { who: "bot", text: "Что значит «топчусь» — конкретно?" },
  { who: "me", text: "Делаю то же, что и три года назад." }]

},
{
  n: 2,
  t: "Когда горели глаза",
  d: "Прошлое, в котором ты был по-настоящему увлечён.",
  chat: [
  { who: "bot", text: "Когда ты в последний раз делал что-то и не смотрел на часы?" },
  { who: "me", text: "Когда занимался фотографией…" },
  { who: "bot", text: "Почему остановился? Что тогда помешало?" },
  { who: "me", text: "Казалось — несерьёзно, не заработаешь." }]

},
{
  n: 3,
  t: "Что даёт энергию",
  d: "Паттерны: что заряжает, а что выжимает.",
  chat: [
  { who: "bot", text: "Что в твоей неделе заряжает, а что выжимает?" },
  { who: "me", text: "Зум-встречи выжимают. Разговоры один на один — заряжают." },
  { who: "bot", text: "А что в этих двух случаях общего?" },
  { who: "me", text: "В первом я слушаю формальности. Во втором — человека." }]

},
{
  n: 4,
  t: "Твои таланты",
  d: "Маленькие победы и сильные стороны, которые ты не замечаешь.",
  chat: [
  { who: "bot", text: "К тебе приходят за советом — за каким?" },
  { who: "me", text: "Когда надо разобраться в хаосе." },
  { who: "bot", text: "Это твой дар. Что ты с ним делаешь сейчас?" },
  { who: "me", text: "Ничего. В резюме это не впишешь." }]

},
{
  n: 5,
  t: "Что мешает двигаться",
  d: "Страхи и ограничения — собственные и чужие.",
  chat: [
  { who: "bot", text: "Что ты НЕ делаешь, хотя хочется?" },
  { who: "me", text: "Не пишу. Стыдно." },
  { who: "bot", text: "Стыдно перед кем — конкретно?" },
  { who: "me", text: "Перед бывшими коллегами, наверное." }]

},
{
  n: 6,
  t: "Синтез",
  d: "Что начинает вырисовываться из шести дней разговора.",
  chat: [
  { who: "bot", text: "Я собрал всё, что ты рассказал за пять дней. Слышу одно слово." },
  { who: "me", text: "Какое?" },
  { who: "bot", text: "«Свобода в формате». Где это уже есть в твоей жизни?" },
  { who: "me", text: "В фотографии. И в разговорах один на один." }]

},
{
  n: 7,
  t: "Твой план",
  d: "Конкретные шаги на 30 дней.",
  chat: [
  { who: "bot", text: "Собираю всё, что ты рассказал за 6 дней…" },
  { who: "bot", text: "Твоё дело: видео о смысле и саморазвитии." },
  { who: "bot", text: "Первый шаг — одно короткое видео в неделю. 30 дней. Без редактуры." },
  { who: "sys", text: "📄 plan_30days.txt · готов к скачиванию" }]

}];


function DayChat({ day }) {
  return (
    <div className="day-chat">
      <div className="chat-head">
        <div className="chat-avatar"><SparkMark size={20} /></div>
        <div style={{ flex: 1 }}>
          <div className="chat-name">Spark</div>
          <div className="chat-status">в&nbsp;сети</div>
        </div>
        <div className="day-chat-badge">День&nbsp;{day.n}</div>
      </div>
      <div className="day-chat-body">
        {day.chat.map((m, i) =>
        m.who === "sys" ?
        <div key={i} className="bubble-sys" style={{ animationDelay: `${0.15 + i * 0.18}s` }}>
              <Icon.Download style={{ width: 14, height: 14 }} /> {m.text.replace(/^📄 /, "")}
            </div> :

        <div
          key={i}
          className={`bubble ${m.who === "bot" ? "bubble-bot" : "bubble-me"}`}
          style={{ animationDelay: `${0.15 + i * 0.18}s` }}>
          
              {m.text}
            </div>

        )}
      </div>
    </div>);

}

function HowItWorks() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const sectionRef = useRef(null);
  const targetRef = useRef(0);
  const targetProgressRef = useRef(0);

  // Scroll listener — only updates targets on desktop
  useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      if (window.innerWidth <= 768) return; // Disable scroll-driven logic on mobile
      
      raf = requestAnimationFrame(() => {
        raf = null;
        const sec = sectionRef.current;
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        const sectionH = sec.offsetHeight;
        const viewportH = window.innerHeight;
        const scrolled = Math.max(0, -rect.top);
        const scrollable = sectionH - viewportH;
        const p = scrollable > 0 ? Math.min(1, scrolled / scrollable) : 0;
        targetProgressRef.current = p;
        targetRef.current = p * (DAYS.length - 1);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // RAF lerp loop — smoothly catches up to scroll target
  useEffect(() => {
    let raf;
    let cancelled = false;
    let curActive = 0;
    let curProgress = 0;
    const tick = () => {
      if (cancelled) return;
      if (window.innerWidth > 768) {
        curActive = curActive + (targetRef.current - curActive) * 0.12;
        curProgress = curProgress + (targetProgressRef.current - curProgress) * 0.14;
        const idx = Math.max(0, Math.min(DAYS.length - 1, Math.round(curActive)));
        setActive((prev) => prev !== idx ? idx : prev);
        setProgress(curProgress);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {cancelled = true;if (raf) cancelAnimationFrame(raf);};
  }, []);

  const handleSetDay = (i) => {
    if (window.innerWidth <= 768) {
      setActive(i);
      setProgress(i / (DAYS.length - 1));
    } else {
      const sec = sectionRef.current;
      if (!sec) return;
      const target = sec.offsetTop + (i + 0.4) / DAYS.length * (sec.offsetHeight - window.innerHeight);
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  };

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && active < DAYS.length - 1) {
        handleSetDay(active + 1); // swipe left
      } else if (diff < 0 && active > 0) {
        handleSetDay(active - 1); // swipe right
      }
    }
    setTouchStart(null);
  };

  const day = DAYS[active];

  return (
    <>
      <section ref={sectionRef} className="how-section section-deep" id="how">
        <div className="how-sticky">
          <div className="wrap how-wrap">
            <div className="how-head">
              <span className="eyebrow">Как работает</span>
              <h2 className="section-title how-title">
                7 дней. 7 разговоров.&nbsp;
                <em>Один результат.</em>
              </h2>
            </div>

            <div className="how-progress" role="tablist">
              <div className="how-progress-line">
                <div className="how-progress-fill" style={{ width: `${progress * 100}%` }} />
              </div>
              <div className="how-progress-cells">
                {DAYS.map((d, i) =>
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`prog-cell ${i <= active ? "on" : ""} ${i === active ? "active" : ""}`}
                  onClick={() => handleSetDay(i)}>
                  
                    <span className="prog-num">{String(d.n).padStart(2, "0")}</span>
                    <span className="prog-dot"></span>
                  </button>
                )}
              </div>
            </div>

            <div className="how-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <div className="how-stage-info" key={active}>
                <div className="day-big-num">{String(day.n).padStart(2, "0")}</div>
                <div className="day-text">
                  <div className="day-eyebrow">День {day.n} · из 7</div>
                  <h3 className="day-h">{day.t}</h3>
                  <p className="day-p">{day.d}</p>
                  <div className="day-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                    10 минут · 6 вопросов
                  </div>
                </div>
              </div>
              <DayChat day={day} key={"chat-" + active} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm result-section">
        <div className="wrap">
          <div className="result-card reveal">
            <div className="result-icon">
              <Icon.Download style={{ color: "white", width: 32, height: 32 }} />
            </div>
            <div>
              <h3>В&nbsp;конце — готовый файл&nbsp;с&nbsp;персональным планом</h3>
              <p>Скачай в&nbsp;.txt, сохрани, возвращайся. Не&nbsp;абстрактные советы — конкретный путь, собранный из&nbsp;твоих собственных ответов.</p>
            </div>
            <div className="file-pill">
              <Icon.Download style={{ width: 14, height: 14 }} /> plan_30days.txt
            </div>
          </div>
        </div>
      </section>
    </>);

}

const FeatureIcons = {
  // Russian language — speech with "Аа" letterform feel
  ru:
  <svg viewBox="0 0 32 32" fill="none">
      <path d="M5 8a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-7l-6 5v-5h-4a5 5 0 0 1-5-5V8Z"
    stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 17l3-8h0l3 8M12.5 14.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="13" r="1.4" fill="currentColor" />
    </svg>,

  // Structure — 7 stacked lines, varying length (like a plan/outline)
  structure:
  <svg viewBox="0 0 32 32" fill="none">
      <path d="M6 7h20M6 11h16M6 15h20M6 19h13M6 23h17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="6" cy="15" r="2" fill="currentColor" opacity="0.18" />
      <path d="M6 15l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>,

  // Result file — doc with download arrow
  file:
  <svg viewBox="0 0 32 32" fill="none">
      <path d="M9 3h9l7 7v17a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18 3v6a1 1 0 0 0 1 1h6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 16v8m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,

  // Time — clock at 15 past
  clock:
  <svg viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="11.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 9v7l5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="1.4" fill="currentColor" />
    </svg>,

  // Free — gift box with ribbon
  gift:
  <svg viewBox="0 0 32 32" fill="none">
      <rect x="4.5" y="11" width="23" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 11v16M4.5 17h23" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 11s-5-1-5-4.5C11 5 12.5 4 14 4c2 0 2 3 2 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 11s5-1 5-4.5C21 5 19.5 4 18 4c-2 0-2 3-2 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>,

  // Telegram — refined paper plane
  telegram:
  <svg viewBox="0 0 32 32" fill="none">
      <path d="M28 5L4 14.5a.6.6 0 0 0 .05 1.13l5.95 1.92 2.6 7.95a.6.6 0 0 0 1 .25l3.6-3.6 6.4 4.65a.6.6 0 0 0 .94-.36L29 5.85A.6.6 0 0 0 28 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 17.5L22 9l-9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

};

// ============================================
// FEATURES
// ============================================
const FEATURES = [
{ icon: FeatureIcons.ru, h: "На русском языке", p: "Все диалоги, промпты и итоговый план — на русском. Нюансы, которые теряются в переводе, здесь сохранены." },
{ icon: FeatureIcons.structure, h: "Структура, а не хаос", p: "Семь чётких тем, каждая строится на предыдущей. Есть начало и есть конец — ты знаешь куда идёшь." },
{ icon: FeatureIcons.file, h: "Результат в руках", p: "В конце ты получаешь файл, а не просто «ощущение разговора». Конкретный план, который можно перечитать." },
{ icon: FeatureIcons.clock, h: "10 минут в день", p: "Одна сессия — 6 вопросов. Утром в транспорте или вечером перед сном, без необходимости выделять час." },
{ icon: FeatureIcons.gift, h: "Первый шаг — бесплатно", p: "День 1 всегда бесплатно. Почувствуй ценность до того, как тратить деньги. Никакого риска, никакой карты." },
{ icon: FeatureIcons.telegram, h: "Прямо в Telegram", p: "Никакой регистрации, приложений и паролей. Просто пишешь как другу — в любое время, в любом месте." }];


function Features() {
  return (
    <section className="section" id="features">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Почему Spark</span>
          <h2 className="section-title">
            Не как все&nbsp;<em>остальные.</em>
          </h2>
        </div>
        <div className="features-grid">
          {FEATURES.map((f, i) =>
          <div key={i} className="feature reveal-card" data-delay={i % 3 + 1}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.h}</h3>
              <p>{f.p}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ============================================
// PRICING
// ============================================
const TRACKS = [
{ name: "Найти своё дело", note: "основной трек", icon: "compass" },
{ name: "Деньги и финансовое мышление", note: "доход и мышление", icon: "growth" },
{ name: "Отношения и близость", note: "партнёрство и близость", icon: "hearts" },
{ name: "Здоровье и энергия", note: "энергия и режим", icon: "pulse" }];


const TrackIcon = {
  compass:
  <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>,

  growth:
  <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 20l5-5 4 4 7-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 10h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,

  hearts:
  <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>,

  pulse:
  <svg viewBox="0 0 24 24" fill="none">
      <path d="M3 12h4l2-5 4 10 2-5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

};

const TIERS = [
{
  name: "Старт",
  price: "0",
  suffix: "₽",
  desc: "День 1 — всегда бесплатно",
  cta: "Начать бесплатно",
  features: [
  { on: true, t: "День 1 в полном объёме" },
  { on: true, t: "Диалог с AI-коучем" },
  { on: false, t: "Дни 2–7 и финальный план" },
  { on: false, t: "Скачать план в .txt" },
  { on: false, t: "До 3 доп. сессий по 199 ₽" },
  { on: false, t: "Голосовые сообщения" },
  { on: false, t: "Все 4 трека и безлимит" },
  { on: false, t: "План на 90 дней · check-in" }]
},
{
  name: "Базовый",
  price: "490",
  suffix: "₽",
  desc: "Полный курс — все 7 дней",
  cta: "Купить доступ",
  featured: true,
  tag: "Популярный",
  features: [
  { on: true, t: "Все 7 дней без ограничений" },
  { on: true, t: "Диалог с AI-коучем" },
  { on: true, t: "Финальный план на 30 дней" },
  { on: true, t: "Скачать план в .txt" },
  { on: true, t: "До 3 доп. сессий по 199 ₽" },
  { on: false, t: "Голосовые сообщения" },
  { on: false, t: "Все 4 трека и безлимит" },
  { on: false, t: "План на 90 дней · check-in" }]
},
{
  name: "Pro",
  price: "990",
  suffix: "₽",
  desc: "Всё включено — без ограничений",
  cta: "Выбрать Pro",
  features: [
  { on: true, t: "Все 7 дней без ограничений" },
  { on: true, t: "Диалог с AI-коучем" },
  { on: true, t: "Финальный план на 90 дней" },
  { on: true, t: "Скачать план в .txt" },
  { on: true, t: "Голосовые сообщения" },
  { on: true, t: "Безлимитные повторные прохождения" },
  { on: true, t: "Еженедельный check-in" },
  { on: true, t: "Приоритетная поддержка" }]
}];


function ProTracksDisclosure() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`tier-tracks-pills ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="tier-tracks-toggle"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}>
        <span className="tier-tracks-label">4 сферы жизни</span>
        <span className="tier-tracks-chevron" aria-hidden="true"></span>
      </button>
      <div className="tier-tracks-collapse">
        <div className="tier-tracks-collapse-inner">
          <div className="tier-tracks-row">
            {TRACKS.map((tr, k) =>
              <div key={k} className="tier-track-pill">
                <span className="tier-track-icon">{TrackIcon[tr.icon]}</span>
                <span>{tr.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Цены</span>
          <h2 className="section-title">
            Прозрачно. <em>Без подписок.</em>
          </h2>
        </div>
        <div className="pricing-grid">
          {TIERS.map((t, i) =>
          <div key={i} className={`tier ${t.featured ? "tier-featured" : ""} reveal-card`} data-delay={i + 1}>
              {t.tag && <div className="tier-tag">{t.tag}</div>}
              <div className="tier-name">{t.name}</div>
              <div className="price-row">
                <span className="price-num">{t.price}</span>
                <span className="price-suffix">{t.suffix}</span>
              </div>
              <div className="tier-desc">{t.desc}</div>
              <ul className="tier-features">
                {t.features.map((f, j) =>
              <li key={j} className={f.on ? "" : "off"}>
                    {f.on ? <Icon.Check className="check" /> : <Icon.X className="x" />}
                    <span>{f.t}</span>
                  </li>
              )}
              </ul>
              {t.name === "Pro" && <ProTracksDisclosure />}
              <a className={`btn ${t.featured ? "btn-accent" : "btn-primary"}`}
            href="https://t.me/spark_find_bot" target="_blank" rel="noopener">
                {t.cta} <Icon.Arrow />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ============================================
// COMPARE
// ============================================
const COMPARE_ROWS = [
["На русском языке", "✓", "✓", "частично"],
["Персональный диалог", "✓", "✓", "✗"],
["Доступно 24 / 7", "✓", "✗", "✓"],
["Конкретный план в конце", "✓", "иногда", "✗"],
["Первый шаг бесплатно", "✓", "✗", "✗"],
["Цена", "от 490 ₽", "50 000+ ₽", "5 000+ ₽"]];


function Compare() {
  return (
    <section className="section section-warm" id="vs">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Сравнение</span>
          <h2 className="section-title">
            Spark против <em>альтернатив.</em>
          </h2>
        </div>
        <div className="compare-table reveal">
          <div className="compare-row compare-head">
            <div className="compare-cell"></div>
            <div className="compare-cell spark">Spark</div>
            <div className="compare-cell">Живой коуч</div>
            <div className="compare-cell">Онлайн-курс</div>
          </div>
          {COMPARE_ROWS.map((row, i) =>
          <div key={i} className="compare-row compare-row-reveal" style={{ transitionDelay: `${0.08 + i * 0.07}s` }}>
              <div className="compare-cell label">{row[0]}</div>
              <div className="compare-cell spark-cell">{row[1]}</div>
              <div className="compare-cell">{row[2]}</div>
              <div className="compare-cell">{row[3]}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ============================================
// TESTIMONIALS
// ============================================
// Отзывы первых пользователей — закрытый бета-тест (март–апрель 2026)
const TESTIMONIALS = [
{
  q: "Думал — потрачу 490 ₽ зря, ещё один бот с советами. На третий день поймал себя, что отвечаю себе, а не ему. План на 30 дней сейчас висит над столом — 9 пунктов уже сделал.",
  n: "Денис К.",
  m: "34 года · продакт-менеджер"
},
{
  q: "Не ожидала, что разговор с AI вытащит из меня то, о чём я молчала три года. Никакого «ты должна» — только вопросы. Через неделю наконец-то записалась на курс иллюстрации.",
  n: "Марина Л.",
  m: "29 лет · бухгалтер"
},
{
  q: "Самое ценное — не «найти своё дело», а понять, почему я уже два года топчусь. Spark задал один вопрос на 4-й день, после которого я уволился. Не жалею.",
  n: "Артём С.",
  m: "41 год · бывший head of sales"
},
{
  q: "Подкупило, что не курс и не лекции. Просто диалог по 10 минут в день. На седьмой день получила .txt с конкретными шагами — реально по моей ситуации, без воды.",
  n: "Юля П.",
  m: "26 лет · UX-исследователь"
}];


function Testimonials() {
  return (
    <section className="section section-warm" id="testimonials">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Отзывы</span>
          <h2 className="section-title">
            Первые читатели — <em>первые отклики.</em>
          </h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) =>
            <figure key={i} className="quote-card reveal-card" data-delay={i % 2 + 1}>
              <blockquote>«{t.q}»</blockquote>
              <figcaption>
                <span className="quote-author">{t.n}</span>
                <span className="quote-meta">{t.m}</span>
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>);

}

// ============================================
// ABOUT
// ============================================
function About() {
  return (
    <section className="section about-section" id="about">
      <div className="wrap">
        <div className="about-grid reveal">
          <div className="about-photo" role="img" aria-label="Кирилл Крылов, автор Spark"></div>
          <div>
            <span className="eyebrow">Кто это сделал</span>
            <h2 className="section-title">
              Один человек.&nbsp;<em>Не команда.</em>
            </h2>
            <p>
              Меня зовут Кирилл, я дизайнер. Сам прошёл через
              «не знаю чем хочу заниматься» — и сделал инструмент,
              который задаёт правильные вопросы, а не даёт готовые советы.
            </p>
            <p>
              Spark — мой эксперимент. Если что-то не работает —{" "}
              <a className="about-inline-link" href="https://t.me/krylov_designer" target="_blank" rel="noopener">пиши в Telegram</a>,
              я отвечу лично.
            </p>
            <a className="btn btn-primary about-cta" href="https://t.me/krylov_designer"
               target="_blank" rel="noopener">
              <Icon.Tg className="icon-lead" /> Написать @krylov_designer <Icon.Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>);

}

// ============================================
// FAQ
// ============================================
const FAQ_ITEMS = [
{
  q: "Это не психолог?",
  a: "Нет. Spark — инструмент самоанализа: задаёт вопросы, не ставит диагнозов и не лечит. Если нужна помощь специалиста — иди к специалисту."
},
{
  q: "Чем это отличается от ChatGPT?",
  a: "ChatGPT даёт советы. Spark задаёт вопросы — и только их. Семь дней структурированного диалога, где ты сам приходишь к ответам. На выходе — файл с твоим планом, а не сохранённый чат."
},
{
  q: "Что с моими данными?",
  a: "Сообщения хранятся на серверах Railway, чтобы поддерживать диалог. Мы не передаём их третьим лицам и не используем для рекламы. Удалить всё можно командой /reset или запросом в поддержку."
},
{
  q: "А если не понравится?",
  a: "Вернём деньги в течение 24 часов после оплаты, если ты прошёл не больше двух дней курса. Пиши в поддержку @krylov_designer."
},
{
  q: "Это работает на телефоне?",
  a: "Полностью. Spark живёт прямо в Telegram. Никакого приложения, никакой регистрации — открыл бота и пишешь."
},
{
  q: "Нужно отвечать каждый день подряд?",
  a: "Нет. Возвращайся когда удобно. День завершается, когда ты прошёл все шесть вопросов — не по календарю."
}];


function FAQItem({ item, delay, isOpen, onToggle }) {
  return (
    <div className={`faq-item reveal-card ${isOpen ? "is-open" : ""}`} data-delay={delay}>
      <button
        type="button"
        className="faq-summary"
        aria-expanded={isOpen}
        onClick={onToggle}>
        <span>{item.q}</span>
        <span className="faq-chevron" aria-hidden="true"></span>
      </button>
      <div className="faq-collapse">
        <div className="faq-collapse-inner">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="section section-warm" id="faq">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Вопросы</span>
          <h2 className="section-title">
            Часто&nbsp;<em>спрашивают.</em>
          </h2>
        </div>
        <div className="faq-list">
          {FAQ_ITEMS.map((it, i) =>
            <FAQItem
              key={i}
              item={it}
              delay={i % 3 + 1}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          )}
        </div>
      </div>
    </section>);

}

// ============================================
// FINAL CTA
// ============================================
function FinalCTA() {
  return (
    <section className="final">
      <div className="wrap final-content reveal">
        <span className="eyebrow" style={{ justifyContent: "center" }}>Начни сегодня</span>
        <h2 style={{ marginTop: 24 }}>
          7 дней — и&nbsp;ты знаешь<br />
          <em>куда идти.</em>
        </h2>
        <p>День 1 бесплатно. Без регистрации.</p>
        <div className="final-ctas">
          <a className="btn btn-primary" href="https://t.me/spark_find_bot" target="_blank" rel="noopener">
            <Icon.Tg className="icon-lead" /> Начать бесплатно в Telegram <Icon.Arrow />
          </a>
        </div>
        <div className="final-trust">
          <div className="final-trust-item">
            <span className="final-trust-label">Полный доступ</span>
            <span className="final-trust-value">490&nbsp;₽ <span className="final-trust-meta">· СБП или Telegram Stars</span></span>
          </div>
          <div className="final-trust-divider" aria-hidden="true"></div>
          <div className="final-trust-item">
            <span className="final-trust-label">Гарантия возврата</span>
            <span className="final-trust-value">24&nbsp;ч <span className="final-trust-meta">· если прошёл не больше 2 дней</span></span>
          </div>
        </div>
      </div>
    </section>);

}

// ============================================
// FOOTER
// ============================================
function Footer({ onOpenModal }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <SparkMark size={32} />
              <span className="brand-word footer-brand-word">Spark</span>
            </div>
            <p>AI-коучинг в Telegram. Найди своё дело за 7 дней.</p>
          </div>
          <div>
            <h4>Продукт</h4>
            <div className="footer-links">
              <a href="#how">Как работает</a>
              <a href="#pricing">Цены</a>
              <a href="#vs">Сравнение</a>
              <a href="#features">Почему Spark</a>
              <a href="#faq">Вопросы</a>
            </div>
          </div>
          <div>
            <h4>Начать</h4>
            <p style={{ marginBottom: 18 }}>День 1 — бесплатно. Без регистрации и карты.</p>
            <a className="btn btn-primary btn-sm" href="https://t.me/spark_find_bot" target="_blank" rel="noopener">
              <Icon.Tg className="icon-lead" /> Открыть в Telegram
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Spark. Все права защищены.</span>
          <span className="footer-legal">
            <button className="link-btn" onClick={() => onOpenModal("privacy")}>Политика конфиденциальности</button>
            <button className="link-btn" onClick={() => onOpenModal("terms")}>Условия использования</button>
            <a href="https://t.me/krylov_designer" target="_blank" rel="noopener">Поддержка</a>
          </span>
        </div>
      </div>
    </footer>);

}

// expose
Object.assign(window, { Nav, Hero, Problem, HowItWorks, Features, Testimonials, Pricing, Compare, About, FAQ, FinalCTA, Footer, Modal, PrivacyContent, TermsContent, DAYS, CHAT_SCRIPT, DayChat, ChatPreview, SparkMark, Icon, FeatureIcons });