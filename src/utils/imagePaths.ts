// Utility function to get correct image paths for both development and production
export const getImagePath = (path: string): string => {
  const base = import.meta.env.PROD ? '/aawa.in' : '';
  return `${base}${path}`;
};
