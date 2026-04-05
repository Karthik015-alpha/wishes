interface HeroSectionProps {
  name: string;
  heroImage: string;
}

export default function HeroSection({ name, heroImage }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <img className="hero-image" src={heroImage} alt={name} />
      <div className="hero-content">
        <h1>Happy Birthday, {name} Akkaww! 🎉</h1>
        <p>మీరు ఇలాగే ఎన్నెన్నో పుట్టినరోజులు జరుపుకోవాలి.</p>
      </div>
    </section>
  );
}