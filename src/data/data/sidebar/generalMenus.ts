import {
  IoAddCircleOutline,
  IoAddCircleSharp,
  IoCardOutline,
  IoCardSharp,
  IoHomeOutline,
  IoHomeSharp,
  IoNotificationsOutline,
  IoNotificationsSharp,
  IoPersonOutline,
  IoPersonSharp,
} from "react-icons/io5";
import { IconType } from "react-icons";

interface GeneralMenu {
  title: string;
  icon: IconType;
  icon_hover: IconType;
  icon_active: IconType;
  count: string | undefined;
  path: string;
}
export const generalMenus: GeneralMenu[] = [
  {
    title: "Home",
    icon: IoHomeOutline,
    icon_hover: IoHomeOutline,
    icon_active: IoHomeSharp,
    count: "",
    path: "/",
  },
  {
    title: "Your Channel",
    icon: IoPersonOutline,
    icon_hover: IoPersonOutline,
    icon_active: IoPersonSharp,
    count: "",
    path: "/channelContent",
  },
  {
    title: "Subscriptions",
    icon: IoCardOutline,
    icon_hover: IoCardOutline,
    icon_active: IoCardSharp,
    count: "",
    path: "/subscriptions",
  },
  {
    title: "Notification",
    icon: IoNotificationsOutline,
    icon_hover: IoNotificationsOutline,
    icon_active: IoNotificationsSharp,
    count: "8",
    path: "/notification",
  },
  {
    title: "Create New",
    icon: IoAddCircleOutline,
    icon_hover: IoAddCircleSharp,
    icon_active: IoAddCircleSharp,
    count: "",
    path: "/create",
  },
];
