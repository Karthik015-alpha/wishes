import UserCard from "@/components/UserCard";

export default function DashboardPage() {
  return (
    <main className="dashboard-page">
      <h1>Choose a Birthday Wishes Page 🎉</h1>
      <div className="user-grid">
        <UserCard name="Akhila" route="/wishes/person1" />
        <UserCard name="Sravani" route="/wishes/person2" />
      </div>
    </main>
  );
}