import clsx from "clsx";
import React from "react";
import "./Button.scss";

function Button({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button">) {
  const ButtonClasses = clsx("Button", props.className);
  return (
    <button {...props} className={ButtonClasses}>
      {children}
    </button>
  );
}

export default Button;
