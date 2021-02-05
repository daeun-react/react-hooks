import { useEffect, useState } from "react";

export const useTitle = (text) => {
  const [title, setTitle] = useState(text);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
