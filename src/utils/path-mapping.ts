/**
 * Path Mapping
 *
 * This file handles URL redirections for legacy paths in the MagentaA11y app.
 *
 * HOW TO ADD A NEW REDIRECT:
 *
 * Simply add a new entry to the explicitPathMappings object below:
 * "/your-old-path": "/your-new-path"
 *
 * Examples:
 * "/web": "/web-criteria/component/overview" - redirects /web to /web-criteria/component/overview
 *
 * After adding your redirect entry, no further code changes are needed - it will work automatically!
 */

type PathMap = {
  [oldPath: string]: string;
};

export const explicitPathMappings: PathMap = {
  "/web": "/web-criteria/component/overview",
  "/native": "/native-criteria/controls/overview",
  "/checklist-web/header": "/web-criteria/page-level/header-landmark",
  "/checklist-web/footer": "/web-criteria/page-level/footer-landmark",
};

export function getRedirectPath(path: string): string | null {
  const normalizedPath = path.replace(/\/$/, "");

  if (explicitPathMappings[normalizedPath]) {
    return explicitPathMappings[normalizedPath];
  }

  return null;
}
