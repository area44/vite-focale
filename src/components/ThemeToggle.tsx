import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.theme = next ? "dark" : "light";
  };

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="text-xl">
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
