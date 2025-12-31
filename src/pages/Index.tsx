import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';

import { PainSection } from '@/components/sections/PainSection';
import { MethodSection } from '@/components/sections/MethodSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { AestheticsSection } from '@/components/sections/AestheticsSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { DeliverySection } from '@/components/sections/DeliverySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CookieConsent } from '@/components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main className="relative z-10">
        {/* Hero - Impacto + posicionamento */}
        <HeroSection />

        {/* Faixa editorial de resultados - Logo após a Hero */}


        {/* O Problema Real */}
        <PainSection />

        {/* O que é o Ciclo */}
        <MethodSection />

        {/* Como funciona + Avaliação + Tratamentos */}
        <HowItWorksSection />

        {/* Cronograma - Timeline */}
        <AestheticsSection />

        {/* Resultados - Após cronograma */}
        <ResultsSection />

        {/* Home Care */}
        <DeliverySection />

        {/* Depoimentos */}
        <TestimonialsSection />

        {/* Banner Final CTA */}
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
};

export default Index;
