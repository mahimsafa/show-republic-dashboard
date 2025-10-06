import { IoFilterOutline } from "react-icons/io5";
import {Button} from "@repo/common";
import {Icon} from "@repo/common";
import "./style.css";

const SortButton: React.FC = () => {
  return (
    <Button className="btn-sort border-0 bg-transparent p-0 d-flex align-items-center gap-2">
      <Icon type={IoFilterOutline} size={24} />
      Sort
    </Button>
  );
};

export default SortButton;
