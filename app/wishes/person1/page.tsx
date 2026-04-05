import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import BirthdayMessage from "@/components/BirthdayMessage";
import MemoryGallery from "@/components/MemoryGallery";
import SurprisePopup from "@/components/SurprisePopup";
import Footer from "@/components/Footer";
import { person1Data } from "@/data/person1";

export default function Person1Page() {
  return (
    <main>
      <HeroSection name={person1Data.name} heroImage={person1Data.heroImage} />
      <CountdownTimer targetDate={person1Data.birthday} />
      <BirthdayMessage message={person1Data.message} />
      <MemoryGallery memories={person1Data.memories} />
      <SurprisePopup music={person1Data.music} />
      <Footer />
    </main>
  );
}