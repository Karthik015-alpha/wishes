"use client";
import HeroSectionPerson2 from "@/components/HeroSectionPerson2";
import { useEffect, useState } from "react";
import ConfettiBlast from "@/components/ConfettiBlast";
import CountdownTimer from "@/components/CountdownTimer";
import BirthdayMessagePerson2 from "@/components/BirthdayMessagePerson2";
import MemoryGalleryPerson2 from "@/components/MemoryGalleryPerson2";
import Footer from "@/components/Footer";
import { person2Data } from "@/data/person2";


export default function Person2Page() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set open date to April 30, 2026 00:00 IST (April 29, 2026 18:30 UTC)
    const openDate = new Date("2026-04-29T18:30:00Z");
    const now = new Date();
    if (now >= openDate) {
      setIsOpen(true);
    }
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("authUser");
      if (user === "Siri") {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2500);
      }
    }
  }, []);

  if (!isOpen) {
    return (
      <main className="person2-page">
        <CountdownTimer targetDate="2026-04-30T00:00:00+05:30" />
      </main>
    );
  }

  return (
    <main className="person2-page">
      {showConfetti && <ConfettiBlast />}
      <HeroSectionPerson2 name={person2Data.name} heroImage={person2Data.heroImage} />
      <BirthdayMessagePerson2 message={person2Data.message} />
      <MemoryGalleryPerson2
        memories={person2Data.memories}
        surpriseMusic={person2Data.music}
      />
      <Footer />
    </main>
  );
}