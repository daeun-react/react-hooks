import React, { useEffect, useRef, useState } from "react";
import { useHover } from "./hooks/useHover";
import { useInput } from "./hooks/useInput";
import { contents, useTabs } from "./hooks/useTabs";
import { useTitle } from "./hooks/useTitle";

function App() {
  const validator = (value) => !value.includes("@");
  const inputs = useInput("", validator);
  const { currentItem, changeItem } = useTabs(0, contents);
  const setTitle = useTitle("");
  const hover = useHover(() => console.log("a"));

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
      </div>
    </>
  );
}

export default App;
