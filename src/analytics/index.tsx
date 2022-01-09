import ReactGA from "react-ga4";

export { withLocation } from "./withLocation";

export const initAnalytics = () => {
  try {
    ReactGA.initialize(process.env.REACT_APP_GA_ID || "");
  } catch (err) {
    console.error("GA initialization failed", err);
  }
};
