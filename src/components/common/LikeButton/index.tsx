import { IoHeartCircleOutline } from "react-icons/io5";
import Button from "../../Button";
import Icon from "../Icon";
interface Props {
  likes?: string;
  iconsize: number;
  onClick?: () => void;
}

const LikeButton: React.FC<Props> = ({ likes, iconsize, onClick }) => {
    
  return (
    <Button type="button" onClick={onClick} className="d-flex align-items-center gap-1 p-0 border-0 bg-transparent">
      <Icon type={IoHeartCircleOutline} size={iconsize} />
      <span>{likes}</span>
    </Button>
  );
};

export default LikeButton;
