import { Route, routes } from "./routes";
import { SITE_CONFIG } from "./site-config";

/**
 * This method return the server URL based on the environment.
 */
export const getServerUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  // If we are in production, we return the production URL.
  if (process.env.VERCEL_ENV === "production") {
    return SITE_CONFIG.productionUrl;
  }

  // If we are in "stage" environment, we return the staging URL.
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}/`;
  }

  // If we are in development, we return the localhost URL.
  return "http://localhost:3000/";
};

export const getRouteUrl = (route: Route) => {
  return `${getServerUrl()}${routes[route]}`;
};
