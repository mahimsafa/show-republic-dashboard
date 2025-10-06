import { IoFilterOutline } from "react-icons/io5";
import Button from "../../Button";
import Icon from "../Icon";
import "./style.css";

const FilterButton: React.FC = () => {
  return (
    <Button
      type="button"
      className="btn-filter border-0 bg-transparent p-0 d-flex align-items-center gap-2"
    >
      <Icon type={IoFilterOutline} size={24} />
      <span>Filter</span>
    </Button>
  );
};

export default FilterButton;
