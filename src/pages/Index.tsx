import { useState } from "react";
import Navbar, { navLinks } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BookingSection from "@/components/BookingSection";
import ContactsSection from "@/components/ContactsSection";

export default function Index() {
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActiveNav(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-ibm">
      <Navbar
        activeNav={activeNav}
        menuOpen={menuOpen}
        onScrollTo={scrollTo}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
      />
      <HeroSection onScrollTo={scrollTo} />
      <ServicesSection />
      <BookingSection />
      <ContactsSection onScrollTo={scrollTo} />
    </div>
  );
}
