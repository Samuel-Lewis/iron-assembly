import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export const withLocation = (WrappedComponent: React.FunctionComponent) => {
  const Wrapper: React.FC = (props) => {
    const location = useLocation();

    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: location });
    }, [location]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};
