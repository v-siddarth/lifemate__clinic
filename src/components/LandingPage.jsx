import HeroSection from "./sections/HeroSection";
import AppointmentStrip from "./sections/AppointmentStrip";
import ServicesSection from "./sections/ServicesSection";
import StorySection from "./sections/StorySection";
import HowItWorksSection from "./sections/HowItWorksSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import SpecialistsSection from "./sections/SpecialistsSection";
import HelpDeskSection from "./sections/HelpDeskSection";
import FooterSection from "./sections/FooterSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AppointmentStrip />
      <ServicesSection />
      <StorySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <SpecialistsSection />
      <HelpDeskSection />
      <FooterSection />
    </>
  );
}
