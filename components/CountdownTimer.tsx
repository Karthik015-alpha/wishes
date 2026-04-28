"use client";

import { useEffect, useState } from "react";
import { getTimeRemaining } from "@/utils/countdown";

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section 
      className="countdown-section"
      style={{
        backgroundImage: "url('/images/common/suspision.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "transparent",
        padding: 0,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Thoda wait karo</h2>
      <div className="countdown-box" style={{ gap: "40px" }}>
        <div style={{ background: "transparent", backdropFilter: "none", padding: "10px" }}>
          <span style={{ fontSize: "3rem", fontWeight: "bold", color: "#000" }}>{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div style={{ background: "transparent", backdropFilter: "none", padding: "10px" }}>
          <span style={{ fontSize: "3rem", fontWeight: "bold", color: "#000" }}>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div style={{ background: "transparent", backdropFilter: "none", padding: "10px" }}>
          <span style={{ fontSize: "3rem", fontWeight: "bold", color: "#000" }}>{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>
        <div style={{ background: "transparent", backdropFilter: "none", padding: "10px" }}>
          <span style={{ fontSize: "3rem", fontWeight: "bold", color: "#000" }}>{timeLeft.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
    </section>
  );
}