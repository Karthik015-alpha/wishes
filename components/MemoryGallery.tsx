"use client";

import { useState } from "react";
import { Memory } from "@/types";
import SurprisePopup from "@/components/SurprisePopup";

interface MemoryGalleryProps {
  memories: Memory[];
  surpriseMusic?: string;
}

export default function MemoryGallery({
  memories,
  surpriseMusic,
}: MemoryGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  if (memories.length === 0) {
    return (
      <section className="gallery-section">
        <h2>Beautiful Memories 📸</h2>
        <p>No memories added yet.</p>
      </section>
    );
  }

  const currentMemory = memories[currentIndex];

  const showNextMemory = () => {
    if (memories.length < 2 || animationClass) {
      return;
    }

    setAnimationClass("gallery-slide-out");

    window.setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % memories.length);
      setAnimationClass("gallery-slide-in");

      window.setTimeout(() => {
        setAnimationClass("");
      }, 240);
    }, 220);
  };

  return (
    <section className="gallery-section">
      <h2>Beautiful Memories 📸</h2>
      <div className="gallery-viewer">
        <button
          type="button"
          className="gallery-image-btn"
          onClick={showNextMemory}
          aria-label="Show next memory image"
          title="Click to view next image"
        >
          <img
            className={`gallery-slide ${animationClass}`}
            src={currentMemory.image}
            alt={currentMemory.caption}
          />
        </button>

        <p className="gallery-caption">{currentMemory.caption}</p>
        <p className="gallery-hint">Click image to see next memory</p>

        <div className="gallery-dots" aria-hidden="true">
          {memories.map((memory, index) => (
            <span
              key={memory.id}
              className={index === currentIndex ? "dot active" : "dot"}
            />
          ))}
        </div>

        {surpriseMusic && currentIndex === memories.length - 1 && (
          <SurprisePopup music={surpriseMusic} />
        )}
      </div>
    </section>
  );
}