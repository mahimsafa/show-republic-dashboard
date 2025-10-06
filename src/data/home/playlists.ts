import dog from "../../../public/images/Sidebar/profile.jpg";
import playlist from "../../../public/images/Sidebar/profile.jpg";
import { allshows } from "./shows";

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
  likes: number;
  isLiked: boolean;
  comments: string;
  views: string;
  shares: string;
  commentbox: CommentBox;
}

interface Playlist {
  id : string;
  img: string;
  icon: string;
  title: string;
  description : string;
  name : string;
  views: string;
  time: string;
  privacy : string;
  category : string;
  shows : Show[];
}

interface Tag {
  title: string;
}

export const tags: Tag[] = [
  { title: "All" },
  { title: "New" },
  { title: "Fashion" },
  { title: "Favorite" },
  { title: "Technology" },
  { title: "Education" }
];

export const allPlaylists: Playlist[] = [
  {
    id : "1",
    img: dog.src,
    icon: playlist.src,
    title: "Dream big, work hard, make it happen, Create your own sunshine!!",
    description : "Lorem ipsum dolor sit amet consectetur. Auctor rutrum scelerisque ut vestibulum laoreet phasellus commodo donec at. Fringilla nibh odio tortor ultricies mattis. Duis neque nisi nam odio.",
    name : "Olivia Rhye",
    views: "45k",
    time: "10 Months Ago",
    privacy : "Private",
    category : "Painting",
    shows : allshows
  },
];
