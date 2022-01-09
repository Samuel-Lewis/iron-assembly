import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

export const withLocation = (WrappedComponent: React.FunctionComponent) => {
  const Wrapper: React.FC = (props) => {
    const location = useLocation();

    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};
