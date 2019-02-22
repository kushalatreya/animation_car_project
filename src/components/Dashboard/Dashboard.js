/* This is the ony, class based component */
import React, { Component } from 'react';
import {CAR_LIST} from '../../data'
import Title from '../../components/Title';
import {ProductWrapper} from '../../components/StyledComponent'
export default class Dashboard extends Component {
    state={
        Products: ""
    };
    componentDidMount(){
        const data =  CAR_LIST;
        this.setState({Products : data})
    }
  
  render() {
      console.log(CAR_LIST);
    return (
      <React.Fragment>
        <ProductWrapper className="py-5">
          <div className="container">
          <Title name = 'Available' title= 'Cars'/>
          <div className="row">
            <div>
                {CAR_LIST.map((car)=> {
                  return <div>
                  <img src={car.img} alt=""/>
                  <p> {car.title}</p>
                  
                  </div>
                })}
            </div>
          </div>
          </div>
        </ProductWrapper>
      </React.Fragment>
    )
  }
}
