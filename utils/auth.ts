import { users } from "@/data/users";

export function validateUser(username: string, password: string) {
  const normalizedUsername = username.trim().toLowerCase();
  const normalizedPassword = password.trim();

  return users.find(
    (user) =>
      user.username.toLowerCase() === normalizedUsername &&
      user.password === normalizedPassword
  );
}