import React from "react";
import { updatedComponent } from "./higherorder";
const ClickedCounter = ({ counter, handleCounter }) => {
  return <div onClick={() => handleCounter()}>{counter}</div>;
};

export default updatedComponent(ClickedCounter, 5);
