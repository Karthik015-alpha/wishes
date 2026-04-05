import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import BirthdayMessage from "@/components/BirthdayMessage";
import MemoryGallery from "@/components/MemoryGallery";
import SurprisePopup from "@/components/SurprisePopup";
import Footer from "@/components/Footer";
import { person1Data } from "@/data/person1";

export const dynamic = "force-dynamic";

export default function Person1Page() {
  const openAt = new Date(person1Data.birthday);
  const closeAt = new Date(openAt.getTime() + 24 * 60 * 60 * 1000);
  const now = new Date();

  if (now < openAt) {
    return (
      <main className="center-page">
        <div className="overlay">
          <h1>Wishes Open at 12:00 AM</h1>
          <p>Come back on {openAt.toLocaleString()} to view this page.</p>
        </div>
      </main>
    );
  }

  if (now >= closeAt) {
    return (
      <main className="center-page">
        <div className="overlay">
          <h1>Wishes Closed</h1>
          <p>This page was available for one day and has now closed.</p>
        </div>
      </main>
    );
  }

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