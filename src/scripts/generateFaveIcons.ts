import favicons, { FaviconOptions, FaviconResponse } from "favicons";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration options
const config: FaviconOptions = {
  path: "",
  appName: "MagentaA11y",
  appShortName: "MagentaA11y",
  appDescription:
    "MagentaA11y is a tool built to simplify the process of accessibility testing.",
  developerName: "Kevin Arbelaez",
  developerURL: "https://www.linkedin.com/in/kevin-arbelaez/",
  background: "#040f12",
  theme_color: "#f6288f",
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    favicons: true,
    windows: true,
    yandex: false,
  },
};

// Path to your SVG
const logoPath: string = path.resolve(
  __dirname,
  "../assets/svgs/brand-logo-black.svg"
);

const generateFavicons = async () => {
  try {
    // Set the output directory to the public folder
    const publicDir: string = path.resolve(__dirname, "../../public");

    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

    const response: FaviconResponse = await favicons(logoPath, config);

    // Save generated assets directly in the public directory
    response.images.forEach((image) => {
      fs.writeFileSync(path.join(publicDir, image.name), image.contents);
    });

    response.files.forEach((file) => {
      const destination =
        file.name === "manifest.webmanifest"
          ? path.join(publicDir, "manifest.json") // Rename manifest.webmanifest to manifest.json
          : path.join(publicDir, file.name);
      fs.writeFileSync(destination, file.contents);
    });

    // Save the generated HTML tags
    fs.writeFileSync(
      path.join(publicDir, "meta-tags.html"),
      response.html.join("\n")
    );

    console.log("Favicons generated successfully in the public directory!");
  } catch (error) {
    console.error("Error generating favicons:", (error as Error).message);
  }
};

// Call the function
generateFavicons();
