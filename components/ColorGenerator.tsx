import { useState, useEffect } from "react";
import chroma from "chroma-js";
import { ColorPalette } from "@/types/colorTypes";
import { colorPalette } from "@/colorPalette";
import InputField from "./PixelBlock/InputField";
import Button from "./PixelBlock/Button";
import { HexColorPicker } from "react-colorful";
import { IconDownload } from "@/utils/Icons";

type ColorType =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

const ColorGenerator = () => {
  const [activeColor, setActiveColor] = useState<ColorType>("primary");
  const [userColors, setUserColors] = useState<ColorPalette>(colorPalette);
  const [showColorPicker, setShowColorPicker] = useState(false); // State for color picker visibility

  const [generatedColors, setGeneratedColors] = useState<
    Record<string, Record<string, string>>
  >({
    primary: {},
    secondary: {},
    info: {},
    success: {},
    warning: {},
    error: {},
  });

  // Generate colors based on active color
  useEffect(() => {
    generateColors(userColors[activeColor], activeColor);
  }, [userColors, activeColor]);

  useEffect(() => {
    Object.keys(userColors).forEach((colorType) => {
      generateColors(userColors[colorType as ColorType], colorType);
    });
  }, [userColors]);

  const generateColors = (color: string, type: string) => {
    const scales = {
      50: chroma(color).brighten(2).hex(),
      100: chroma(color).brighten(1.5).hex(),
      200: chroma(color).brighten(1).hex(),
      300: chroma(color).brighten(0.5).hex(),
      400: chroma(color).brighten(0.2).hex(),
      500: chroma(color).hex(),
      600: chroma(color).darken(0.2).hex(),
      700: chroma(color).darken(0.5).hex(),
      800: chroma(color).darken(1).hex(),
      900: chroma(color).darken(1.5).hex(),
      950: chroma(color).darken(2).hex(),
    };

    setGeneratedColors((prevColors) => ({
      ...prevColors,
      [type]: scales, // Update the correct type with generated scales
    }));

    updateCSSVariables(scales, type);
  };

  const updateCSSVariables = (colors: Record<string, string>, type: string) => {
    const root = document.documentElement;
    Object.keys(colors).forEach((key) => {
      root.style.setProperty(`--color-${type}-${key}`, colors[key]);
    });
  };

  // Color swatch component to display color and set active color
  const ColorSwatch = ({ type, color }: { type: ColorType; color: string }) => (
    <div className="flex items-center space-x-2 w-full">
      <div
        className="min-w-6 min-h-6 rounded-full cursor-pointer"
        style={{ backgroundColor: color }}
        onClick={() => setActiveColor(type)} // Set the active color when clicking the swatch
      />
      <span className="text-sm font-medium ">{type}</span>
    </div>
  );

  const updateColor = (color: string) => {
    // Update color for the active color
    setUserColors((prevColors) => ({
      ...prevColors,
      [activeColor]: color,
    }));
  };

  const closeColorPicker = () => {
    setShowColorPicker(false); // Close the color picker
  };

  const downloadConfig = () => {
    const config = `
    module.exports = {
      theme: {
        extend: {
          colors: ${JSON.stringify(generatedColors, null, 2)},
        },
      },
    };
    `;

    const blob = new Blob([config], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tailwind.config.js";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white dark:bg-zinc-900/10 rounded-lg border dark:border-white/10 text-card-foreground shadow-sm h-full w-full">
      <div className="flex flex-col space-y-1.5 p-6">
        <h2 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          Color Generator
        </h2>
        <p className="text-sm text-muted-foreground">
          Generate and export Tailwind color patterns.
        </p>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
              <ColorSwatch type="primary" color={userColors.primary} />
              <ColorSwatch type="secondary" color={userColors.secondary} />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">State Colors</h3>
            <div className="grid grid-cols-2 gap-5">
              <ColorSwatch type="info" color={userColors.info} />
              <ColorSwatch type="success" color={userColors.success} />
              <ColorSwatch type="warning" color={userColors.warning} />
              <ColorSwatch type="error" color={userColors.error} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <h3 className="text-sm font-semibold">Color Picker</h3>
          <div className="grid gap-5">
            <div className="flex space-x-2">
              <div className="relative w-full z-40">
                <div className="flex gap-2">
                  <div className="w-full">
                    <InputField
                      type="text"
                      value={userColors[activeColor]} // Input for active color
                      onChange={(e) => updateColor(e.target.value)}
                      onFocus={() => setShowColorPicker(true)} // Show color picker on focus
                    />
                  </div>
                  <div
                    className="w-12  border rounded-md"
                    style={{ backgroundColor: userColors[activeColor] }}
                  ></div>
                </div>
                {showColorPicker && (
                  <div className="absolute flex flex-col gap-4 top-full mt-1 z-10 bg-white rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out">
                    <HexColorPicker
                      color={userColors[activeColor]} // Display picker for active color
                      onChange={updateColor}
                    />
                    <button
                      onClick={closeColorPicker}
                      className="bg-black text-white rounded py-2"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <Button
            onClick={downloadConfig}
            color="secondary"
            icon={<IconDownload className={"h-5 w-5"} />}
            disabled={!Object.keys(generatedColors).length}
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ColorGenerator;
