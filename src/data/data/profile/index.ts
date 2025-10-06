import { StaticImageData } from "next/image";
import banner from "../../assets/images/home/banner.png";
import profile from "../../assets/images/Sidebar/profile.jpg";

import { store } from "./store";

interface StoreItem {
  id: string;
  img: string | StaticImageData;
  title: string;
  delivery: string;
  company: string;
}

interface Playlist {
  img: string | StaticImageData;
  icon: string | StaticImageData;
  title: string;
  views: string;
  time: string;
}

interface UserProfile {
  id: string;
  banner: string;
  profile: string | StaticImageData;
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

export const userProfile: UserProfile = {
  id: "1",
  banner: banner,
  profile: profile,
  name: "Curtis Jenkins",
  email: "Jenkins@untitledui.com",
  category: "Entertainment and Recreation",
  date: "Joined December 2008",
  description:
    "Dream big, work hard, make it happen, Create your own sunshine!!",
  username: "@Jenkins",
  subscribers: "12k",
  videos: "5k",
  website: "www.showrepublic.com",
  location: "pakistan",
  mobile: "+92 343 3672327",
  store: store,
  playlists: [],
};
