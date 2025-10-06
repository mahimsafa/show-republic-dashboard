"use client";
import { useEffect, useState } from "react";
import "./style.css";
import { IoCloseCircleOutline, IoMenuOutline } from "react-icons/io5";
// import {
//   GeneralMenus,
//   Icon,
//   LiveSubscriptions,
//   Logo,
//   OtherMenus,
// } from "@repo/common";
import Link from "next/link";
import { otherMenus } from "@/data/sidebar/otherMenus";
import { generalMenus } from "@/data/sidebar/generalMenus";
import Logo from "../Logo";
import OtherMenus from "./OtherMenus";
import GeneralMenus from "./GeneralMenus";
import Icon from "../common/Icon";
import LiveSubscriptions from "./LiveSubscriptions";

interface LiveSubscription {
  id: string;
  name: string;
  img: string;
  date: string;
  time: string;
  live: boolean;
  video: string;
  views: string;
}
interface StoreItem {
  id: string;
  img: string;
  title: string;
  delivery: string;
  company: string;
}

interface Playlist {
  img: string;
  icon: string;
  title: string;
  views: string;
  time: string;
}

interface UserProfile {
  id: string;
  banner: string;
  profile: string;
  name: string;
  email: string;
  category: string;
  date: string;
  description: string;
  username: string;
  subscribers: string;
  videos: string;
  website: string;
  location: string;
  mobile: string;
  store: StoreItem[];
  playlists: Playlist[];
}
interface Props {
  liveSubscriptions: LiveSubscription[];
  user: UserProfile;
}

const Sidebar: React.FC<Props> = ({ user, liveSubscriptions }) => {
  const [state, setState] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Indicate that the component is mounted (running on client-side)
    setIsMounted(true);

    // Retrieve the saved state from localStorage if it exists
    const savedState = localStorage.getItem("sidebarState");
    if (savedState !== null) {
      setState(JSON.parse(savedState));
    }
  }, []);

  // Save the state to localStorage whenever it changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("sidebarState", JSON.stringify(state));
    }
  }, [state, isMounted]);

  const handleToggle = () => {
    setState((prevState: boolean) => !prevState);
  };

 

  return (
    <div className="sidebar d-flex flex-column gap-2">
      <Link href="/">
        <Logo />
      </Link>
      <div className="side-menus">
        <div className="d-flex flex-column gap-3">
          <div className="position-relative flex-grow-1">
            {state ? (
              <OtherMenus menus={otherMenus} user={user} />
            ) : (
              <GeneralMenus user={user} menus={generalMenus} />
            )}

            <button className="toggle-btn" onClick={handleToggle}>
              {state ? (
                <Icon type={IoCloseCircleOutline} size={30} />
              ) : (
                <Icon type={IoMenuOutline} size={30} />
              )}
            </button>
          </div>
          <LiveSubscriptions subscriptions={liveSubscriptions} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
