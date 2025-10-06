/* eslint-disable no-redeclare */
import Link from "next/link";
import "./style.css";
import Image from "next/image";

interface Props {
  img: string;
  name: string;
  email?: string;
  subscribers?: string;
  likes?: string;
  imgsize? : number;
}
const UserProfile: React.FC<Props> = ({
  img,
  name,
  email,
  subscribers,
  likes,
  imgsize
}) => {
  function getImgURL(url: string) {
    if(!url) {
      return "/images/avatar.webp";
    }
    if(url?.startsWith("http")) {
      return url;
    }
    if(url?.startsWith("/")) {
      return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
    }
    return `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
  }
  return (
    <div className="user-profile d-flex flex-column gap-2">
      <div className=" d-flex align-items-center gap-2">
        <Image
          src={getImgURL(img)}
          alt="profile"
          width={imgsize? imgsize : 40}
          height={imgsize? imgsize : 40}
          className="rounded-circle"
        />
        <div>
          <p className="text-sm">{name}</p>
          <p className="text-sm-2">{email}</p>
        </div>
      </div>
      {subscribers && likes && (
        <p className="text-sm-2 d-flex align-items-center gap-2">
          <span>{subscribers} Subscribers</span>
          <span className="opacity-50">&#124;</span>
          <span>{likes} Likes</span>
        </p>
      )}
    </div>
  );
};

export default UserProfile;
