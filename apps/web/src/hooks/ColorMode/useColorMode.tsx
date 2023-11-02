import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

type ColorSchemeData = {
  colorScheme: "dark" | "light";
  toggle: () => void;
};

export default function useColorMode(): ColorSchemeData {
  const [theme, setTheme] = useState("");
  const colorScheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    setTheme(localStorage.theme);
  }, []);

  const toggle = useCallback(() => {
    setTheme(colorScheme);

    if (theme === "light") localStorage.theme = "dark";
    else localStorage.theme = "light";
  }, [colorScheme, theme]);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, colorScheme]);

  return { colorScheme, toggle };
}
