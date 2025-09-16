import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/Theme.Toggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-1" aria-label="OpusFinance - Início">
          <span className="text-lg font-semibold tracking-tight text-gradient-brand">OpusFinance</span>
        </a>
        <div className="flex items-center gap-10">
        <ThemeToggle />
          <a href="#recursos" className="story-link text-sm">Recursos</a>
          
          <a href="#precos"><Button variant="hero" className="hidden sm:inline-flex">Ver plano</Button></a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;