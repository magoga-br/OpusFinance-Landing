import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/Theme.Toggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-1" aria-label="JusUP - Início">
          <img className="flex h-6 w-5" src="/logo.png" alt="" />
          <span className="text-lg font-semibold tracking-tight text-gradient-brand">usUP</span>
        </a>
        <div className="flex items-center gap-10">
          
          <a href="#recursos" className="story-link text-sm">Recursos</a>
          <a href="#precos" className="story-link text-sm">Preços</a>
          <ThemeToggle />
          <a href="#precos"><Button variant="hero" className="hidden sm:inline-flex">Ver preço</Button></a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;