"use client";

import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "tokyo-night");

  const themes = [
    {
      name: "dark",
      value: "tokyo-night",
    },
    {
      name: "light",
      value: "tokyo-night-light",
    },
  ];

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="hidden flex-row space-x-2 md:flex">
      {themes.map((t, idx) => (
        <button
          key={idx}
          onClick={() => setTheme(t.value)}
          className={`text-xl ${
            theme == t.value ? "text-foreground" : "text-white"
          } hover:underline`}
        >
          {t.name}
        </button>
      ))}
    </div>
  );
}
