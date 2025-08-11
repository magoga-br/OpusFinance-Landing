import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="JusUP - Início">
          <div className="h-6 w-6 rounded-md bg-gradient-primary shadow-glow" />
          <span className="text-lg font-semibold tracking-tight text-gradient-brand">JusUP</span>
        </a>
        <div className="flex items-center gap-3">
          <a href="#recursos" className="story-link text-sm">Recursos</a>
          <a href="#precos" className="story-link text-sm">Preços</a>
          <ThemeToggle />
          <Button variant="ghostPrimary" className="hidden sm:inline-flex">Entrar</Button>
          <a href="#precos"><Button variant="hero" className="hidden sm:inline-flex">Ver plano</Button></a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;