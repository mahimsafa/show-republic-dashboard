import { IoChevronDown } from "react-icons/io5";
import "./style.css";


interface Props {
  id?: string;
  name?: string;
  value?: string | number; 
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  options: Array<{ value: string | number; label: string }>;
}

const Select: React.FC<Props> = ({ options, id, name, value, onChange }) => {
  return (
    <div className="select-container">
      <select id={id} name={name} className="select" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <IoChevronDown className="select-icon" />
    </div>
  );
};

export default Select;
