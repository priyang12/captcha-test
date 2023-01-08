import React from "react";
import { generateCaptchaText } from "./utils/generateCaptchaTest";
import "./App.css";
import TextCanvas from "./components/TextCanvas";

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
    <>
      <form onSubmit={handleSubmit}>
        <TextCanvas CanvasText={captchaText} />
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button type="submit">Submit</button>

        {isHuman === true && <p>Thank you for verifying that you are human!</p>}
        {isHuman === false && (
          <p>The CAPTCHA response was incorrect. Please try again.</p>
        )}
      </form>
      <button onClick={ResetCaptcha}>Reset</button>
    </>
  );
}

export default App;
