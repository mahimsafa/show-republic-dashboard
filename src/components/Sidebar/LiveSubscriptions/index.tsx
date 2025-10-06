/* eslint-disable no-redeclare */
"use client";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";
import { IoCalendarOutline, IoTimeOutline, IoVideocam } from "react-icons/io5";
import Icon from "@/components/common/Icon";
// import { Icon } from "@repo/common";

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
interface Props {
  subscriptions: LiveSubscription[];
}
const LiveSubscriptions: React.FC<Props> = ({ subscriptions }) => {
  const currentpath = usePathname();
  return (
    <>
      <div className="live-sidebar d-flex flex-column gap-3">
        <div className="d-flex align-items-center gap-2">
          <Icon type={IoVideocam} size={33} color="var(--warning-color)" />
          <h5 className="heading">Live</h5>
        </div>
        {subscriptions.map((sub) => (
          <Link
            href={sub.live ? `/live/${sub.id}` : "/"}
            className={`d-flex align-items-center justify-content-between ${
              sub.live ? "active" : ""
            }`}
            key={sub.name}
          >
            <div className="d-flex align-items-center gap-2">
              <Image
                src={sub.img}
                alt="profile"
                width={32}
                height={32}
                className="rounded-circle"
              />
              <div>
                <p
                  className={`name ${
                    currentpath === `/live/${sub.id}` ? "active" : ""
                  }`}
                >
                  {sub.name}
                </p>

                <div className="date d-flex gap-2">
                  <div className="d-flex gap-1">
                    <Icon type={IoCalendarOutline} size={12} /> {sub.date}
                  </div>
                  <span className="d-flex align-items-center fw-bold">
                    &#124;
                  </span>
                  <div className="d-flex gap-1">
                    <Icon type={IoTimeOutline} size={12} /> {sub.time}
                  </div>
                </div>
              </div>
            </div>
            {sub.live && (
              <div>
                <Image
                  src="/images/Sidebar/waves.gif"
                  alt="live"
                  className="signals"
                  width={20}
                  height={20}
                />
              </div>
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default LiveSubscriptions;
