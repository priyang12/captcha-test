import * as React from "react";
import { clsx } from "clsx";
import { FormControlContext } from "./FormControl";

/**
 * Props for the Input component
 *
 * @export
 * @interface InputProps
 */
export interface InputProps {
  // Size of the input. Can be 'small', 'medium', or 'large'
  InputSize: "small" | "medium" | "large";
  // If true, the input will have an 'alert' class for styling purposes
  alert?: boolean | string;
}

/**
 * Customized input component that can be used in a form
 *
 * @param {(React.ComponentPropsWithoutRef<'input'> & InputProps)} props
 * @returns {JSX.Element}
 */
function Input({
  InputSize = "medium",
  className,
  ...props
}: React.ComponentPropsWithoutRef<"input"> & InputProps) {
  const { Alert, onFocus, inputChange } = React.useContext(FormControlContext);
  const InputClass = clsx("input", InputSize, Alert && "alert", className);

  return (
    <input
      {...props}
      className={InputClass}
      onChange={inputChange}
      onFocus={onFocus}
    />
  );
}

export default Input;
