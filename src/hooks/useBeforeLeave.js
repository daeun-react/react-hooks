import { useEffect } from "react";

export const useBeforeLeave = (msgFunc) => {
  const handle = (e) => {
    const { clientY } = e;
    if (clientY < 0) {
      msgFunc();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};
