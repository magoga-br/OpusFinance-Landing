import Seo from "@/components/Seo";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";


const Index = () => {
  const canonical = typeof window !== "undefined" && window.location
    ? new URL(window.location.pathname, window.location.origin).toString()
    : "/";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "OpusFinance",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "OpusFinance é um SaaS de gestão financeira organizacional com relatórios e segurança.",
    offers: {
      "@type": "Offer",
      price: "79",
      priceCurrency: "BRL",
    },
    url: canonical,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="OpusFinance — Sistema Financeiro Organizacional"
        description="OpusFinance: SaaS de gestão financeira organizacional com relatórios e segurança."
        canonical={canonical}
        jsonLd={jsonLd}
      />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <div className="py-8" />
        {/* <CTA /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;