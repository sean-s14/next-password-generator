import { getCookie, setCookie } from "cookies-next";

export function getCurrentTheme() {
  return getCookie("theme", { path: "/" }) === "light" ? "light" : "dark";
}

export function toggleTheme() {
  const theme = getCurrentTheme();
  const newTheme = theme === "dark" ? "light" : "dark";

  setCookie("theme", newTheme, {
    path: "/",
  });

  const root = window.document.documentElement;
  root.classList.remove(theme);
  root.classList.add(newTheme);

  return newTheme;
}

export function setNewTheme(newTheme: "dark" | "light"): "dark" | "light" {
  const currentTheme = getCurrentTheme();

  setCookie("theme", newTheme, {
    path: "/",
  });

  const root = window.document.documentElement;
  root.classList.remove("dark");
  root.classList.remove(currentTheme);
  root.classList.add(newTheme);

  return newTheme;
}
