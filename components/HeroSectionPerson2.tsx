import React from "react";

interface HeroSectionPerson2Props {
  name: string;
  heroImage: string;
}

export default function HeroSectionPerson2({ name, heroImage }: HeroSectionPerson2Props) {
  return (
    <section className="hero-section">
      <img src={heroImage} alt={name} className="hero-image" />
      <div className="hero-content">
        <h1>{name}</h1>
      </div>
    </section>
  );
}
