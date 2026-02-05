import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  const [showText, setShowText] = useState("");
  return (
    <div>
      <input
        className="border"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="border ml-3" onClick={() => setShowText(text)}>
        Click me
      </button>
      <p>{text} </p>
      <p>{showText} </p>
      <button
        className="border ml-3"
        onClick={() => {
          setText("");
          setShowText("");
        }}
      >
        {" "}
        clear{" "}
      </button>
    </div>
  );
};

export default Input;
