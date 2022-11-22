import React, { useState } from "react";

export const updatedComponent = (WrappedComponent, number) => {
  const EnhancedComponent = () => {
    const [counter, setCounter] = useState(0);
    const handleCounter = () => {
      setCounter(counter + number);
    };
    return <WrappedComponent counter={counter} handleCounter={handleCounter} />;
  };

  return EnhancedComponent;
};
