import React from "react";
import { useSelector } from "react-redux";

function DataView() {
  const userData = useSelector((state) => state.addData.data);
  return (
    <div>
      {userData.map((value) => {
        return (
          <div key={value.email}>
            <div>{value.name}</div>
            <div>{value.email}</div>
            <div>{value.age}</div>
          </div>
        );
      })}
    </div>
  );
}
export default DataView;
