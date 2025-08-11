import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "jusup-theme";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldDark);
    setDark(shouldDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(THEME_KEY, next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Alternar modo escuro"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background hover:bg-accent"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
};

export default ThemeToggle;
