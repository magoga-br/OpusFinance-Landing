import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section aria-label="Convite final" className="relative overflow-hidden">
      <div className="container relative mx-auto">
        <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-primary p-10 text-center text-primary-foreground shadow-glow">
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">Pronto para organizar as finanças com a OpusFinance?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty opacity-90">
            Conheça o plano que se adapta à sua operação e mantenha o controle do seu financeiro.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#precos"><Button variant="hero" size="lg">Ver plano</Button></a>
            <a href="#contato"><Button variant="ghost" size="lg">Entrar em contato</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;