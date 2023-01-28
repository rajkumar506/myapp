import React, { useState, useCallback } from "react";

export const Form = () => {
  const [fromText, setFormText] = useState("");
  const [count, setCount] = useState(0);
  const handleFormText = (event) => {
    // console.log("hello i am running");
    setFormText(event.target.value);
  };
  const helloword = () => {
    console.log("hello");
  };

  const throttling = (fxn, delay) => {
    let flag = true;
    return function () {
      if (flag) {
        fxn();
        flag = false;
        setTimeout(() => {
          flag = true;
        }, delay);
      }
    };
  };
  const debounce = (fxn, delay) => {
    let timer;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fxn();
      }, delay);
    };
  };
  const handleCount = () => {
    setCount(count + 1);
  };
    const returnedDebounce = useCallback(debounce(helloword, 2000), []);
  // const returnedDebounce = useCallback(throttling(helloword, 2000), []);
  return (
    <>
      <input
        type="string"
        placeholder="type"
        value={fromText}
        onKeyUp={(event) => {
          returnedDebounce(fromText);
        }}
        onChange={(event) => handleFormText(event)}
      />
      <button onClick={() => handleCount()}>count{count}</button>
    </>
  );
};
