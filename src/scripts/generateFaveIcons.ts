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
  background: "#FFFFFF",
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
    const publicDir: string = path.resolve(__dirname, "../../public");
    const manifestPath = path.join(publicDir, "manifest.json");

    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

    const response: FaviconResponse = await favicons(logoPath, config);

    // Save generated assets directly in the public directory
    response.images.forEach((image) => {
      fs.writeFileSync(path.join(publicDir, image.name), image.contents);
    });

    // Merge existing manifest with the generated one
    let existingManifest: any = {};
    if (fs.existsSync(manifestPath)) {
      existingManifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
    }

    const generatedManifest = JSON.parse(
      response.files
        .find((file) => file.name === "manifest.webmanifest")!
        .contents.toString()
    );

    // Preserve custom fields from the existing manifest
    const mergedManifest = {
      ...generatedManifest,
      start_url: existingManifest.start_url || "/",
      screenshots: existingManifest.screenshots || [],
    };

    // Write the merged manifest back to the file
    fs.writeFileSync(manifestPath, JSON.stringify(mergedManifest, null, 2));
    console.log("Manifest file updated with preserved custom fields!");

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
