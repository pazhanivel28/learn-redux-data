import React from "react";
import { useSelector } from "react-redux";

function DataView() {
  const userData = useSelector((state) => state.addData.data);
  return (
    <div>
      {userData.map((value,index) => {
        return (
          <div key={value.email}>
           <div>{index+1}</div>
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
