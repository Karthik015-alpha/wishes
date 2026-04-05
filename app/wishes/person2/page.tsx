import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import BirthdayMessage from "@/components/BirthdayMessage";
import MemoryGallery from "@/components/MemoryGallery";
import SurprisePopup from "@/components/SurprisePopup";
import Footer from "@/components/Footer";
import { person2Data } from "@/data/person2";

export default function Person2Page() {
  return (
    <main>
      <HeroSection name={person2Data.name} heroImage={person2Data.heroImage} />
      <CountdownTimer targetDate={person2Data.birthday} />
      <BirthdayMessage message={person2Data.message} />
      <MemoryGallery memories={person2Data.memories} />
      <SurprisePopup music={person2Data.music} />
      <Footer />
    </main>
  );
}