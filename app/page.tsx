import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-page">
      <div className="overlay">
        <h1>🎂 Welcome to Birthday Wishes 🎂</h1>
        <p>A special place for special people 💖</p>
        <Link href="/login" className="main-btn">
          Login to Continue
        </Link>
      </div>
    </main>
  );
}