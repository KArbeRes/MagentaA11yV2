type PathMap = {
  [oldPath: string]: string;
};

export const explicitPathMappings: PathMap = {
  "/web": "/web-criteria/component/overview",
  "/native": "/native-criteria/controls/overview",
  "/checklist-web/header": "/web-criteria/page-level/header-landmark",
  "/checklist-web/footer": "/web-criteria/page-level/footer-landmark",
};

type PatternMap = {
  pattern: RegExp;
  replacement: string | ((matches: RegExpMatchArray) => string);
};

export const patternPathMappings: PatternMap[] = [
  {
    pattern: /^\/checklist-web\/([^\/]+)\/?$/,
    replacement: (matches) => {
      const component = matches[1];
      const explicitPath = `/checklist-web/${component}`;
      if (explicitPathMappings[explicitPath]) {
        return explicitPathMappings[explicitPath];
      }
      return `/web-criteria/component/${component}`;
    },
  },

  {
    pattern: /^\/web\/component\/([^\/]+)\/?$/,
    replacement: (matches) => `/web-criteria/component/${matches[1]}`,
  },

  {
    pattern: /^\/native\/controls\/([^\/]+)\/?$/,
    replacement: (matches) => `/native-criteria/controls/${matches[1]}`,
  },
];

export function getRedirectPath(path: string): string | null {
  const normalizedPath = path.replace(/\/$/, "");

  if (explicitPathMappings[normalizedPath]) {
    return explicitPathMappings[normalizedPath];
  }

  for (const mapping of patternPathMappings) {
    const matches = normalizedPath.match(mapping.pattern);
    if (matches) {
      if (typeof mapping.replacement === "function") {
        return mapping.replacement(matches);
      }
      return mapping.replacement;
    }
  }

  return null;
}
