import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] =
    useState<{ width: number; height: number }>();

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth: width, innerHeight: height } = window;
      setWindowDimensions({ width, height });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
