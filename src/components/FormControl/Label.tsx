import * as React from "react";
import { FormControlContext } from "./FormControl";

/**
 * Props for the Label component
 *
 * @export
 * @interface LabelProps
 */
export interface LabelProps {
  // If true, the label will have a 'visually-hidden' class for accessibility purposes
  hidden?: boolean;
  // Size of the label. Can be 'small', 'medium', or 'large'
  size?: "small" | "medium" | "large";
  // If true, the label will have an 'alert' class for styling purposes
  alert?: boolean | string;
}

/**
 * Customized label component that can be used in a form
 *
 * @param {(React.ComponentPropsWithoutRef<'label'> & LabelProps)} props
 * @returns {JSX.Element}
 */
function Label(props: React.ComponentPropsWithoutRef<"label"> & LabelProps) {
  const { children, hidden, size, className, ...restProps } = props;
  const { Alert, LabelCheck, overlay } = React.useContext(FormControlContext);

  return (
    <label
      className={`
    label
    ${LabelCheck && "active"} 
    ${overlay && "overlay"} 
    ${hidden ? "visually-hidden" : "show"}
    ${size && `label--${size}`}
    ${Alert && `label--alert`}
    ${className} 
    `}
      {...restProps}
      data-valid={LabelCheck}
    >
      {Alert ? Alert : children}
    </label>
  );
}
export default Label;
