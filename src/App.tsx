import React from "react";
import TextCanvas from "./components/TextCanvas";
import { generateCaptchaText } from "./utils/generateCaptchaTest";
import { FormControl, Input, Label } from "./components/FormControl";
import "./App.scss";
import Button from "./components/Button";

function App() {
  const [captchaText, setCaptchaText] = React.useState(generateCaptchaText());
  const [UserData, setUserData] = React.useState({
    Username: "",
    Email: "",
    Password: "",
    Password2: "",
  });

  const [ConfirmErrorMessage, setConfirmErrorMessage] = React.useState("");
  const [CaptchaInput, setCaptchaInput] = React.useState("");
  const [isHuman, setIsHuman] = React.useState<boolean>();

  const ResetCaptcha = () => {
    setCaptchaText(generateCaptchaText());
  };

  const onChange: React.ComponentPropsWithoutRef<"input">["onChange"] = (e) => {
    const { id, value } = e.target;
    setUserData({ ...UserData, [id]: value });
  };

  const handleSubmit: React.ComponentPropsWithoutRef<"form">["onSubmit"] = (
    event
  ) => {
    event.preventDefault();
    if (UserData.Password !== UserData.Password2) {
      setConfirmErrorMessage("Passwords Does not Match");
    }

    if (CaptchaInput.toLowerCase() === captchaText.toLowerCase()) {
      setIsHuman(true);
    } else {
      setIsHuman(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Sign Up For at Ease</h1>
        <FormControl overlay>
          <Label htmlFor="Username">Username</Label>
          <Input
            id="Username"
            name="Username"
            InputSize="large"
            type="text"
            value={UserData.Username}
            onChange={onChange}
            required
          />
        </FormControl>
        <FormControl overlay>
          <Label htmlFor="Email">Email</Label>
          <Input
            id="Email"
            name="Email"
            InputSize="large"
            type="text"
            value={UserData.Email}
            onChange={onChange}
            required
          />
        </FormControl>
        <FormControl overlay>
          <Label htmlFor="Password">Password</Label>
          <Input
            id="Password"
            name="Password"
            InputSize="large"
            type="password"
            value={UserData.Password}
            onChange={onChange}
            required
          />
        </FormControl>
        <FormControl
          overlay
          ErrorMessage={ConfirmErrorMessage}
          Valid={ConfirmErrorMessage ? true : false}
        >
          <Label htmlFor="Password2">Confirm Password</Label>
          <Input
            id="Password2"
            name="Password2"
            InputSize="large"
            type="password"
            value={UserData.Password2}
            onChange={onChange}
            required
          />
        </FormControl>
        <Label htmlFor="Captcha">
          Type the code to verifying that you are human
        </Label>
        <div className="CaptchaCode">
          <TextCanvas CanvasText={captchaText} />
          <Button
            type="button"
            onClick={ResetCaptcha}
            style={{
              fontSize: "var(--font-size-small)",
            }}
          >
            Reset
          </Button>
        </div>
        <Input
          id="Captcha"
          name="Captcha"
          InputSize="large"
          type="text"
          placeholder="Captcha Code"
          value={CaptchaInput}
          onChange={(event) => setCaptchaInput(event.target.value)}
          required
        />
        {isHuman === false && (
          <p className="CaptchaMessage">
            The CAPTCHA response was incorrect. Please try again.
          </p>
        )}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default App;
