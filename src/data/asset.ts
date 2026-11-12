// Public files respect the build base (GitHub Pages publishes under /<repo>/).
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return `${base}${path}`;
};
