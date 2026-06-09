import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/33f82eae-0f2c-4248-966a-40c69a924493/files/a9f2315b-12e2-4fbc-bb37-0e8f237f9a00.jpg";

const services = [
  {
    icon: "Wrench",
    title: "Техническое обслуживание",
    desc: "Регламентное ТО по нормативам производителя. Замена масла, фильтров, жидкостей.",
    price: "от 2 500 ₽",
  },
  {
    icon: "Settings",
    title: "Диагностика",
    desc: "Компьютерная диагностика всех систем автомобиля. Быстро и точно.",
    price: "от 500 ₽",
  },
  {
    icon: "Zap",
    title: "Электрика",
    desc: "Ремонт электрооборудования, замена проводки, подключение оборудования.",
    price: "от 1 500 ₽",
  },
  {
    icon: "Gauge",
    title: "Тормозная система",
    desc: "Замена колодок, дисков, прокачка тормозов. Ваша безопасность — наш приоритет.",
    price: "от 1 200 ₽",
  },
  {
    icon: "RotateCcw",
    title: "Подвеска и рулевое",
    desc: "Диагностика и ремонт подвески, замена амортизаторов, развал-схождение.",
    price: "от 800 ₽",
  },
];

const stats = [
  { value: "98%", label: "положительных отзывов" },
  { value: "Эксперты", label: "по немецким автомобилям" },
];

export default function Index() {
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    car: "",
    service: "",
    date: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    setActiveNav(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const navLinks = [
    { id: "home", label: "Главная" },
    { id: "services", label: "Услуги" },
    { id: "booking", label: "Записаться" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white font-ibm">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-orange flex items-center justify-center skew-x-[-6deg]">
              <Icon name="Zap" size={16} className="text-white skew-x-[6deg]" />
            </div>
            <span className="font-oswald text-xl font-bold tracking-wider text-white">
              АВТО<span className="text-brand-orange">AURA</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-oswald text-sm tracking-widest uppercase transition-colors duration-200 ${
                  activeNav === link.id
                    ? "text-brand-orange"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("booking")}
              className="bg-brand-orange text-white font-oswald font-semibold tracking-wider text-sm px-6 py-2.5 skew-x-[-4deg] hover:bg-orange-500 transition-colors duration-200"
            >
              <span className="inline-block skew-x-[4deg]">ЗАПИСАТЬСЯ</span>
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-brand-gray border-t border-white/5 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-oswald text-sm tracking-widest uppercase text-white/70 hover:text-brand-orange text-left transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Автосервис"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="absolute inset-0 bg-brand-orange/5" style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }} />
        </div>

        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(90deg, #FF4D00 0px, #FF4D00 1px, transparent 1px, transparent 80px),
                            repeating-linear-gradient(0deg, #FF4D00 0px, #FF4D00 1px, transparent 1px, transparent 80px)`
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
              <div className="h-px w-12 bg-brand-orange" />
              <span className="font-ibm text-brand-orange text-sm tracking-widest uppercase font-medium">Профессиональный сервис</span>
            </div>

            <h1 className="font-oswald text-6xl md:text-8xl font-bold leading-none mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
              ВАШ АВТО{" "}
              <br />
              <span className="text-brand-orange relative">
                В НАДЁЖНЫХ
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-brand-orange/30" />
              </span>
              <br />
              РУКАХ
            </h1>

            <p className="font-ibm text-white/60 text-lg leading-relaxed mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              Специализируемся на BMW, Mercedes, Audi и других марках автомобилей.
              Опытные мастера, честные цены, сроки без задержек.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}>
              <button
                onClick={() => scrollTo("booking")}
                className="group bg-brand-orange text-white font-oswald font-bold tracking-widest text-base px-10 py-4 skew-x-[-4deg] hover:bg-orange-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,77,0,0.5)]"
              >
                <span className="inline-flex items-center gap-3 skew-x-[4deg]">
                  ЗАПИСАТЬСЯ ОНЛАЙН
                  <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-brand-gray/80 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="font-oswald text-2xl font-bold text-brand-orange">{stat.value}</div>
                <div className="font-ibm text-white/50 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-brand-orange" />
                <span className="text-brand-orange text-sm tracking-widest uppercase font-medium">Что мы делаем</span>
              </div>
              <h2 className="font-oswald text-5xl md:text-6xl font-bold leading-tight">
                НАШИ <span className="text-brand-orange">УСЛУГИ</span>
              </h2>
            </div>
            <p className="text-white/50 font-ibm text-base max-w-xs leading-relaxed">
              Полный цикл обслуживания автомобиля в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-brand-dark p-8 hover:bg-brand-muted transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-500" />
                <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300 skew-x-[-4deg]">
                  <Icon name={s.icon} size={20} className="text-brand-orange group-hover:text-white skew-x-[4deg] transition-colors" fallback="Wrench" />
                </div>
                <h3 className="font-oswald text-xl font-semibold mb-3 group-hover:text-brand-orange transition-colors">
                  {s.title}
                </h3>
                <p className="text-white/50 font-ibm text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <div className="flex items-center justify-end">
                  <Icon name="ArrowUpRight" size={18} className="text-white/20 group-hover:text-brand-orange transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-brand-gray relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-orange/3" style={{ clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-brand-orange" />
                <span className="text-brand-orange text-sm tracking-widest uppercase font-medium">Почему мы</span>
              </div>
              <h2 className="font-oswald text-5xl font-bold mb-8">
                ЧЕСТНЫЙ <br /><span className="text-brand-orange">СЕРВИС</span>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: "Clock", title: "Работаем без задержек", desc: "Соблюдаем сроки — если задержка, оповещаем заранее" },
                  { icon: "BadgePercent", title: "Честное ценообразование", desc: "Стоимость работ озвучиваем до начала — никаких доплат" },
                  { icon: "Star", title: "Оригинальные запчасти", desc: "Используем только сертифицированные детали проверенных брендов" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center shrink-0 mt-0.5 skew-x-[-4deg]">
                      <Icon name={item.icon} size={18} className="text-brand-orange skew-x-[4deg]" fallback="Check" />
                    </div>
                    <div>
                      <h4 className="font-oswald text-base font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/50 font-ibm text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <img src={HERO_IMAGE} alt="Сервис" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-tl from-brand-orange/20 to-transparent" />
                <div className="absolute -bottom-4 -left-4 right-4 top-4 border border-brand-orange/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #FF4D00 0px, #FF4D00 1px, transparent 1px, transparent 40px)`
        }} />
        <div className="max-w-3xl mx-auto px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-brand-orange" />
              <span className="text-brand-orange text-sm tracking-widest uppercase font-medium">Онлайн запись</span>
              <div className="h-px w-10 bg-brand-orange" />
            </div>
            <h2 className="font-oswald text-5xl md:text-6xl font-bold">
              ЗАПИШИТЕСЬ <br /><span className="text-brand-orange">ПРЯМО СЕЙЧАС</span>
            </h2>
            <p className="text-white/50 font-ibm mt-4">Мы свяжемся с вами для подтверждения записи</p>
          </div>

          {submitted ? (
            <div className="bg-brand-gray border border-brand-orange/30 p-12 text-center">
              <div className="w-16 h-16 bg-brand-orange/10 border border-brand-orange flex items-center justify-center mx-auto mb-6 skew-x-[-4deg]">
                <Icon name="Check" size={28} className="text-brand-orange skew-x-[4deg]" />
              </div>
              <h3 className="font-oswald text-3xl font-bold mb-3 text-brand-orange">ЗАЯВКА ПРИНЯТА!</h3>
              <p className="text-white/60 font-ibm">Мы свяжемся с вами в течение 15 минут для подтверждения записи</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 border border-white/20 text-white/60 font-oswald tracking-widest text-sm px-8 py-3 hover:border-brand-orange hover:text-brand-orange transition-all duration-300"
              >
                НОВАЯ ЗАПИСЬ
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-brand-gray border border-white/5 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-oswald text-xs tracking-widest uppercase text-white/40 mb-2">Ваше имя *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full bg-brand-muted border border-white/10 text-white font-ibm px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="block font-oswald text-xs tracking-widest uppercase text-white/40 mb-2">Телефон *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-brand-muted border border-white/10 text-white font-ibm px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-oswald text-xs tracking-widest uppercase text-white/40 mb-2">Марка и модель авто *</label>
                  <input
                    required
                    type="text"
                    value={form.car}
                    onChange={(e) => setForm({ ...form, car: e.target.value })}
                    placeholder="Toyota Camry 2021"
                    className="w-full bg-brand-muted border border-white/10 text-white font-ibm px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="block font-oswald text-xs tracking-widest uppercase text-white/40 mb-2">Желаемая дата</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-brand-muted border border-white/10 text-white font-ibm px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-oswald text-xs tracking-widest uppercase text-white/40 mb-2">Вид услуги *</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-brand-muted border border-white/10 text-white font-ibm px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors appearance-none"
                >
                  <option value="" className="bg-brand-gray">Выберите услугу...</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title} className="bg-brand-gray">{s.title}</option>
                  ))}
                  <option value="Другое" className="bg-brand-gray">Другое</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block font-oswald text-xs tracking-widest uppercase text-white/40 mb-2">Комментарий</label>
                <textarea
                  rows={3}
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  placeholder="Опишите проблему или пожелания..."
                  className="w-full bg-brand-muted border border-white/10 text-white font-ibm px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors resize-none placeholder:text-white/20"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white font-oswald font-bold tracking-widest text-base py-4 skew-x-[-2deg] hover:bg-orange-500 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,77,0,0.4)] group"
              >
                <span className="inline-flex items-center gap-3 skew-x-[2deg]">
                  ОТПРАВИТЬ ЗАЯВКУ
                  <Icon name="Send" size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-brand-orange" />
                <span className="text-brand-orange text-sm tracking-widest uppercase font-medium">Где нас найти</span>
              </div>
              <h2 className="font-oswald text-5xl md:text-6xl font-bold">
                КОНТАКТЫ
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
            {[
              {
                icon: "MapPin",
                title: "Адрес",
                lines: ["ул. Рабочая, 189с2", "г. Саранск"],
              },
              {
                icon: "Phone",
                title: "Телефон",
                lines: ["+7 (929) 748-25-45"],
              },
              {
                icon: "Clock",
                title: "Режим работы",
                lines: ["Пн–Пт: 10:00 – 20:00", "Сб–Вс: выходной"],
              },
            ].map((item, i) => (
              <div key={i} className="bg-brand-gray p-10 relative group hover:bg-brand-muted transition-colors duration-300">
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-500" />
                <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-6 skew-x-[-4deg]">
                  <Icon name={item.icon} size={20} className="text-brand-orange skew-x-[4deg]" fallback="MapPin" />
                </div>
                <h3 className="font-oswald text-xl font-semibold mb-4 tracking-wide">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-white/60 font-ibm text-base leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-px bg-brand-muted border border-white/5 h-64 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `repeating-linear-gradient(90deg, #FF4D00 0px, #FF4D00 1px, transparent 1px, transparent 60px),
                                repeating-linear-gradient(0deg, #FF4D00 0px, #FF4D00 1px, transparent 1px, transparent 60px)`
            }} />
            <div className="text-center z-10">
              <Icon name="Map" size={40} className="text-brand-orange/40 mx-auto mb-3" />
              <p className="font-oswald tracking-widest text-white/30 text-sm uppercase">Карта будет здесь</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-dark border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-orange flex items-center justify-center skew-x-[-6deg]">
              <Icon name="Zap" size={12} className="text-white skew-x-[6deg]" />
            </div>
            <span className="font-oswald text-base font-bold tracking-wider text-white">
              АВТО<span className="text-brand-orange">AURA</span>
            </span>
          </div>
          <p className="text-white/30 font-ibm text-sm">© 2024 АвтоАura. Все права защищены.</p>
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-oswald text-xs tracking-widest uppercase text-white/30 hover:text-brand-orange transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}