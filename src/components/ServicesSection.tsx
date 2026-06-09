import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/33f82eae-0f2c-4248-966a-40c69a924493/files/a9f2315b-12e2-4fbc-bb37-0e8f237f9a00.jpg";

export const services = [
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

export default function ServicesSection() {
  return (
    <>
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
    </>
  );
}
