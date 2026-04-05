"use client";

import { useRef, useState } from "react";

interface MusicPlayerProps {
  music: string;
}

export default function MusicPlayer({ music }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <section className="music-section">
      <h2>Birthday Song 🎵</h2>
      <button
        type="button"
        className="music-btn"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause birthday song" : "Play birthday song"}
        title={isPlaying ? "Pause" : "Play"}
      >
        😇
      </button>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
        <source src={music} type="audio/mpeg" />
        Your browser does not support audio.
      </audio>
    </section>
  );
}