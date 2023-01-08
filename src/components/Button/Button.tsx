import React from "react";
import "./Button.scss";

function Button({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button {...props} className={`Button ${props.className}`}>
      {children}
    </button>
  );
}

export default Button;
