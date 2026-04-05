import "./globals.css";

export const metadata = {
  title: "Birthday Wishes App",
  description: "A private birthday wishes website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}