import Button from "../Button";
import Icon from "../common/Icon";
import "./style.css";
import { CiSearch } from "react-icons/ci";
// import { Button, Icon } from "@repo/common";

const Searchbar: React.FC = () => {
  return (
    <div className="searchbar">
      <Button className="bg-transparent border-0 p-0 d-flex align-items-center d-sm-none">
        <Icon type={CiSearch} size={33} color="var(--text-color)" />
      </Button>
      <div className="input-container d-none d-sm-flex align-items-center gap-2">
        <Button className="bg-transparent border-0 p-0">
          <Icon type={CiSearch} size={33} color="var(--text-color)" />
        </Button>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Searchbar;
