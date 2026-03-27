"use client";

import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

export default function ThemeSwitcher({
  embedInMobile = false,
}: {
  embedInMobile?: boolean;
}) {
  const [theme, setTheme] = useLocalStorage("theme", "tokyo-night");
  const [mounted, setMounted] = useState(false);

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
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div
      className={`${
        !embedInMobile ? "hidden md:flex" : "flex"
      } flex-row space-x-2`}
    >
      {themes.map((t, idx) => (
        <button
          key={idx}
          onClick={() => setTheme(t.value)}
          className={`${!embedInMobile ? "text-xl" : ""} ${
            mounted && theme === t.value ? "text-foreground" : "text-muted"
          } hover:underline`}
        >
          {t.name}
        </button>
      ))}
    </div>
  );
}
