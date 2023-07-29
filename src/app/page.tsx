"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Clipboard from "@/components/Clipboard/Clipboard";
import Switch from "@/components/Switch/Switch";

export default function Home() {
  const [passwordLength, setPasswordLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const [password, setPassword] = useState<string | null>(null);

  function notify() {
    toast.success("Copied to clipboard!");
  }

  const optionStyles =
    "flex justify-between items-center gap-6 w-80 bg-neutral-300 dark:bg-neutral-800 p-2 rounded-lg font-semibold text-neutral-800 dark:text-neutral-100";

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const options = {
      length: passwordLength,
      uppercase: includeUppercase,
      lowercase: includeLowercase,
      numbers: includeNumbers,
      symbols: includeSymbols,
    };
    fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.password) setPassword(data.password);
      })
      .catch((err) => console.error(err));
  }

  const clipboardProps: { handleClick: () => void; text?: string } = {
    handleClick: notify,
  };

  if (password) {
    clipboardProps.text = password;
  }

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 p-6 rounded-lg min-w-fit bg-neutral-200 dark:bg-neutral-700"
      >
        <Clipboard {...clipboardProps} />
        <div className={optionStyles} style={{ marginTop: 30 }}>
          <span>Password Length</span>
          <input
            type="number"
            min={1}
            max={128}
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            className="py-1 px-2 rounded w-20 border-[3px] border-neutral-400 dark:border-neutral-700 text-neutral-600 dark:text-neutral-100 bg-neutral-200 dark:bg-neutral-600 focus:outline-neutral-700 dark:focus:outline-neutral-400"
          />
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
          className="w-full mt-4 py-3 rounded-lg font-bold text-neutral-600 hover:text-neutral-100 dark:text-neutral-100 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-800 hover:dark:bg-neutral-600 transition-colors duration-200"
          type="submit"
        >
          Generate Password
        </button>
      </form>
    </div>
  );
}
