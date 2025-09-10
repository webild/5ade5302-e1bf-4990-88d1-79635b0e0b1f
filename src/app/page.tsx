"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

const navItems = [
  { name: "Hero", id: "hero" },
  { name: "About", id: "about" },
  { name: "How to Buy", id: "how-to-buy" },
  { name: "Tokenomics", id: "tokenomics" },
  { name: "Footer", id: "footer" },
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarLayoutFloatingOverlay
        navItems={navItems}
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={50}
        buttonText="Contact Us"
        onButtonClick={() => console.log('Contact us clicked')}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24 bg-[linear-gradient(to_right,#FF5733,#FFBD33)]">
        <SplitHero
          title="Welcome to Simple Business"
          subtitle="Your partner in success"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => console.log('Primary button clicked')}
          onSecondaryButtonClick={() => console.log('Secondary button clicked')}
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Us"
          descriptions={["We offer great services.", "Our mission is to provide excellence."]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Do this first.", image: '/images/logo.svg', position: "left", isCenter: false },
            { title: "Step 2", description: "Then do this.", image: '/images/logo.svg', position: "center", isCenter: true },
            { title: "Step 3", description: "Finally do this.", image: '/images/logo.svg', position: "right", isCenter: false }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Our tokenomics are designed to ensure sustainability and growth."
          kpiItems={[
            { value: "1M", description: "Initial Supply", longDescription: "Total amount of tokens at launch.", icon: 'LucideIcon' },
            { value: "500K", description: "Circulating Supply", longDescription: "Tokens available in the market.", icon: 'LucideIcon' },
            { value: "20%", description: "Tax Rate", longDescription: "Transaction tax to fuel development.", icon: 'LucideIcon' }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Simple Business Logo"
          logoText="Simple Business"
          className="footer-class"
          columns={[
            { title: "Resources", items: [{ label: "Home", onClick: () => console.log('Home clicked') }, { label: "About", onClick: () => console.log('About clicked') }] },
            { title: "Support", items: [{ label: "Contact", onClick: () => console.log('Contact clicked') }, { label: "FAQ", onClick: () => console.log('FAQ clicked') }] },
            { title: "Socials", items: [{ label: "Twitter", onClick: () => console.log('Twitter clicked') }, { label: "Facebook", onClick: () => console.log('Facebook clicked') }] }
          ]}
          copyrightText="© 2023 Simple Business."
          onPrivacyClick={() => console.log('Privacy Policy clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}