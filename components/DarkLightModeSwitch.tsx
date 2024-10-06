// components/DarkLightModeSwitch.tsx
import React from "react";
import { useTheme } from "next-themes";
import { DarkIcon, LightIcon } from "./Icons";
import Button from "./PixelBlock/Button";
import { Moon, Sun } from "lucide-react";

const DarkLightModeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost"  onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};

export default DarkLightModeSwitch;
