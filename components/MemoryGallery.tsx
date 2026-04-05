import { Memory } from "@/types";

interface MemoryGalleryProps {
  memories: Memory[];
}

export default function MemoryGallery({ memories }: MemoryGalleryProps) {
  return (
    <section className="gallery-section">
      <h2>Beautiful Memories 📸</h2>
      <div className="gallery-grid">
        {memories.map((memory) => (
          <div className="gallery-card" key={memory.id}>
            <img src={memory.image} alt={memory.caption} />
            <p>{memory.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}