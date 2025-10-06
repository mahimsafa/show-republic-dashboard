import profile from "../../../public/images/Sidebar/profile.jpg";
import thumbnail from "../../../public/images/Sidebar/profile.jpg";

interface CommentBox {
  profile: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

interface Show {
  id: string;
  userImg: string;
  name: string;
  username: string;
  time: string;
  date: string;
  type: string;
  title: string;
  description: string;
  video: string;
  videoLink: string;
  fileName: string;
  thumbnail: string;
  isLiked: false;
  likes: number;
  comments: string;
  views: string;
  shares: string;
  commentbox: CommentBox;
}

export const allshows: Show[] = [
  {
    id: "fsdfdfhieyriueyr384",
    userImg: profile.src,
    name: "Miss Elias Rippin",
    username: "@MissEli",
    time: "23 Jan 2023",
    date: "2 months ago",
    type: "Subscribe",
    title: "The Best Thumbnails for your videos",
    description:
      " This isn't just a video; it's a symphony of moments, a dance of light and sound that captures the essence of pure joy. So, turn up the volume, immerse yourself in the visual symphony, and let the beats carry you into a world where time stands still, and the rhythm rules. 🌟🔊 #VideoMagic #RhythmRevolution #Dance",
    video: "/videos/home/test1.mp4",
    videoLink: "https://show.rp/sdfgEWR56sdw1",
    fileName: "My first video.mp4",
    thumbnail: thumbnail.src,
    isLiked: false,
    likes: 65,
    comments: "76",
    views: "10M",
    shares: "230k",
    commentbox: {
      profile: profile.src,
      type: "text",
      id: "comment",
      name: "comment",
      placeholder: "Reply",
    },
  }
]