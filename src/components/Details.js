import React, { Component } from "react";
import { ContextConsumer } from "../context"; 
import { Link } from "react-router-dom";
import { ButtonWrapper } from "./StyledComponent";

export default class Details extends Component {
  render() {
    return (
      <ContextConsumer>
        {contextValue => {
          const {
            id,
            title,
            img,
            company,
            price,
            info,
            inCart,
            year,
            location,
            sale
          } = contextValue.detailProduct;
          return (
            <div className="container py-3 ">
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue my-3">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <h3>
                    {" "}
                    <u>
                      {" "}
                      Company: {company} , {year}
                    </u>
                  </h3>
                  <h4>
                    {" "}
                    <strong> Price: € {price} / day</strong>
                  </h4>

                  <p>Description: {info}</p>
                  <div>
                    <Link to="/">
                      <ButtonWrapper className="mx-1">
                        <i className="fas fa-angle-left" /> Home
                      </ButtonWrapper>
                    </Link>
                    
                    {inCart ? (
                      <ButtonWrapper reserved>
                        Reserved <i className="fas fa-check" />
                      </ButtonWrapper>
                    ): (
                      <ButtonWrapper
                        onClick={() => {
                          contextValue.addToCart(id);
                        }}
                      >
                        Reserve now <i className="fas fa-plus" />
                      </ButtonWrapper>
                    )  }
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ContextConsumer>
    );
  }
}
