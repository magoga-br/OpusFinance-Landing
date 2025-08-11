const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 md:h-20 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} JusUP. Todos os direitos reservados.</p>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="story-link">Termos</a>
          <a href="#" className="story-link">Privacidade</a>
          <a href="#" className="story-link">Contato</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;