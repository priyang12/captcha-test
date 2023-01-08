import React from "react";

function TextCanvas({
  CanvasText,
}: { CanvasText: string } & React.ComponentPropsWithoutRef<"canvas">) {
  React.useEffect(() => {
    drawCaptcha(CanvasText);
  }, [CanvasText]);

  const drawCaptcha = (Text: string) => {
    const canvas = document.getElementById("captcha") as any;
    const context = canvas?.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "20px Arial";
    context.fillText(Text, 10, 25);
  };

  return <canvas id="captcha" width="100" height="30"></canvas>;
}

export default TextCanvas;
