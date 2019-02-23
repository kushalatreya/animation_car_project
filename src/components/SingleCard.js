/* this is one bootstrap card to be mapped in dashboard */
import React, { Component } from "react";
import { ProductWrapper, SpanWrapper } from "./StyledComponent";
import { Link } from "react-router-dom";

export default class SingleCard extends Component {
    render() {
        const { id, title, img, price, inCart, year, location, sale } = this.props.carInfo;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">
                    <div className="img-container p-3">
                        {/* passing the props of sale in styled component so as to show 'sale' and change color */}
                        {sale ? (<SpanWrapper sale>
                            <span className="card-notify-year ">sale</span>
                        </SpanWrapper>) : (<SpanWrapper >
                            <span className="card-notify-year ">{year}</span>
                        </SpanWrapper>)
                        }
                       
                            <span className="card-notify-location">{location}</span>
                        <Link to="/details">
                            <img src={img} alt={title} className="card-img-top" />
                            <button className="cart-btn">
                                <i className="fas fa-cart-plus" />{" "}
                            </button>
                        </Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}
