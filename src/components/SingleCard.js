/* this is one bootstrap card to be mapped in dashboard */
import React, { Component } from "react";
import { ContextConsumer } from "../context";
import {
  ProductWrapper,
  SpanWrapper,
  LocationWrapper
} from "./StyledComponent";
import { Link } from "react-router-dom";

export default class SingleCard extends Component {
  render() {
    const {
      id,
      title,
      img,
      price,
      inCart,
      year,
      location,
      sale
    } = this.props.carInfo;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          <ContextConsumer>
            {contextValue => (
              <div
                className="img-container p-3 "
                onClick={() => contextValue.handleDetail(id)}
              >
                {/* passing the props of sale in styled component so as to show 'sale' and change color */}
                {sale ? (
                  <SpanWrapper sale>
                    <span className="card-notify-year">sale</span>
                  </SpanWrapper>
                ) : (
                    <SpanWrapper>
                      <span className="card-notify-year">{year}</span>
                    </SpanWrapper>
                  )}
                {sale ? (
                  <LocationWrapper sale>{location}</LocationWrapper>
                ) : (
                    <LocationWrapper>{location}</LocationWrapper>
                  )}

                <Link to="/details">
                  <img src={img} alt={title} className="card-img-top" />

                  {inCart ? (
                    <button className="cart-btn">
                      <p>Reserved</p>
                    </button>
                  ) : (
                      <button
                        className="cart-btn"
                        onClick={() => {
                          contextValue.addToCart(id);
                        }}
                      >
                        <i className="fas fa-cart-plus" />
                      </button>
                    )}
                </Link>
              </div>
            )}
          </ContextConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">€</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
