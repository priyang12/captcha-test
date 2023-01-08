import React from "react";
import TextCanvas from "./components/TextCanvas";
import { generateCaptchaText } from "./utils/generateCaptchaTest";
import { FormControl, Input, Label } from "./components/FormControl";
import "./App.scss";

function App() {
  const [captchaText, setCaptchaText] = React.useState(generateCaptchaText());
  const [userInput, setUserInput] = React.useState("");
  const [isHuman, setIsHuman] = React.useState<boolean>();

  const ResetCaptcha = () => {
    setCaptchaText(generateCaptchaText());
  };

  const handleSubmit: React.ComponentPropsWithoutRef<"form">["onSubmit"] = (
    event
  ) => {
    event.preventDefault();
    if (userInput.toLowerCase() === captchaText.toLowerCase()) {
      setIsHuman(true);
    } else {
      setIsHuman(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <FormControl overlay>
          <Label>Name</Label>
          <Input
            InputSize="large"
            type="text"
            // value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
        </FormControl>
        <TextCanvas CanvasText={captchaText} />
        <button type="submit">Submit</button>

        {isHuman === true && <p>Thank you for verifying that you are human!</p>}
        {isHuman === false && (
          <p>The CAPTCHA response was incorrect. Please try again.</p>
        )}
      </form>
      <button onClick={ResetCaptcha}>Reset</button>
    </div>
  );
}

export default App;
