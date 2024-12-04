import { useEffect, useState } from "react";

const NoThrottle = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log("Scroll Y Position:", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <h1>Scroll Down</h1>
      <p>Current Scroll Y: {scrollY}</p>
    </div>
  );
};

export default NoThrottle;
