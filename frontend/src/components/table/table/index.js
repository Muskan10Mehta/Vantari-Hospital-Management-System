import React from "react";

const Table = (props) => {
  return (
    <>
      <table className="w-5/6 text-gray-800 mt-6 mx-auto border-1 border-black">{props.chidlren}</table>
    </>
  );
};

export default Table;