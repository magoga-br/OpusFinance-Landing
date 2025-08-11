import { useEffect, useRef } from "react";
import { BarChart3, ShieldCheck, Zap } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const items = [
  {
    icon: BarChart3,
    title: "Relatórios em tempo real",
    desc: "Métricas essenciais com filtros avançados e exportação em um clique.",
  },
  {
    icon: Zap,
    title: "Conciliação simplificada",
    desc: "Classificação e conciliação com poucos cliques, sem complicação.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança de ponta",
    desc: "Criptografia e controles de acesso granulares para sua equipe.",
  },
];

const Features = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.12,
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
    <section id="recursos" className="container mx-auto py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Recursos essenciais para escalar</h2>
        <p className="mt-3 text-muted-foreground">
          Tudo que você precisa para organizar, analisar e decidir com confiança.
        </p>
      </div>

      <div ref={root} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="feature-card group relative rounded-xl border bg-card p-6 shadow-elegant transition-colors hover:shadow-glow">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
              <Icon className="size-5" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;