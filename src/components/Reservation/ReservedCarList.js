import React from "react";
import ReservedCar from "./ReservedCar";

export default function ReservedCarList({ contextValueProps }) {
  console.log(contextValueProps);
  return (
    <div>
      {contextValueProps.cart.map(element => {
        return (
          <ReservedCar
            key={element.id}
            element={element}
            value={contextValueProps}
          />
        );
      })}
    </div>
  );
}
/* const newItem  = oldItem.map((element)=>{
  element.id
}) */
