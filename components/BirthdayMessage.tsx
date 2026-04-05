interface BirthdayMessageProps {
  message: string;
}

export default function BirthdayMessage({ message }: BirthdayMessageProps) {
  return (
    <section className="message-section">
      <h2>Special Wishes 💌</h2>
      <p>{message}</p>
    </section>
  );
}