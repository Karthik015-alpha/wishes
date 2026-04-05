interface HeroSectionProps {
  name: string;
  heroImage: string;
}

export default function HeroSection({ name, heroImage }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <img className="hero-image" src={heroImage} alt={name} />
      <div className="hero-content">
        <h1>Happy Birthday, {name}! 🎉</h1>
        <p>Wishing you joy, laughter, and amazing memories today and always.</p>
      </div>
    </section>
  );
}