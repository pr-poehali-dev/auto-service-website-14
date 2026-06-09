import Icon from "@/components/ui/icon";

const navLinks = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "booking", label: "Записаться" },
  { id: "contacts", label: "Контакты" },
];

interface NavbarProps {
  activeNav: string;
  menuOpen: boolean;
  onScrollTo: (id: string) => void;
  onToggleMenu: () => void;
}

export { navLinks };

export default function Navbar({ activeNav, menuOpen, onScrollTo, onToggleMenu }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => onScrollTo("home")} className="flex items-center gap-2 group">
          <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* левая полоса */}
            <polygon points="0,36 8,0 13,0 5,36" fill="white" opacity="0.95"/>
            {/* средняя полоса */}
            <polygon points="10,36 18,0 22,0 14,36" fill="white" opacity="0.5"/>
            {/* диагональная оранжевая поперечная полоса */}
            <polygon points="1,24 30,10 30,15 1,29" fill="#FF4D00" opacity="0.95"/>
          </svg>
          <span className="font-oswald text-xl font-bold tracking-wider text-white">
            <span className="text-brand-orange">AURA</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onScrollTo(link.id)}
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
            onClick={() => onScrollTo("booking")}
            className="bg-brand-orange text-white font-oswald font-semibold tracking-wider text-sm px-6 py-2.5 skew-x-[-4deg] hover:bg-orange-500 transition-colors duration-200"
          >
            <span className="inline-block skew-x-[4deg]">ЗАПИСАТЬСЯ</span>
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={onToggleMenu}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-brand-gray border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onScrollTo(link.id)}
              className="font-oswald text-sm tracking-widest uppercase text-white/70 hover:text-brand-orange text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}