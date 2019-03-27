import React from "react";
import { ButtonWrapper } from "../StyledComponent";

export default function ReservedCar({ element, value }) {
  const { id, title, img, price, total, count } = element;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-4 text-center text-capitalize">
      <div className="col-10 mx-auto col lg-2">
        <img src={img} alt="car" className="img-fluid" />
      </div>
      <div className="col-10 mx-auto col lg-2">
        <strong>{title}</strong>
      </div>
      <div className="col-10 mx-auto col lg-2">
        <span>Price: € </span>
        {price} / day
      </div>
      <div className="col-10 mx-auto col lg-2">
        <ButtonWrapper className="btn mx-1" onClick={() => decrement(id)}>
          &darr;
        </ButtonWrapper>
        <span>{count} Days</span>
        <ButtonWrapper className="btn mx-1" onClick={() => increment(id)}>
          &uarr;
        </ButtonWrapper>
      </div>

      <div className="col-10 mx-auto col lg-2">
        <strong>item total : € {total}</strong>
      </div>
      <div className="col-10 mx-auto col lg-2">
        <ButtonWrapper onClick={() => removeItem(id)} className="m-1">
          {" "}
          <i className="fas fa-trash" />
        </ButtonWrapper>
      </div>
    </div>
  );
}

/* style={{ width: "15rem", height: "15rem" }} */
