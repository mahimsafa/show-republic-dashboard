import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { Button, Icon } from "@repo/common";

interface Props {
  iconsize?: number;
  onClick?: ()=> void;
}

const BackButton: React.FC<Props> = ({ iconsize = 30, onClick }) => {
  return (
    <Button type="button" className="border-0 bg-transparent p-0" onClick={onClick}>
      <Icon type={IoEllipsisVerticalOutline} size={iconsize} color="var(--text-color)" />
    </Button>
  );
};

export default BackButton;
