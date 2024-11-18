import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error("Caught by Error Boundary:", error);
      setHasError(true);
    };

    window.onerror = errorHandler;
    window.onunhandledrejection = (event) => errorHandler(event.reason);

    return () => {
      window.onerror = null;
      window.onunhandledrejection = null;
    };
  }, []);

  return hasError ? <h1>Something went wrong.</h1> : children;
};

export default ErrorBoundary;
