import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
// @ts-ignore - image assets
import heroDark from "@/assets/hero_dark.jpg";
// @ts-ignore - image assets
import heroLight from "@/assets/hero_light.jpg";
import { gsap } from "@/lib/gsap";

const Hero = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<any>(null);
  const [reduced, setReduced] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>(heroDark);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const update = () => {
      const isDark = html.classList.contains("dark");
      setImgSrc(isDark ? heroDark : heroLight);
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      tlRef.current = gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero=eyebrow]", { y: 10, opacity: 0, duration: 0.4 })
        .from("[data-hero=title]", { y: 20, opacity: 0, duration: 0.6 }, "<0.1")
        .from("[data-hero=subtitle]", { y: 20, opacity: 0, duration: 0.6 }, "<0.05")
        .from("[data-hero=cta]", { y: 10, opacity: 0, stagger: 0.08, duration: 0.4 }, "<")
        .from("[data-hero=mock]", { scale: 0.98, opacity: 0, duration: 0.6 }, "<");
    }, rootRef);
    return () => ctx.revert();
  }, [reduced]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rootRef.current) return;
    const rect = rootRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    rootRef.current.style.setProperty("--x", `${x}%`);
    rootRef.current.style.setProperty("--y", `${y}%`);
  };

  return (
    <section aria-label="Hero JusUP" className="relative overflow-hidden">
      <div
        ref={rootRef}
        onMouseMove={onMouseMove}
        className="relative isolate radial-spot"
      >
        {/* Decorative gradient layer */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-primary opacity-[0.05]" />

        <div className="container relative mx-auto grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6">
            <p data-hero="eyebrow" className="text-sm font-medium text-muted-foreground">Sistema Financeiro Organizacional</p>
            <h1 data-hero="title" className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl">
              Eleve as finanças da sua organização com a precisão da <span className="text-gradient-brand">OpusFinance</span>
            </h1>
            <p data-hero="subtitle" className="text-pretty text-lg text-muted-foreground">
              Centralize processos e tenha visibilidade total do fluxo financeiro com relatórios em tempo real.
            </p>
            <div className="flex gap-3 flex-row">
              <a data-hero="cta" href="#precos">
                <Button variant="hero" size="lg">Ver plano</Button>
              </a>
              <a data-hero="cta" href="#recursos">
                <Button variant="ghostPrimary" size="lg">Ver recursos</Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-primary opacity-20 blur-2xl" aria-hidden />
            <img
              data-hero="mock"
              src={imgSrc}
              alt="Painel do OpusFinance com gráficos, cartões analíticos e visão geral financeira em modo escuro com roxo."
              className="w-full rounded-xl border bg-card object-cover shadow-elegant"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;