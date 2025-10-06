
import "./style.css";

interface Props {
  type: string;
  id?: string;
  placeholder?: string;
  name?: string;
  className?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<Props> = ({
  type,
  id,
  placeholder,
  name,
  className = "",
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      className={`input ${className}`.trim()}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
