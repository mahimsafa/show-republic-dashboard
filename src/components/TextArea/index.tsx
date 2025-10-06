import "./style.css";
interface Props {
  rows?: number;
  id?: string;
  placeholder?: string;
  name?: string;
  className?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea: React.FC<Props> = ({
  rows = 3, // Set a default value for rows
  id,
  placeholder,
  name,
  className = "", // Set a default empty string for className
  value,
  onChange,
}) => {
  return (
    <textarea
      id={id}
      rows={rows}
      placeholder={placeholder}
      name={name}
      className={`text-area ${className}`.trim()} // Trim to remove extra space
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
