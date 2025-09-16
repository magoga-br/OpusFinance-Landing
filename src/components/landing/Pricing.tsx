import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const singlePlan = {
  name: "Plano Único",
  monthlyPrice: "R$ 79",
  monthlyPeriod: "/mês",
  yearlyPrice: "R$ 790",
  yearlyPeriod: "/ano",
  originalYearlyPrice: "R$ 948",
  discount: "2 meses grátis",
  description: "Tudo que você precisa para usar o OpusFinance",
  features: [
    "Acesso completo ao sistema",
    "Gestão financeira organizacional",
    "Relatórios em tempo real",
    "Suporte personalizado",
    "Análise preditiva",
  ],
  cta: "Começar agora",
  highlighted: true,
};

const Pricing = () => {
  const root = useRef<HTMLDivElement>(null);
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
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
    <section
      id="precos"
      ref={root}
      className="container mx-auto py-20 md:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Preço simples e transparente</h2>
        <p className="mt-3 text-muted-foreground">Um único plano. Sem surpresas.</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Label
            htmlFor="billing-toggle"
            className={`text-sm ${!isYearly ? "text-primary font-semibold" : "text-foreground/80"}`}
          >
            Mensal
          </Label>
          <Switch id="billing-toggle" checked={isYearly} onCheckedChange={setIsYearly} />
          <Label
            htmlFor="billing-toggle"
            className={`text-sm ${isYearly ? "text-primary font-semibold" : "text-foreground/80"}`}
          >
            Anual
            <span className="ml-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Economize 17%</span>
          </Label>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 max-w-xl mx-auto">
        <article
          className={
            "pricing-card relative rounded-2xl border bg-card p-8 shadow-elegant flex flex-col ring-2 ring-primary"
          }
        >
          <div
            aria-hidden
            className="absolute -inset-px -z-10 rounded-2xl bg-gradient-primary opacity-20 blur-xl"
          />

          <div className="text-center">
            <h3 className="text-xl font-bold">{singlePlan.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{singlePlan.description}</p>

            <div className="mt-4">
              {isYearly && (
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm text-muted-foreground line-through">{singlePlan.originalYearlyPrice}</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{singlePlan.discount}</span>
                </div>
              )}
              <div className="flex items-end justify-center gap-1">
                <span className="text-4xl font-bold">
                  {isYearly ? singlePlan.yearlyPrice : singlePlan.monthlyPrice}
                </span>
                <span className="text-sm text-muted-foreground mb-1">
                  {isYearly ? singlePlan.yearlyPeriod : singlePlan.monthlyPeriod}
                </span>
              </div>
            </div>
          </div>

          <ul className="mt-6 space-y-3 text-sm flex-grow">
            {singlePlan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              variant="hero"
              className="w-full"
              size="lg"
              onClick={() => {
                const plan = isYearly ? "anual" : "mensal";
                const msg = `Olá gostaria de adquirir o sistema ${plan} da OpusFInance`;
                const url = `https://wa.me/5511934814537?text=${encodeURIComponent(msg)}`;
                window.open(url, "_blank");
              }}
            >
              {singlePlan.cta}
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Pricing;
