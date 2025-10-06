import { IconType } from "react-icons";

interface Props {
  type: IconType;
  size?: number;
  color?: string;
  onClick?: ()=> void;
}

const Icon: React.FC<Props> = ({ type: IconComponent, size, color, onClick }) => {
  return (
    <span className="d-flex align-items-center" onClick={onClick}>
      <IconComponent size={size} color={color} />
    </span>
  );
};

export default Icon;
