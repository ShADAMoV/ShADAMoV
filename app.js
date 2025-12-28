const dict = {
    ru: {
        title: "Вы заговорите по-арабски уже через 6 месяцев",
        subtitle: "Персональные онлайн-занятия с Абдулрахманом Ясином — преподавателем с 22-летним опытом.",
        cta: "Записаться в WhatsApp",
        f1: "📘 Понятная грамматика — без зубрёжки и сложных схем.",
        f2: "🗣️ Реальная разговорная практика с первых уроков.",
        f3: "📖 Чтение, аудирование и понимание Корана и современных текстов.",
        aboutTitle: "Почему именно он?",
        aboutText: "Абдулрахман Ясин — опытный преподаватель, который превращает арабский в живую речь.",
        stat1: "лет опыта",
        stat2: "успешных учеников",
        stat3: "месяцев до уверенной речи",
        b1: "Сертифицированный преподаватель",
        b2: "Международные студенты",
        b3: "Авторская методика"
    },
    en: {
        title: "Speak Arabic confidently in just 6 months",
        subtitle: "Personal online lessons with Abdulrahman Yasin — 22 years of experience.",
        cta: "Book on WhatsApp",
        f1: "📘 Clear grammar without boring memorization.",
        f2: "🗣️ Real speaking practice from the first lesson.",
        f3: "📖 Understand Quran and modern Arabic texts.",
        aboutTitle: "Why choose him?",
        aboutText: "Abdulrahman turns Arabic into a real-life language.",
        stat1: "years of experience",
        stat2: "successful students",
        stat3: "months to fluency",
        b1: "Certified teacher",
        b2: "International students",
        b3: "Personal teaching method"
    },
    ar: {
        title: "تحدث العربية بطلاقة خلال ٦ أشهر فقط",
        subtitle: "دروس خاصة عبر الإنترنت مع الأستاذ عبد الرحمن ياسين — خبرة 22 عاماً.",
        cta: "احجز عبر واتساب",
        f1: "📘 تبسيط النحو والصرف بأسلوب عملي.",
        f2: "🗣️ تدريب مكثف على المحادثة من أول درس.",
        f3: "📖 فهم القرآن والنصوص التراثية والمعاصرة.",
        aboutTitle: "لماذا تختاره؟",
        aboutText: "يحوّل الأستاذ عبد الرحمن اللغة العربية إلى لغة حيّة تستطيع استخدامها بثقة.",
        stat1: "سنة خبرة",
        stat2: "طالب ناجح",
        stat3: "أشهر للوصول للطلاقة",
        b1: "مدرّس معتمد",
        b2: "طلاب من دول مختلفة",
        b3: "منهج تدريسي خاص"
    }
};

function setLang(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll("[data-i18n]").forEach(el=>{
        el.textContent = dict[lang][el.dataset.i18n];
    });
}

const saved = localStorage.getItem('lang') || 'ar';
setLang(saved);

// Анимация появления
const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('show');
    });
});

document.querySelectorAll('.fade').forEach(el=>observer.observe(el));
