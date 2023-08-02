"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Clipboard from "@/components/Clipboard/Clipboard";
import Switch from "@/components/Switch/Switch";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const borderColor = (state: boolean) => {
  if (state) return "border-green-400 dark:border-green-600";
  return "border-neutral-400 dark:border-neutral-700";
};

const innerBgColor = (state: boolean) => {
  if (state) return "bg-green-400 dark:bg-green-600";
  return "bg-neutral-400 dark:bg-neutral-700";
};

const outerBgColor = (state: boolean) => {
  if (state) return "bg-green-200 dark:bg-green-300";
  return "bg-neutral-300 dark:bg-neutral-500";
};

export default function Home() {
  const [passwordLength, setPasswordLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const [password, setPassword] = useState<string | null>(null);
  const [loadingPassword, setLoadingPassword] = useState(false);

  function notify() {
    toast.success("Copied to clipboard!");
  }

  const optionStyles =
    "flex justify-between items-center gap-2 xs:gap-6 w-64 xs:w-80 text-base xs:text-md bg-neutral-300 dark:bg-neutral-800 p-2 rounded-lg font-semibold text-neutral-800 dark:text-neutral-100";

  const BOOLEAN_OPTIONS = [
    {
      name: "Include Uppercase",
      state: includeUppercase,
      setState: setIncludeUppercase,
    },
    {
      name: "Include Lowercase",
      state: includeLowercase,
      setState: setIncludeLowercase,
    },
    {
      name: "Include Numbers",
      state: includeNumbers,
      setState: setIncludeNumbers,
    },
    {
      name: "Include Symbols",
      state: includeSymbols,
      setState: setIncludeSymbols,
    },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const options = {
      length: passwordLength,
      uppercase: includeUppercase,
      lowercase: includeLowercase,
      numbers: includeNumbers,
      symbols: includeSymbols,
    };
    setLoadingPassword(true);
    fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    })
      .then(async (res) => {
        if (res.status !== 200) {
          console.log(res);
          const data = await res.json();
          if (data?.error) {
            throw new Error(data.error);
          } else {
            throw new Error("Something went wrong!");
          }
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data?.password) setPassword(data.password);
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      })
      .finally(() => {
        setLoadingPassword(false);
      });
  }

  const clipboardProps: { handleClick: () => void; text?: string } = {
    handleClick: notify,
  };

  if (password) {
    clipboardProps.text = password;
  }

  return (
    <div className="min-h-full min-w-full pt-20 flex flex-col items-center justify-between">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 p-4 xs:p-6 rounded-lg min-w-fit bg-neutral-200 dark:bg-neutral-700"
      >
        <Clipboard {...clipboardProps} />
        <label
          htmlFor="password-length"
          style={{ marginTop: 20 }}
          className="text-base xs:text-md"
        >
          Password Length: {passwordLength}
        </label>
        <div
          className={
            "flex justify-between items-center gap-2 w-64 xs:w-80 text-base xs:text-md bg-neutral-300 dark:bg-neutral-800 p-2 rounded-lg font-semibold text-neutral-800 dark:text-neutral-100"
          }
        >
          <span>4</span>
          <input
            id="password-length"
            type="range"
            min={4}
            max={32}
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            className="py-3 w-full cursor-pointer focus:outline-neutral-700 dark:focus:outline-neutral-400 accent-green-400 dark:accent-green-600"
          />
          <span>32</span>
        </div>

        {BOOLEAN_OPTIONS.map((option) => (
          <div className={optionStyles} key={option.name}>
            <span>{option.name}</span>
            <Switch
              checked={option.state}
              handleCheck={() => option.setState(!option.state)}
              borderColor={borderColor(option.state)}
              innerBgColor={innerBgColor(option.state)}
              outerBgColor={outerBgColor(option.state)}
              size="sm"
            />
          </div>
        ))}

        <button
          className={`flex items-center justify-center max-h-10 w-full mt-4 py-3 rounded-lg font-bold text-base xs:text-md text-neutral-600 hover:text-neutral-100 dark:text-neutral-100 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-800 hover:dark:bg-neutral-600 transition-colors duration-200 ${
            loadingPassword && "cursor-not-allowed opacity-50"
          }`}
          type="submit"
          disabled={loadingPassword}
        >
          {loadingPassword ? (
            <AiOutlineLoading3Quarters size={25} className="animate-spin" />
          ) : (
            <span>Generate Password</span>
          )}
        </button>
      </form>
    </div>
  );
}
