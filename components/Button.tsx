// components/Button.tsx

import React from "react";
import Link from "next/link";

interface ButtonProps {
  label?: string;
  size?: "small" | "medium" | "large";
  textColor?: string;
  variant?: "primary" | "secondary" | "white" | "outline" | "link";
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  className?: string; // Change from customClass to className
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  variant = "primary",
  onClick,
  href,
  icon,
  className, // Change from customClass to className
}) => {
  const buttonSizeClasses = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-6 py-2",
    large: `text-base py-3 font-bold ${icon ? "px-6" : "px-11"}`,
  };

  const buttonVariantClasses = {
    primary:
      "bg-pxPrimary text-white hover:shadow-none shadow-Button hover:bg-opacity-90 focus:shadow-none focus:bg-pxPrimary border-pxPrimary",
    secondary:
      "hover:shadow-Button border-pxPrimary lg:border-transparent lg:text-pxBlack text-pxPrimary",
    white: "border-none text-pxBlack bg-white",
    link: "border-none !p-0",
    outline:
      "dark:border-zinc-800 border-zinc-400 text-zinc-400 hover:border-zinc-800 hover:text-zinc-800 font-semibold dark:text-zinc-400  dark:hover:text-zinc-50 dark:hover:border-zinc-200 border-2  ",
  };

  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`${buttonSizeClasses[size]} ${buttonVariantClasses[variant]} disabled:bg-Grey flex w-full items-center justify-center rounded-md border transition duration-300 ease-in-out ${className}`} // Changed from customClass to className
        >
          {icon && <span className="mr-2">{icon}</span>}
          {label}
        </Link>
      ) : (
        <button
          type="button"
          className={`flex items-center ${buttonSizeClasses[size]} ${buttonVariantClasses[variant]} flex w-full items-center justify-center rounded-md border transition duration-300 ease-in-out ${className}`} // Changed from customClass to className
          onClick={onClick}
        >
          {icon && <span className={label ? "mr-2" : ""}>{icon}</span>}
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
