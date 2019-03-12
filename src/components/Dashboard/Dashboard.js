/* This is the ony, class based component */
import React, { Component } from "react";
import { CAR_LIST } from "../../data";
import Title from "../../components/Title";
import { ProductWrapper } from "../../components/StyledComponent";
import SingleCard from "../SingleCard";
import Header from "./Header";
import { ContextConsumer } from "../../context";
export default class Dashboard extends Component {
  /*   state = {
    Products: ""
  };
  componentDidMount() {
    const data = CAR_LIST;
    this.setState({ Products: data })
  } */

  render() {
    console.log(CAR_LIST);
    return (
      <React.Fragment>
        <Header />
        <ProductWrapper className="py-5">
          <div className="container">
            <Title name="Available" title="Cars" />
            <div className="row">
              {/* {CAR_LIST.map((car) => {
                  return <SingleCard key={car.id} carInfo={car} />
                })} */}

              {/* now we are using context api */}
              <ContextConsumer>
                {contextValue => {
                  return contextValue.data.map(car => {
                    return <SingleCard key={car.id} carInfo={car} />;
                  });
                }}
              </ContextConsumer>
            </div>
          </div>
        </ProductWrapper>
      </React.Fragment>
    );
  }
}
