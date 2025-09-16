import { useEffect, useRef } from "react";
import { BarChart3, ShieldCheck, Zap, Users, Clock, TrendingUp, FileText, Settings, Globe, Lock } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const items = [
  {
    icon: BarChart3,
    title: "Relatórios em tempo real",
    desc: "Métricas essenciais com filtros avançados e exportação em um clique. Visualize tendências e tome decisões baseadas em dados.",
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Zap,
    title: "Conciliação simplificada",
    desc: "Classificação e conciliação com poucos cliques, sem complicação. Automatize processos repetitivos e economize tempo.",
    color: "from-yellow-500 to-orange-500",
    gradient: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Segurança de ponta",
    desc: "Criptografia e controles de acesso granulares para sua equipe. Mantenha seus dados protegidos com as melhores práticas.",
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Users,
    title: "Colaboração em equipe",
    desc: "Trabalhe em conjunto com sua equipe em tempo real. Compartilhe insights e mantenha todos alinhados.",
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Clock,
    title: "Histórico completo",
    desc: "Acesse todo o histórico de transações e alterações. Rastreabilidade total para auditorias e compliance.",
    color: "from-indigo-500 to-blue-500",
    gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
  },
  {
    icon: TrendingUp,
    title: "Análise preditiva",
    desc: "Identifique padrões e tendências com IA avançada. Antecipe problemas e otimize seus processos.",
    color: "from-red-500 to-pink-500",
    gradient: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
  },
];

const Features = () => {
  const root = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    
    const ctx = gsap.context(() => {
      // Animação do título
      gsap.from(".features-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
        },
      });

      // Animação da descrição
      gsap.from(".features-desc", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
        },
      });

      // Animação dos cards com stagger
      gsap.from(".feature-card", {
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="recursos" className="container mx-auto py-20 md:py-32">
      <div ref={root} className="mx-auto max-w-4xl text-center">
        <h2 className="features-title text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Tudo que você precisa para{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            escalar seu negócio
          </span>
        </h2>
        <p className="features-desc mt-6 text-lg text-muted-foreground sm:text-xl">
          Ferramentas poderosas e intuitivas que transformam a forma como você gerencia suas finanças.
          <br className="hidden sm:block" />
          Foque no que realmente importa enquanto automatizamos o resto.
        </p>
      </div>

      <div ref={cardsRef} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc, color, gradient }, index) => (
          <article 
            key={title} 
            className={`feature-card group relative overflow-hidden rounded-2xl border bg-card/50 p-8 shadow-lg backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 ${gradient}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Background gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-5`} />
            
            {/* Icon container */}
            <div className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg transition-all duration-200 ease-out group-hover:scale-105 group-hover:shadow-xl`}>
              <Icon className="size-7 transition-transform duration-200 ease-out group-hover:rotate-3" />
            </div>
            
            {/* Content */}
            <div className="relative">
              <h3 className="text-xl font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100" />
            <div className="absolute -bottom-2 -left-2 h-16 w-16 rounded-full bg-gradient-to-tr from-primary/5 to-transparent opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;