import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/33f82eae-0f2c-4248-966a-40c69a924493/files/a9f2315b-12e2-4fbc-bb37-0e8f237f9a00.jpg";

const stats = [
  { value: "98%", label: "положительных отзывов" },
  { value: "Эксперты", label: "по немецким автомобилям" },
];

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
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
              onClick={() => onScrollTo("booking")}
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
  );
}
