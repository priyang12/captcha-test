import React from "react";

export const useToggleTheme = () => {
  const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(darkModePreference.matches);

  const [mode, setMode] = React.useState<"light" | "dark">(
    darkModePreference.matches ? "dark" : "light"
  );

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
