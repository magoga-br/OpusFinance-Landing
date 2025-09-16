const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 md:h-20 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} OpusFinance. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;