import profile from "../../assets/images/Sidebar/profile.jpg";
import gif from "../../assets/images/Sidebar/gif.png";
import video from "../../assets/videos/home/test1.mp4";
interface LiveSubscription {
  id: string; // Add id property
  name: string;
  img: string;
  date: string;
  time: string;
  live: boolean;
  icon: string;
  video: string;
  views : string;
}

export const liveSubscriptions: LiveSubscription[] = [
  {
    id: "1",
    name: "Jack Schamberger",
    img: profile,
    date: "Now",
    time: "01:45:23",
    live: true,
    icon: gif,
    video: video,
    views : "21k"
  },
  {
    id: "2",
    name: "Darrel McLaughlin",
    img: profile,
    date: "Now",
    time: "01:45:23",
    live: true,
    icon: gif,
    video: video,
    views : "32k"
  },
  {
    id: "3",
    name: "Larry Vandervort",
    img: profile,
    date: "March, 6th",
    time: "3 Am",
    live: false,
    icon: gif,
    video: video,
    views : "21k"
  },
  {
    id: "4",
    name: "Sadie Schmitt",
    img: profile,
    date: "March, 6th",
    time: "3 Am",
    live: false,
    icon: gif,
    video: video,
    views : "21k"
  },
  {
    id: "5",
    name: "Kristy Nicolas",
    img: profile,
    date: "March, 6th",
    time: "3 Am",
    live: false,
    icon: gif,
    video: video,
    views : "21k"
  },
];
