import React from "react";

export default function TableHeading(props) {
  return (
    <thead>
      <tr className="text-center text-black border divide-x divide-black border-black">
        <th className="break-all px-4 py-3">{props.children}</th>
      </tr>
    </thead>
  );
}