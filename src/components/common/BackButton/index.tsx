import { IoArrowBackCircleOutline } from "react-icons/io5";
import Button from "../../Button";
import Icon from "../Icon";
import "./style.css";
const BackButton: React.FC = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <Button
      className="btn-back d-flex align-items-center gap-1"
      onClick={handleBackClick}
    >
      <Icon type={IoArrowBackCircleOutline} size={30} />
      <span>Back</span>
    </Button>
  );
};

export default BackButton;
