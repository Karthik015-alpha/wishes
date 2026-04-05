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
    <section className="countdown-section">
      <h2>Countdown 🎉</h2>
      <div className="countdown-box">
        <div>
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div>
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div>
          <span>{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>
        <div>
          <span>{timeLeft.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
    </section>
  );
}