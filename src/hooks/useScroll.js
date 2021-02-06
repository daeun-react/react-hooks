import { useEffect, useState } from "react";

export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const handle = () => {
    setState({
      x: window.scrollX,
      y: window.scrollY,
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handle);
    return () => {
      window.addEventListener("scroll", handle);
    };
  }, []);

  return state;
};
