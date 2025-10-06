"use client";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { IoCloseSharp, IoMenuOutline } from "react-icons/io5";
import "./style.css";
import Icon from "../common/Icon";
import Sidebar from "../Sidebar";
// import { Icon, Sidebar } from "@repo/common";


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
  user: UserProfile;
  liveSubscriptions: LiveSubscription[];
}
const Drawer: React.FC<Props> = ({ user, liveSubscriptions }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        type="button"
        onClick={handleShow}
        className="border-0 bg-transparent p-0"
      >
        <Icon type={IoMenuOutline} size={24} color="var(--text-color)" />
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <div className="d-flex flex-column align-items-center p-3">
          <div className="w-100">
            <Sidebar user={user} liveSubscriptions={liveSubscriptions} />
          </div>
          <button
            className="close-btn border-0 bg-transparent p-0"
            onClick={handleClose}
          >
            <Icon type={IoCloseSharp} size={24} color="var(--text-color)" />
          </button>
        </div>
      </Offcanvas>
    </>
  );
};

export default Drawer;
