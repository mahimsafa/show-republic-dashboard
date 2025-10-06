import Drawer from "../Drawer";
import Searchbar from "../Searchbar";
import "./style.css";
// import { Drawer, Searchbar } from "@repo/common";
import Image from "next/image";

interface HeaderProps {
  user: any;
  liveSubscriptions: any[];
  backButton?: boolean;
  onBackClick?: () => void;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  user,
  liveSubscriptions,
  backButton = false,
  onBackClick,
  children,
}) => {
  return (
    <div className={`header w-100`}>
      <div className="d-flex align-items-center justify-content-between gap-2 w-100">
        {/* Back Icon and Title */}
        <div className="d-flex align-items-center">
          {backButton && (
            <button onClick={onBackClick} className="back-button">
              <Image
                src="/icons/arrow-back.svg"
                alt="back-arrow"
                width={24}
                height={24}
                className="arrow-back"
              />
            </button>
          )}
        </div>

        {/* Drawer for mobile view */}
        <div className="d-flex d-lg-none">
          {/* @ts-ignore */}
          <Drawer user={user} liveSubscriptions={liveSubscriptions} />
        </div>

        {/* Searchbar on the right */}
        <div className="flex-grow-1 d-flex justify-content-end align-items-center gap-3">
          {/* @ts-ignore */}
          <Searchbar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;
