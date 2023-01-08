import * as React from "react";
import { FormControlContext } from "./FormControl";
import { callAll } from "../../utils/callAll";

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

  return (
    <input
      {...props}
      className={`input ${InputSize} ${Alert && "alert"} ${className}`}
      onChange={callAll(props.onChange, props.required ? inputChange : null)}
      onFocus={callAll(props.onFocus, onFocus)}
    />
  );
}

export default Input;
