import React, { Component } from 'react';
import { CAR_LIST, detailProduct} from './data';

//making the context
const MyContext = React.createContext();

//provider
class ContextProvider extends Component {
    state={
        data:CAR_LIST,
        detailProduct: detailProduct
    }
    getItem = (id) =>{
      const product = this.state.data.find(element => element.id === id);
      return product;
    }


    handleDetail = (id) => {
      const product = this.getItem(id);
      this.setState(()=>{
        return {detailProduct:product}
      })
    }
    addToCart = (id) => {
        console.log(`the product id of ${id} from the car list`);
    }
  render() {
    return (
      <MyContext.Provider value = {{
          ...this.state,
          handleDetail:this.handleDetail,
          addToCart:this.addToCart,
      }} >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
//consumer
const ContextConsumer = MyContext.Consumer;

export {ContextProvider, ContextConsumer};