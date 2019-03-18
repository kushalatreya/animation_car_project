import React from "react";
import Title from "../Title";
import ReservedCarList from "./ReservedCar";
import Extras from "./Extras";

import { ContextConsumer } from "../../context";

export default function Reservation() {
  return (
    <React.Fragment>
      <ContextConsumer>
        {contextValue => {
          const { cart } = contextValue;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <Title name="your" title="cart" />
                <ReservedCarList />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <Title name="Empty" title="cart" />;
                <Extras />
              </React.Fragment>
            );
          }
        }}
      </ContextConsumer>
    </React.Fragment>
  );
}
