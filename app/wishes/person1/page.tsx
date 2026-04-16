import HeroSection from "@/components/HeroSection";
import BirthdayMessage from "@/components/BirthdayMessage";
import MemoryGallery from "@/components/MemoryGallery";
import Footer from "@/components/Footer";
import { person1Data } from "@/data/person1";

export const dynamic = "force-dynamic";

export default function Person1Page() {
  return (
    <main className="person1-page">
      <HeroSection name={person1Data.name} heroImage={person1Data.heroImage} />
      <BirthdayMessage message={person1Data.message} />
      <MemoryGallery
        memories={person1Data.memories}
        surpriseMusic={person1Data.music}
      />
      <Footer />
    </main>
  );
}