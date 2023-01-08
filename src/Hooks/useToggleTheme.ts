import React from "react";

export const useToggleTheme = () => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    document.body.setAttribute("data-theme", mode);
  }, [mode]);

  return {
    mode,
    setMode,
    toggleMode,
  };
};
