import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const tiers = [
  {
    name: "Profissional",
    price: "R$ 79",
    period: "/mês",
    features: ["Usuários ilimitados", "Relatórios avançados", "Exportação avançada"],
    cta: "Assinar plano",
    highlighted: true,
  },
];

const Pricing = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.from(".pricing-card", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="precos" ref={root} className="container mx-auto py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Preço simples e transparente</h2>
        <p className="mt-3 text-muted-foreground">
          Plano claro e direto para sua operação.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 max-w-md mx-auto">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={
              "pricing-card relative rounded-2xl border bg-card p-6 shadow-elegant " +
              (tier.highlighted ? "ring-2 ring-primary" : "")
            }
          >
            {tier.highlighted && (
              <div aria-hidden className="absolute -inset-px -z-10 rounded-2xl bg-gradient-primary opacity-20 blur-xl" />
            )}
            <h3 className="text-lg font-semibold">{tier.name}</h3>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-3xl font-bold">{tier.price}</span>
              <span className="text-sm text-muted-foreground">{tier.period}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {tier.features.map((f) => (
                <li key={f} className="text-muted-foreground">• {f}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Button variant={tier.highlighted ? "hero" : "outline"} className="w-full">
                {tier.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pricing;