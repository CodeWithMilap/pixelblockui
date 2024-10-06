import { useState, useEffect } from "react";
import chroma from "chroma-js";
import { ColorPalette } from "@/types/colorTypes";
import { colorPalette } from "@/colorPalette";
import InputField from "./PixelBlock/InputField";
import Button from "./PixelBlock/Button";
import { HexColorPicker } from "react-colorful";

type ColorType =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

const ColorGenerator = () => {
  const [baseColors, setBaseColors] = useState<{ [key: string]: string }>({
    primary: "#185cff",
    secondary: "#E84E88",
  });
  const [activeColor, setActiveColor] = useState<ColorType>("primary");
  const [userColors, setUserColors] = useState<ColorPalette>(colorPalette);
  const [showColorPicker, setShowColorPicker] = useState(false); // New state for the color picker visibility

  const [generatedColors, setGeneratedColors] = useState<
    Record<string, Record<string, string>>
  >({
    primary: {},
    secondary: {},
  });
  const [newColorName, setNewColorName] = useState<string>("");

  useEffect(() => {
    Object.keys(baseColors).forEach((type) => {
      generateColors(baseColors[type], type);
    });
  }, [baseColors]);

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
      [type]: scales,
    }));

    updateCSSVariables(scales, type);
  };

  const updateCSSVariables = (colors: Record<string, string>, type: string) => {
    const root = document.documentElement;
    Object.keys(colors).forEach((key) => {
      root.style.setProperty(`--color-${type}-${key}`, colors[key]);
    });
  };

  const ColorSwatch = ({ type, color }: { type: ColorType; color: string }) => (
    <div className="flex items-center space-x-2 w-full">
      <div
        className="w-6 h-6 rounded-full cursor-pointer"
        style={{ backgroundColor: color }}
        onClick={() => setActiveColor(type)}
      />
      <span className="text-sm font-medium ">{type}</span>
    </div>
  );

  const handleColorChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const color = e.target.value;
    setBaseColors((prev) => ({
      ...prev,
      [type]: color,
    }));
  };

  const addNewColorScheme = () => {
    if (!newColorName) {
      alert("Please enter a name for the new color scheme.");
      return;
    }
    if (baseColors[newColorName]) {
      alert("Color scheme name must be unique.");
      return;
    }
    setBaseColors((prev) => ({
      ...prev,
      [newColorName]: "#000000", // default color for new scheme
    }));
    setNewColorName("");
  };

  const removeColorScheme = (type: string) => {
    setBaseColors((prev) => {
      const newColors = { ...prev };
      delete newColors[type];
      return newColors;
    });
    setGeneratedColors((prev) => {
      const newGeneratedColors = { ...prev };
      delete newGeneratedColors[type];
      return newGeneratedColors;
    });
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

  const updateColor = (color: string) => {
    setUserColors((prevColors) => ({ ...prevColors, [activeColor]: color }));
    document.documentElement.style.setProperty(`--color-${activeColor}`, color);
  };

  const closeColorPicker = () => {
    setShowColorPicker(false); // Close the color picker
  };

  return (
    <div>
      <h2>Generate Colors</h2>
      <ColorSwatch type="primary" color={userColors.primary} />

      {Object.keys(baseColors).map((type) => (
        <div key={type}>
          <input
            type="color"
            value={baseColors[type]}
            onChange={(e) => handleColorChange(e, type)}
          />
          <label> {type.charAt(0).toUpperCase() + type.slice(1)} Color</label>
          <button onClick={() => removeColorScheme(type)}>Remove</button>

          {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {Object.entries(generatedColors[type] || {}).map(([key, value]) => (
              <div key={key} style={{ width: "80px", textAlign: "center" }}>
                <div
                  style={{
                    backgroundColor: value,
                    width: "100%",
                    height: "50px",
                    borderRadius: "8px",
                    marginBottom: "5px",
                  }}
                />
                <span>
                  {key}: {value}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      ))}

      <div className="flex flex-col gap-3">
        <div className="">
          <h3 className="text-xl font-semibold ">Color Picker</h3>
        </div>
        <div className="grid gap-5">
          <div className="flex space-x-2">
            <div className="relative">
              <InputField
                type="text"
                value={userColors[activeColor]}
                onChange={(e) => updateColor(e.target.value)}
                onFocus={() => setShowColorPicker(true)} // Show color picker on focus
              />
              {showColorPicker && (
                <div className="absolute flex flex-col gap-4 top-full mt-1 z-10 bg-white rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out">
                  <HexColorPicker
                    color={userColors[activeColor]}
                    onChange={updateColor}
                  />
                  <button
                    onClick={closeColorPicker} // Close button for color picker
                    className="bg-black text-white rounded py-2"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
            <Button
              onClick={() =>
                navigator.clipboard.writeText(userColors[activeColor])
              }
              variant="outline"
              color="primary"
            >
              Copy
            </Button>
          </div>
        </div>
      </div>

      {/* <div>
        <input
          type="text"
          value={newColorName}
          onChange={(e) => setNewColorName(e.target.value)}
          placeholder="Enter new color name"
        />
        <button
          onClick={addNewColorScheme}
          className="bg-green-500 text-white p-2 m-2"
        >
          Add New Color Scheme
        </button>
      </div> */}

      <button
        onClick={downloadConfig}
        disabled={!Object.keys(generatedColors).length}
        className="bg-primary-500 text-white p-4"
      >
        Download Tailwind Config
      </button>
    </div>
  );
};

export default ColorGenerator;
