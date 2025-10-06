import { IoHelpCircleOutline } from "react-icons/io5";
import Button from "../../Button";
import Icon from "../Icon";
import "./style.css";
const HelpButton: React.FC = () => {
  return (
    <Button type="button" className="btn-help d-flex align-items-center gap-2">
      <span>Help</span>
      <Icon type={IoHelpCircleOutline} size={30} />
    </Button>
  );
};

export default HelpButton;
