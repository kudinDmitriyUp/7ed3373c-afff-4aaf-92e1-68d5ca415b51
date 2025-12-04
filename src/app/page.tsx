"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroMetrics from '@/components/sections/hero/HeroMetrics';
import AboutShowcase from '@/components/sections/about/AboutShowcase';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { BarChart3, HelpCircle, MessageSquare, Palette, Phone, Sparkles, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="noiseGradient"
      cardStyle="outline-light"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Webild"
          navItems={[
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroMetrics
          title="AI-Powered Websites, Built Instantly"
          description="Webild transforms your ideas into fully functional websites using advanced AI. No coding required. Launch professional sites in minutes."
          tag="AI Website Builder"
          tagIcon={Sparkles}
          buttons={[
            { text: "Start Building Free", href: "#contact" },
            { text: "View Demo", href: "#" }
          ]}
          metricsLabel="Trusted by innovative companies worldwide"
          metrics={[
            { id: "1", value: "10K+", label: "Websites Created" },
            { id: "2", value: "2M+", label: "Users Active" },
            { id: "3", value: "99.9%", label: "Uptime Guarantee" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutShowcase
          title="Reimagining Website Creation with AI"
          description="At Webild, we believe building websites should be simple, fast, and accessible to everyone. Our AI technology does the heavy lifting while you maintain creative control."
          tag="About Webild"
          tagIcon={Zap}
          buttons={[
            { text: "Learn More", href: "#features" }
          ]}
          leftItem={{
            title: "Built for Speed",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873999943-bwznsm4o.jpg",
            imageAlt: "Team collaboration with AI"
          }}
          rightItem={{
            title: "Powered by Innovation",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874000664-nj2dwjth.jpg",
            imageAlt: "AI innovation technology"
          }}
          centerImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873999210-lds3t1fj.jpg"
          centerImageAlt="Webild AI workspace interface"
          useCappedBorderRadius={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="Powerful Features Made Simple"
          description="Everything you need to create stunning, professional websites without technical expertise"
          tag="Capabilities"
          tagIcon={Zap}
          buttons={[
            { text: "Explore All Features", href: "#" }
          ]}
          features={[
            {
              title: "AI-Powered Design",
              description: "Our AI generates beautiful, responsive designs tailored to your vision and brand identity",
              icon: Sparkles
            },
            {
              title: "Instant Deployment",
              description: "Launch your website live in seconds with automatic hosting and SSL certificates included",
              icon: Zap
            },
            {
              title: "Smart Analytics",
              description: "Track visitor behavior, conversions, and performance with real-time insights",
              icon: BarChart3
            },
            {
              title: "Full Customization",
              description: "Customize every element with our intuitive visual editor or dive into the code",
              icon: Palette
            }
          ]}
          carouselMode="buttons"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          title="What Our Users Say"
          description="Join thousands of satisfied users who've transformed their web presence with Webild"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              nameTitle: "Sarah Johnson, CEO of TechFlow",
              quote: "Webild saved us months of development time. We launched our product website in hours, not weeks. The AI understood exactly what we needed.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874003809-xu7so3ue.jpg"
            },
            {
              id: "2",
              nameTitle: "Michael Chen, Founder of StartupXYZ",
              quote: "As a non-technical founder, Webild gave me the power to build a professional website without hiring developers. Absolutely game-changing.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874004349-q7p9u9li.jpg"
            },
            {
              id: "3",
              nameTitle: "Emily Rodriguez, Marketing Director",
              quote: "The customization options are incredible. We could brand it exactly as we wanted while maintaining that professional AI-designed quality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874005126-vlfr6fzs.jpg"
            },
            {
              id: "4",
              nameTitle: "David Kim, Product Manager",
              quote: "The analytics dashboard gives us actionable insights instantly. We've optimized our site based on Webild's recommendations and doubled our conversions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874005611-xltyk5tt.jpg"
            },
            {
              id: "5",
              nameTitle: "Jessica Lee, Agency Owner",
              quote: "I'm using Webild to serve my clients faster and more affordably. It's not replacing designers—it's empowering us to do more work.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874006227-s2bouncn.jpg"
            },
            {
              id: "6",
              nameTitle: "Alex Turner, Tech Director",
              quote: "The infrastructure is solid. 99.9% uptime, fast load times, and excellent customer support. We trust Webild with our client projects.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874006714-zpfyu33s.jpg"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          title="Trusted by Industry Leaders"
          description="Companies worldwide rely on Webild to power their digital presence"
          tag="Partners"
          tagIcon={Users}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          speed={40}
          topMarqueeDirection="left"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874007383-t3ii1xvq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874007882-nunkc92k.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874008731-rugb688z.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874009414-8qhmvda0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874009928-p7omvvuq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874011046-ojdrfono.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874011679-5ii10kmw.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874012588-ffi9i93v.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874007383-t3ii1xvq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874007882-nunkc92k.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874008731-rugb688z.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874009414-8qhmvda0.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about Webild"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do I need coding skills to use Webild?",
              content: "No! Webild is designed for everyone. Our AI handles all the technical work. You can create a professional website with zero coding knowledge. If you do have coding skills, you can customize the code too."
            },
            {
              id: "2",
              title: "How fast can I launch a website?",
              content: "Most users launch their website within 15-30 minutes. Our AI generates the design and structure based on your inputs, and you can go live with a single click."
            },
            {
              id: "3",
              title: "Can I customize my website after creation?",
              content: "Absolutely. Webild provides an intuitive visual editor where you can customize colors, fonts, layouts, and content. You can also access the code for advanced customization."
            },
            {
              id: "4",
              title: "What's included with Webild?",
              content: "Every website includes hosting, SSL certificate, automatic backups, analytics dashboard, email support, and access to our library of templates and components."
            },
            {
              id: "5",
              title: "Can I upgrade or downgrade my plan?",
              content: "Yes, you can change your plan anytime. Upgrades take effect immediately, and downgrades apply at your next billing cycle."
            },
            {
              id: "6",
              title: "Do you offer migration services?",
              content: "Yes! Our team can help migrate your existing website to Webild at no additional cost. We handle all the technical details so you don't have to worry."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Start?"
          ctaDescription="Get your website live in minutes. No credit card required."
          ctaButton={{
            text: "Get Started Free",
            href: "#"
          }}
          ctaIcon={Zap}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."
            },
            {
              id: "2",
              title: "Is there a free trial?",
              content: "Yes! You get 7 days free to explore all features. No credit card needed to start."
            },
            {
              id: "3",
              title: "What about customer support?",
              content: "We offer 24/7 email support for all plans, plus live chat and phone support for premium users."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Webild"
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Templates", href: "#" },
                { label: "Integrations", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Community", href: "#" },
                { label: "Support", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Webild. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}