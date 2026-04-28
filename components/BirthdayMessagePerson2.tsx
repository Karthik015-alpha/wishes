import React from "react";

interface BirthdayMessagePerson2Props {
  message: string;
}

export default function BirthdayMessagePerson2({ message }: BirthdayMessagePerson2Props) {
  return (
    <section className="message-section">
      <p>{message}</p>
    </section>
  );
}
