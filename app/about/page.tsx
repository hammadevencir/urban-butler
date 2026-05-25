import AboutHeroSection from "@/components/about/about-hero-section";
import AboutMissionSection from "@/components/about/about-mission-section";
import AboutStorySection from "@/components/about/about-story-section";
import AboutVisionSection from "@/components/about/about-vision-section";

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutStorySection />
      <AboutVisionSection />
    </div>
  );
}
