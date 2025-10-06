import { IoGameControllerOutline, IoCheckmarkCircleSharp, IoLockClosedSharp, IoKeySharp } from "react-icons/io5";
import { IconType } from "react-icons";

interface Activity {
  id: string;
  icon: IconType;
  description: string;
  time: string;
}

export const activities: Activity[] = [
  { id: "1", icon: IoGameControllerOutline, description: "You created a new game", time: "Just now" },
  { id: "2", icon: IoCheckmarkCircleSharp, description: "You approved a brand", time: "59 minutes ago" },
  { id: "3", icon: IoLockClosedSharp, description: "Log in from chrome, Lagos Nig.", time: "12 hours ago" },
  { id: "4", icon: IoKeySharp, description: "You changed your password", time: "Feb 2, 2023" },
];
