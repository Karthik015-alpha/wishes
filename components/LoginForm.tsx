"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateUser } from "@/utils/auth";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const user = validateUser(username, password);

    if (!user) {
      setError("Invalid username or password");
      return;
    }

    localStorage.setItem("authUser", user.username);
    router.push(user.redirect);
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Secret Club Entry 😎</h2>

      <input
        type="text"
        placeholder="Mee peru"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Manthram Cheppandi"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Open Sesame 🚪</button>

      {error && <p className="error">{error}</p>}
    </form>
  );
}