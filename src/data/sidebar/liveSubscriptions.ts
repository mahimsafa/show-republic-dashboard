import profile from "../../../public/images/Sidebar/profile.jpg";
interface LiveSubscription {
  id: string; // Add id property
  name: string;
  img: string;
  date: string;
  time: string;
  live: boolean;
  video: string;
  views : string;
}

export const liveSubscriptions: LiveSubscription[] = [
  {
    id: "1",
    name: "Jack Schamberger",
    img: profile.src,
    date: "Now",
    time: "01:45:23",
    live: true,
    video: "/videos/home/test2.mp4",
    views : "21k"
  },
];
