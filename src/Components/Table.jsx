import React from "react";

const Table = () => {
  const title = ["id", "image", "category", "action"];

  return (
    <>
      {/* table container */}
      <div className="w-full">
        {/* head */}
        <div className="flex flex-row gap-5 justify-between">
          {title.map((value, key) => (
            <span key={key}>{value}</span>
          ))}
        </div>
        {/* body */}
        <div></div>
      </div>
    </>
  );
};

export default Table;
