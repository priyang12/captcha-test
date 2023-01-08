import React from "react";
import { generateCaptchaText } from "./utils/generateCaptchaTest";
import "./App.css";

function App() {
  const [captchaText, setCaptchaText] = React.useState("");
  const [userInput, setUserInput] = React.useState("");
  const [isHuman, setIsHuman] = React.useState<boolean>();

  React.useEffect(() => {
    const Text = generateCaptchaText();
    setCaptchaText(Text);
    drawCaptcha(Text);
  }, []);

  const drawCaptcha = (Text: string) => {
    const canvas = document.getElementById("captcha") as any;
    const context = canvas?.getContext("2d");
    context.font = "20px Arial";
    context.fillText(Text, 10, 25);
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
    <form onSubmit={handleSubmit}>
      <canvas id="captcha" width="100" height="30"></canvas>
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
  );
}

export default App;
