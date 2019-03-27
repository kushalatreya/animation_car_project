import React from "react";
import { Link } from "react-router-dom";
/* import PayPalButton from "./PayPalButton";
 */
export default function TotalPrice({ totalPriceProps }) {
  const { carSubTotal, carTax, carTotal, clearCart } = totalPriceProps;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8  text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span> subtotal :</span> <strong>$ {carSubTotal} </strong>
            </h5>
            <h5>
              <span> tax :</span> <strong>$ {carTax} </strong>
              <hr />
            </h5>
            <h5>
              <span> total :</span> <strong>$ {carTotal} </strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
