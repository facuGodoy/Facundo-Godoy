import { useEffect, useState } from "react";

const preferDarkQuery = "(prefers-color-scheme: light)";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState<string>("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = localStorage.getItem("theme") as "dark" | "light";

    const handleChange = () => {
      const check = userPref ? userPref : mediaQuery.matches ? "dark" : "light";
      setMode(check === "dark" ? "dark" : "light");
      localStorage.setItem("theme", check);
      document.documentElement.classList.toggle("dark", check === "dark");
    };

    mediaQuery.addEventListener("change", handleChange, false);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark" || mode === "light") {
      window.localStorage.setItem("theme", mode);
      document.documentElement.classList.toggle("dark", mode === "dark");
    }
  }, [mode]);

  return {mode, setMode};
};

export default useThemeSwitcher;
