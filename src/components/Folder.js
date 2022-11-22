import React, { useState } from "react";

export const Folder = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <>
      {data.isFolder ? (
        <div>
          <div onClick={() => handleExpand()}>{data.name} </div>
          {expand &&
            data.items.map((ele) => {
              return <Folder data={ele} />;
            })}
        </div>
      ) : (
        <div>{data.name}</div>
      )}
    </>
  );
};
