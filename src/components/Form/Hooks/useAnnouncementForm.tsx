import dayjs from "dayjs";
import { useState } from "react";

export type MockAnnouncement = {
  type: string;
  animal: string;
  date: dayjs.Dayjs;
  gender: string;
  city: string;
  age: string;
  color: string;
  race: string;
  content: string;
  img?: string;
  id: number;
};

export const useAnnouncementForm = () => {
  const [newAnnouncement, setNewAnnouncement] = useState<MockAnnouncement>({
    type: "",
    animal: "",
    date: dayjs(),
    gender: "",
    city: "",
    age: "",
    color: "",
    race: "",
    content: "",
    img: "",
    id: 0,
  });
  return [newAnnouncement, setNewAnnouncement] as const;
};
