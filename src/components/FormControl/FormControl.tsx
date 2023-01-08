import * as React from "react";
import Input from "./Input";
import Label from "./Label";
import "./FormControl.scss";

type FormControlContextTypes = {
  inputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onFocus: () => void;
  LabelCheck: boolean;
  overlay?: boolean;
  Alert: string;
};

export const FormControlContext = React.createContext(
  {} as FormControlContextTypes
);

export type FormControlProps = {
  check?: boolean;
  overlay?: boolean;
  Valid?: boolean;
  ErrorMessage?: string;
};

function FormControl({
  check,
  overlay,
  children,
  Valid = false,
  ErrorMessage = "",
  ...restProps
}: FormControlProps & React.ComponentPropsWithoutRef<"div">) {
  const [LabelCheck, setLabelCheck] = React.useState(Valid);
  const [Alert, setAlert] = React.useState(ErrorMessage);

  React.useEffect(() => {
    setAlert(ErrorMessage);
  }, [ErrorMessage]);

  const inputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log("here");

    if (e.target.value.length > 0) {
      setLabelCheck(true);
      setAlert("");
    } else {
      setLabelCheck(false);
      const Error = e.target.name ? e.target.name : "Value";
      setAlert(ErrorMessage ? ErrorMessage : Error + " is Required");
    }
  };

  const onFocus = () => {
    setLabelCheck(true);
  };

  return (
    <FormControlContext.Provider
      value={{
        inputChange,
        onFocus,
        Alert,
        overlay,
        LabelCheck,
      }}
    >
      <div className="form-control" {...restProps}>
        {children}
      </div>
    </FormControlContext.Provider>
  );
}
export { FormControl, Input, Label };
