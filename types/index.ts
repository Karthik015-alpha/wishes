export interface Memory {
  id: number;
  image: string;
  caption: string;
}

export interface BirthdayPerson {
  username: string;
  password: string;
  name: string;
  birthday: string;
  heroImage: string;
  music: string;
  message: string;
  memories: Memory[];
  route: string;
}