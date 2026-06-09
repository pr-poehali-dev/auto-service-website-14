import { useState } from "react";
import Icon from "@/components/ui/icon";
import { services } from "@/components/ServicesSection";

export default function BookingSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    car: "",
    service: "",
    date: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
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
  );
}
