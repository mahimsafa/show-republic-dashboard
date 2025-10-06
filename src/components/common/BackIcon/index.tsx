import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Icon } from "@repo/common";

const BackIcon: React.FC = () => {
  const handleClick = () => {
    window.history.back();
  };
  return (
    <Icon
      type={IoArrowBackCircleOutline}
      size={30}
      color="var(--text-color)"
      onClick={handleClick}
    />
  );
};

export default BackIcon;
