// components/DarkLightModeSwitch.tsx
import React from "react";
import { useTheme } from "next-themes";
import { DarkIcon, LightIcon } from "./Icons";
import Button from "./PixelBlock/Button";

const DarkLightModeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="link"
      onClick={() => toggleTheme()}
      icon={theme === "dark" ? <DarkIcon /> : <LightIcon />}
    />
  );
};

export default DarkLightModeSwitch;
