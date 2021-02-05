import { useState } from "react";

export const contents = [
  {
    id: 1,
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    id: 2,
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
