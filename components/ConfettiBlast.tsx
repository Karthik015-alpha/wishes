"use client";
import { useEffect, useState } from "react";

export default function ConfettiBlast() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="confetti-blast">
      {Array.from({ length: 40 }).map((_, i) => (
        <span key={i} className={`confetti confetti-${i % 8}`}></span>
      ))}
    </div>
  );
}
