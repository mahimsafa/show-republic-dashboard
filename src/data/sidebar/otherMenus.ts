import { IconType } from "react-icons";
import {
  IoBriefcaseOutline,
  IoBriefcaseSharp,
  IoChatboxOutline,
  IoChatboxSharp,
  IoLogOutOutline,
  IoMoonOutline,
  IoMoonSharp,
  IoPersonCircleOutline,
  IoPersonCircleSharp,
  IoSettingsOutline,
  IoSettingsSharp,
  IoWalletOutline,
  IoWalletSharp,
} from "react-icons/io5";
import { RiCoinsFill, RiCoinsLine } from "react-icons/ri";

interface Menu {
  title: string;
  icon: IconType;
  icon_hover: IconType;
  icon_active: IconType;
  count: string | undefined;
  path: string;
}

interface OtherMenu {
  basic_menus: Menu[];
  other_menus: Menu[];
  logout: Menu;
}

export const otherMenus: OtherMenu[] = [
  {
    basic_menus: [
      {
        title: "View profile",
        icon: IoPersonCircleOutline,
        icon_hover: IoPersonCircleSharp,
        icon_active: IoPersonCircleSharp,
        path: "/profile",
        count : "",
      },
      {
        title: "Wallet",
        icon: IoWalletOutline,
        icon_hover: IoWalletSharp,
        icon_active: IoPersonCircleSharp,
        path: "/wallet",
        count : "",
      },
      {
        title: "Earn",
        icon: RiCoinsLine,
        icon_hover: RiCoinsFill,
        icon_active: IoPersonCircleSharp,
        path: "/creator",
        count : "",
      },
      {
        title: "Brand",
        icon: IoBriefcaseOutline,
        icon_hover: IoBriefcaseSharp,
        icon_active: IoPersonCircleSharp,
        path: "/brand",
        count : "",
      },
    ],
    other_menus: [
      {
        title: "Settings",
        icon: IoSettingsOutline,
        icon_hover: IoSettingsSharp,
        icon_active: IoPersonCircleSharp,
        path: "/settings",
        count : "",
      },
      {
        title: "Support",
        icon: IoChatboxOutline,
        icon_hover: IoChatboxSharp,
        icon_active: IoPersonCircleSharp,
        path: "",
        count : "",
      },
      {
        title: "Dark Mode",
        icon: IoMoonOutline,
        icon_hover: IoMoonSharp,
        icon_active: IoPersonCircleSharp,
        path: "",
        count : "",
      },
    ],
    logout: {
      title: "Log out",
      icon: IoLogOutOutline,
      icon_hover: IoLogOutOutline,
      icon_active: IoPersonCircleSharp,
      path: "/authentication/signin",
      count : "",
    },
  },
];
