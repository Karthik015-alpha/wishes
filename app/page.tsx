import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-page">
      <div className="overlay overlay-mystery">
        <p className="mystery-badge">Private Invitation</p>
        <h1 className="mystery-title">Something is waiting inside.</h1>
        <p className="mystery-text">
          One door. One surprise. Enter only if you are ready to find out what
          has been prepared for you.
        </p>
        <Link href="/login" className="main-btn">
          Go Inside
        </Link>
      </div>
    </main>
  );
}