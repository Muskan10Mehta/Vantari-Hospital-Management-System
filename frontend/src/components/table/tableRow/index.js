import React from "react";

export default function TableRow(props) {
  return (
    <tr className="text-left text-black border-b divide-x divide-black border-red-600">
      {props.children}
      {/* <td className="break-all px-4 py-3">{props.content}</td> */}
    </tr>
  );
}