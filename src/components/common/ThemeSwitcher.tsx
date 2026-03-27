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
      name: "tokyo night dark",
      value: "tokyo-night",
    },
    {
      name: "tokyo night light",
      value: "tokyo-night-light",
    },
    {
      name: "gruvbox",
      value: "gruvbox",
    },
    {
      name: "catppuccin",
      value: "catppuccin",
    },
    {
      name: "github dark",
      value: "github-dark",
    },
    {
      name: "hacker",
      value: "hacker",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className={`${!embedInMobile ? "hidden md:flex" : "flex"}`}>
      <select
        value={mounted ? theme : "tokyo-night"}
        onChange={(e) => setTheme(e.target.value)}
        className={`${!embedInMobile ? "text-xl" : ""} bg-transparent text-muted hover:text-foreground cursor-pointer outline-none`}
      >
        {themes.map((t) => (
          <option key={t.value} value={t.value} className="bg-background">
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}
