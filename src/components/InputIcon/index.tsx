// import { IconType } from "react-icons";
import "./style.css";
// import { Icon } from "@repo/common";
import { forwardRef, InputHTMLAttributes } from "react";
import Icon from "../common/Icon";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface Props extends Omit<InputProps, 'type' | 'id' | 'name' | 'placeholder' | 'className'> {
  iconType: any;
  iconSize: number;
  iconColor?: string;
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
}

const InputIcon = forwardRef<HTMLInputElement, Props>(({
  iconType,
  iconSize,
  iconColor,
  type = 'text',
  id,
  name,
  placeholder,
  className = '',
  ...rest
}, ref)  => {
  return (
    <div className="input-icon d-flex align-items-center gap-2 w-100">
      <Icon type={iconType} size={iconSize} color={iconColor} />
      <input
        type={type}
        id={id}
        name={name}
        ref={ref}
        placeholder={placeholder}
        className={className}
        {...rest}
      />
    </div>
  );
});

InputIcon.displayName = 'InputIcon';

export default InputIcon;
