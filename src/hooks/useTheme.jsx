import { useEffect, useState } from "react";

const themeFromLocalStorage = () => {
  return localStorage.getItem("chc-theme") || "light-mode";
};

export function useTheme() {
  const [theme, setTheme] = useState(themeFromLocalStorage());

  const changeTheme = () => {
    setTheme(theme == "dark-mode" ? "light-mode" : "dark-mode");
  };

  useEffect(() => {
    document.body.setAttribute("class", theme);
    localStorage.setItem("chc-theme", theme);
  }, [theme]);

  return { changeTheme, theme };
}
