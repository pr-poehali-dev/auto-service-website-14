import Icon from "@/components/ui/icon";

const navLinks = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "booking", label: "Записаться" },
  { id: "contacts", label: "Контакты" },
];

interface ContactsSectionProps {
  onScrollTo: (id: string) => void;
}

export default function ContactsSection({ onScrollTo }: ContactsSectionProps) {
  return (
    <>
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
              <span className="text-brand-orange">AURA</span>
            </span>
          </div>
          <p className="text-white/30 font-ibm text-sm">© 2024 Aura. Все права защищены.</p>
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onScrollTo(link.id)}
                className="font-oswald text-xs tracking-widest uppercase text-white/30 hover:text-brand-orange transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
