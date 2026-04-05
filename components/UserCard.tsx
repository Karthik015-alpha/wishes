import Link from "next/link";

interface UserCardProps {
  name: string;
  route: string;
}

export default function UserCard({ name, route }: UserCardProps) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <Link href={route}>Open Wishes</Link>
    </div>
  );
}