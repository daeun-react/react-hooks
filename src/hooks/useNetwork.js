import { useEffect, useState } from "react";

export const useNetwork = () => {
  const [state, setState] = useState(navigator.onLine);

  const handle = () => {
    // console.log(navigator.onLine);
    setState(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("onLine", handle);
    window.addEventListener("offLine", handle);

    return () => {
      window.removeEventListener("onLine", handle);
      window.removeEventListener("offline", handle);
    };
  }, []);

  return state;
};
