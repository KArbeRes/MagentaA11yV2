import { Location } from 'react-router-dom';

/**
 * Checks if the given path is active based on the current location.
 *
 * @param path - The path to check.
 * @param location - The current location object.
 * @returns `true` if the path is active, otherwise `false`.
 */
export const isPathActive = (path: string, location: Location): boolean => {
  const isActive = location.pathname.includes(path);
  return isActive;
};
