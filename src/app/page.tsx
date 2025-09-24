"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          buttonText="Get Started"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to MemeCoinLab"
          subtitle="Join us in the fun and community-driven crypto experience!"
          primaryButtonText="Get Started"
          onPrimaryButtonClick={() => console.log('Primary action')}
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About MemeCoinLab"
          descriptions={["Explore our mission, vision, and the community behind MemeCoinLab."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Set up your wallet", image: "/images/logo.svg", position: "right", isCenter: false },
            { title: "Step 2", description: "Purchase tokens", image: "/images/logo.svg", position: "center", isCenter: true },
            { title: "Step 3", description: "Join the community", image: "/images/logo.svg", position: "left", isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics"
          description="Learn more about our token distribution and economics"
          tokenData={[
            { value: "1B", description: "Total Supply" },
            { value: "200M", description: "Circulating Supply" },
            { value: "5%", description: "Market Liquidity" },
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ
          items={[
            { title: "What is MemeCoin?", content: "A community-driven token designed for fun and engagement." },
            { title: "How can I buy MemeCoin?", content: "Follow our simple guide on the 'How to Buy' section." },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoinLab Logo"
          logoText="MemeCoinLab"
          className="footer-class"
        />
      </div>
    </SiteThemeProvider>
  );
}