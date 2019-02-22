/* This is the ony, class based component */
import React, { Component } from 'react';
import {CAR_LIST} from '../../data'
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
      
      </React.Fragment>
    )
  }
}
