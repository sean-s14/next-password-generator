"use client";

import { useState, useEffect } from "react";
import { getCurrentTheme, toggleTheme, setNewTheme } from "@/utils/theme";
import { STYLES } from "@/constants/styles";

export default function Navigation() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const currentTheme = getCurrentTheme();
    if (currentTheme === "light") {
      const newTheme = setNewTheme("light");
      setTheme(newTheme);
    }
  }, []);

  async function handleThemeChange() {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  }

  return (
    <nav
      style={{ height: STYLES.NAV_HEIGHT }}
      className="w-full flex items-center justify-between px-10 bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100"
    >
      <h1 className="text-3xl font-bold">Key Vault</h1>
      <button onClick={handleThemeChange}>{theme} mode</button>
    </nav>
  );
}
