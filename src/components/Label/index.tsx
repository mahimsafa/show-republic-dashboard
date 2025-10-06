import { ReactNode } from "react";
import "./style.css";
interface Props {
  children: ReactNode;
  htmlFor?: string;
}
const Label: React.FC<Props> = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="label">
      {children}
    </label>
  );
};

export default Label;
