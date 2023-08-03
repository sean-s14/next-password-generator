"use client";

import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { getCurrentTheme, toggleTheme, setNewTheme } from "@/utils/theme";
import { STYLES } from "@/constants/styles";
import Switch from "@/components/Switch/Switch";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import Link from "next/link";

export default function Navigation() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

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
      <div className="absolute">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={true}
          draggable={true}
          pauseOnHover={true}
          theme={theme}
          progressStyle={{
            background: "#07bc0c",
          }}
          className="max-w-[80%] text-sm xs:text-base ml-10 xs:ml-0 mr-10 xs:mr-0 mt-4 xs:mt-0"
        />
      </div>

      <Link href={"/"} className="text-2xl xs:text-3xl font-bold">
        Key Vault
      </Link>
      <Switch
        checked={theme === "dark"}
        handleCheck={handleThemeChange}
        LeftIcon={
          <BsFillSunFill
            className="text-yellow-200"
            size={17}
            title="light mode"
          />
        }
        RightIcon={
          <BsFillMoonStarsFill
            className="text-blue-400"
            size={17}
            title="dark mode"
          />
        }
        borderColor="border-neutral-500 dark:border-neutral-900"
        innerBgColor="bg-neutral-500 dark:bg-neutral-900"
        outerBgColor="bg-neutral-200 dark:bg-neutral-600"
        rounded="lg"
        size="sm"
      />
    </nav>
  );
}
