import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const tiers = {
  monthly: [
    {
      name: "Básico",
      price: "R$ 79",
      period: "/mês",
      description: "Apenas o Sistema",
      features: [
        "Acesso completo ao sistema",
        "Gestão financeira organizacional",
        "Relatórios",
        "Suporte por email",
      ],
      cta: "Começar agora",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "R$ 149",
      period: "/mês",
      description: "Sistema + Atendimento + Manutenção",
      features: [
        "Tudo do plano Básico",
        "Atendimento prioritário",
        "Suporte por videochamada",
        "Manutenção dedicada",
        "Consultoria personalizada",
      ],
      cta: "Escolher Premium",
      highlighted: true,
    },
  ],
  yearly: [
    {
      name: "Básico",
      price: "R$ 790",
      period: "/ano",
      description: "Apenas o SaaS",
      originalPrice: "R$ 948",
      discount: "2 meses grátis",
      features: [
        "Acesso completo ao sistema",
        "Gestão financeira organizacional",
        "Relatórios",
        "Suporte por email",
      ],
      cta: "Começar agora",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "R$ 1.490",
      period: "/ano",
      description: "SaaS + Atendimento + Manutenção",
      originalPrice: "R$ 1.788",
      discount: "2 meses grátis",
      features: [
        "Tudo do plano Básico",
        "Atendimento prioritário",
        "Suporte por videochamada",
        "Manutenção dedicada",
        "Consultoria personalizada",
      ],
      cta: "Escolher Premium",
      highlighted: true,
    },
  ],
};

const Pricing = () => {
  const root = useRef<HTMLDivElement>(null);
  const [isYearly, setIsYearly] = useState(false);
  
  const currentTiers = isYearly ? tiers.yearly : tiers.monthly;

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
        <h2 className="text-3xl font-bold sm:text-4xl">
          Preço simples e transparente
        </h2>
        <p className="mt-3 text-muted-foreground">
          Escolha o plano ideal para sua empresa e economize com o pagamento anual.
        </p>
        
        {/* Toggle Mensal/Anual */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Label htmlFor="billing-toggle" className={`text-sm font-medium ${!isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
            Mensal
          </Label>
          <Switch
            id="billing-toggle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <Label htmlFor="billing-toggle" className={`text-sm font-medium ${isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
            Anual
            <span className="ml-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Economize 17%
            </span>
          </Label>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {currentTiers.map((tier) => (
          <article
            key={tier.name}
            className={
              "pricing-card relative rounded-2xl border bg-card p-8 shadow-elegant flex flex-col " +
              (tier.highlighted ? " ring-2 ring-primary" : "")
            }
          >
            {tier.highlighted && (
              <>
                <div
                  aria-hidden
                  className="absolute -inset-px -z-10 rounded-2xl bg-gradient-primary opacity-20 blur-xl"
                />
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              </>
            )}
            
            <div className="text-center">
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
              
              <div className="mt-4">
                {isYearly && tier.originalPrice && (
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground line-through">
                      {tier.originalPrice}
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {tier.discount}
                    </span>
                  </div>
                )}
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-sm text-muted-foreground mb-1">
                    {tier.period}
                  </span>
                </div>
              </div>
            </div>
            
            <ul className="mt-6 space-y-3 text-sm flex-grow">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className={index === 0 && tier.name === "Premium" ? "font-medium" : "text-muted-foreground"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <Button
                variant={tier.highlighted ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
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
