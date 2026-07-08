import { MotionProvider } from "@/components/landing/motion-provider/motion-provider";
import { Header } from "@/components/landing/header/header";
import { Hero } from "@/components/landing/hero/hero";
import { TopicMarquee } from "@/components/landing/topic-marquee/topic-marquee";
import { Mechanics } from "@/components/landing/mechanics/mechanics";
import { DuelSection } from "@/components/landing/duel-section/duel-section";
import { RewardSection } from "@/components/landing/reward-section/reward-section";
import { StageSection } from "@/components/landing/stage-section/stage-section";
import { ClosingCta } from "@/components/landing/closing-cta/closing-cta";
import { Footer } from "@/components/landing/footer/footer";

export default function Landing() {
  return (
    <MotionProvider>
      <Header />
      <main>
        <Hero />
        <TopicMarquee />
        <Mechanics />
        <DuelSection />
        <RewardSection />
        <StageSection />
        <ClosingCta />
      </main>
      <Footer />
    </MotionProvider>
  );
}
