"use client";

type RoundedOptions = "none" | "md" | "lg" | "xl" | "full";

export default function Switch({
  checked = false,
  handleCheck = () => {},
  size = "md",
  label,
  labelColor,
  LeftIcon,
  RightIcon,
  rounded,
  innerBgColor,
  outerBgColor,
  borderColor,
}: {
  checked?: boolean;
  handleCheck?: () => void;
  size?: "sm" | "md" | "lg";
  label?: string;
  labelColor?: string;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
  rounded?: RoundedOptions;
  innerBgColor?: string;
  outerBgColor?: string;
  borderColor?: string;
}) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    handleCheck();
  }

  const roundedOptions = {
    none: "rounded-none",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const roundedInnerOptions = {
    none: "rounded-none",
    md: checked ? "rounded-e-none" : "rounded-s-none",
    lg: checked ? "rounded-e-sm" : "rounded-s-sm",
    xl: checked ? "rounded-e-md" : "rounded-s-md",
    full: checked ? "rounded-e-xl" : "rounded-s-xl",
  };

  const roundedStyle = rounded ? roundedOptions[rounded] : "rounded";
  const roundedInnerStyle = rounded
    ? roundedInnerOptions[rounded]
    : "rounded-none";
  const innerBgColorStyle = innerBgColor ? innerBgColor : "bg-neutral-500";
  const outerBgColorStyle = outerBgColor ? outerBgColor : "bg-neutral-200";
  const borderStyle = borderColor ? borderColor : "border-neutral-500";
  const labelColorStyle = labelColor ? labelColor : "text-neutral-100";

  const sizeOptionsOuter = {
    sm: "w-20 h-8 border-[3px]",
    md: "w-28 h-10 border-4",
    lg: "w-40 h-14 border-[6px]",
  };

  const sizeOuter = sizeOptionsOuter[size];

  const sizeOptionsInner = {
    sm: ["w-10", checked ? "translate-x-9" : "translate-x-0"].join(" "),
    md: ["w-14", checked ? "translate-x-12" : "translate-x-0"].join(" "),
    lg: ["w-20", checked ? "translate-x-[70px]" : "translate-x-0"].join(" "),
  };

  const sizeInner = sizeOptionsInner[size];

  return (
    <button
      role="checkbox"
      aria-checked={checked}
      className={`${sizeOuter} ${borderStyle} relative flex items-center justify-around ${roundedStyle}  ${outerBgColorStyle} hover:cursor-pointer`}
      onClick={handleClick}
    >
      {LeftIcon && LeftIcon}
      {RightIcon && RightIcon}
      <div
        className={`absolute top-0 left-0 ${sizeInner} h-full ${innerBgColorStyle} ${labelColorStyle} flex items-center justify-center transition-all ${roundedInnerStyle}`}
      >
        {label}
      </div>
    </button>
  );
}
