// components/DarkLightModeSwitch.tsx
import React from "react";
import { useTheme } from "next-themes";
import { DarkIcon, LightIcon } from "./Icons";
import AppButton from "./AppButton";

const DarkLightModeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <AppButton
      label=""
      variant="link"
      onClick={() => toggleTheme()}
      icon={theme === "dark" ? <DarkIcon /> : <LightIcon />}
    />
  );
};

export default DarkLightModeSwitch;
