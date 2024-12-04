import { useEffect, useState, useRef } from "react";

const Throttle = () => {
  const [scrollY, setScrollY] = useState(0);
  const throttleTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!throttleTimeout.current) {
        throttleTimeout.current = setTimeout(() => {
          setScrollY(window.scrollY);
          console.log("Scroll Y Position:", window.scrollY);
          throttleTimeout.current = null;
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, []);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <h1>Scroll Down</h1>
      <p>Current Scroll Y: {scrollY}</p>
    </div>
  );
};

export default Throttle;
