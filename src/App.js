import React, { useEffect, useRef, useState } from "react";
import { useAxios } from "./hooks/useAxios";
import { useBeforeLeave } from "./hooks/useBeforeLeave";
import { useConfirm } from "./hooks/useConfirm";
import { useFadeIn } from "./hooks/useFadeIn";
import { useHover } from "./hooks/useHover";
import { useInput } from "./hooks/useInput";
import { useNetwork } from "./hooks/useNetwork";
import { useScroll } from "./hooks/useScroll";
import { contents, useTabs } from "./hooks/useTabs";
import { useTitle } from "./hooks/useTitle";

function App() {
  const validator = (value) => !value.includes("@");
  const inputs = useInput("", validator);
  const { currentItem, changeItem } = useTabs(0, contents);
  const setTitle = useTitle("");
  const hover = useHover(() => console.log("useHover..."));
  const confirm = () => console.log("ok...");
  const cancel = () => console.log("no...");
  const confirmDelete = useConfirm("Are you sure?", confirm, cancel);
  const msgFunc = () => {
    console.log("useBeforLeave...");
  };
  const useBefore = useBeforeLeave(msgFunc);
  const fadeIn = useFadeIn();
  const isOnLine = useNetwork();
  const { x, y } = useScroll();
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json",
  });

  return (
    <>
      <h1>React Hooks</h1>

      {/* useInput */}
      <div
        style={{ border: `3px dashed gray`, padding: `10px`, margin: `10px` }}
      >
        <h2>1.useInput</h2>
        <input placeholder="조건에 따라 input 작성" {...inputs.props} />
      </div>

      {/* useTabs */}
      <div
        style={{ border: `3px dashed gray`, padding: `10px`, margin: `10px` }}
      >
        <h2>2. useTabs</h2>
        {contents.map((content, idx) => (
          <button onClick={() => changeItem(idx)} key={content.id}>
            {content.tab}
          </button>
        ))}
        <div>{currentItem.content}</div>
      </div>

      {/* useTitle */}
      <div
        style={{ border: `3px dashed gray`, padding: `10px`, margin: `10px` }}
      >
        <h2>3.useTitle</h2>
        <button onClick={() => setTitle("변경!!")}>변경</button>
      </div>

      {/* useHover */}
      <div
        style={{ border: `3px dashed gray`, padding: `10px`, margin: `10px` }}
      >
        <h2>4.useHover</h2>
        <div ref={hover}>
          해당 텍스트에 hover하시면 이벤트가 발생합니다. (console.log)
        </div>
      </div>

      {/* useConfirm */}
      <div
        style={{ border: `3px dashed gray`, padding: `10px`, margin: `10px` }}
      >
        <h2>5.useConfirm</h2>
        <button onClick={confirmDelete}>Delete the world</button>
      </div>

      {/* useConfirm */}
      <div
        style={{ border: `3px dashed gray`, padding: `10px`, margin: `10px` }}
      >
        <h2>5.useConfirm</h2>
        <button onClick={confirmDelete}>Delete the world</button>
      </div>

      {/* useBeforeLeave */}
      <div
        style={{ border: `3px dashed gray`, padding: `10px`, margin: `10px` }}
      >
        <h2>6.useBeforeLeave</h2>
      </div>

      {/* useFadeIn */}
      <div
        style={{ border: `3px dashed gray`, padding: `10px`, margin: `10px` }}
      >
        <h2 {...fadeIn}>7.useFadeIn</h2>
      </div>
      {/* useNetwork */}
      <div
        style={{ border: `3px dashed gray`, padding: `10px`, margin: `10px` }}
      >
        <h2>8.useNetwork</h2>
        <div>{isOnLine ? "OnLine" : "OffLine"}</div>
      </div>

      {/* useScroll */}
      <div
        style={{ border: `3px dashed gray`, padding: `10px`, margin: `10px` }}
      >
        <h2>9.useScroll</h2>
        <div style={{ color: y > 500 ? "red" : "blue" }}>
          Scroll Color Change!
        </div>
      </div>

      {/* useAxios */}
      <div
        style={{ border: `3px dashed gray`, padding: `10px`, margin: `10px` }}
      >
        <h2>10.useAxios</h2>
        <button onClick={refetch}>refetch</button>
      </div>
    </>
  );
}

export default App;
