import Link from "next/link";

export default function NotFound() {
  return (
    <main className="center-page">
      <div className="not-found-box">
        <h1>404 🎈</h1>
        <p>Oops! This page doesn’t exist.</p>
        <Link href="/">Go Home</Link>
      </div>
    </main>
  );
}