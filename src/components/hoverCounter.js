import React from "react";
import { updatedComponent } from "./higherorder";

const HoverCounter = ({ counter, handleCounter }) => {
  return (
    <>
      <div onMouseEnter={() => handleCounter()}>{counter}</div>
    </>
  );
};
export default updatedComponent(HoverCounter, 10);
