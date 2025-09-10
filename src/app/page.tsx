"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingOverlay 
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={50}
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'Footer', id: 'footer' }
        ]}
        buttonText="Contact Us"
        onButtonClick={() => { console.log('Contact Clicked'); }}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to Simple Business"
          subtitle="Your one-stop solution for all business needs"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => { console.log('Get Started Clicked'); }}
          onSecondaryButtonClick={() => { console.log('Learn More Clicked'); }}
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout 
          title="About Us"
          descriptions={["We provide top-notch services to our clients.", "Our focus is on quality and customer satisfaction."]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: 'Step 1', description: 'Register an account.', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Make your first deposit.', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: 'Step 3', description: 'Start trading!', image: '/images/placeholder3.avif', position: 'right', isCenter: false }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Here’s a brief overview of our token distribution and usage."
          kpiItems={[
            { value: '10M', description: 'Total Supply', longDescription: 'Total number of tokens in circulation.', icon: { icon: 'MyIcon' } }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Simple Business Logo"
          logoText="Simple Business"
          columns={[
            { title: 'Quick Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'About Us', onClick: () => {} }] },
            { title: 'Services', items: [{ label: 'Consulting', onClick: () => {} }, { label: 'Support', onClick: () => {} }] },
            { title: 'Contact', items: [{ label: 'Support', onClick: () => {} }, { label: 'Feedback', onClick: () => {} }] }
          ]}
          copyrightText="© 2023 Simple Business. All rights reserved."
          onPrivacyClick={() => { console.log('Privacy Policy Clicked'); }}
        />
      </div>
    </SiteThemeProvider>
  );
}
