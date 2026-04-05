"use client";

import { useEffect, useRef, useState } from "react";

interface SurprisePopupProps {
  music: string;
}

export default function SurprisePopup({ music }: SurprisePopupProps) {
  const [show, setShow] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (show) {
      void audio.play().catch(() => {
        // Ignore autoplay rejections and keep popup usable.
      });
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  }, [show]);

  const closeSurprise = () => {
    setShow(false);
  };

  return (
    <section className="surprise-section">
      <button onClick={() => setShow(true)}>Click for a Surprise 🎁</button>

      <audio ref={audioRef}>
        <source src={music} type="audio/mpeg" />
        Your browser does not support audio.
      </audio>

      {show && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Surprise! 🎉</h2>
            <p>
              You deserve all the happiness, love, and success in the world 💖
            </p>
            <button onClick={closeSurprise}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}