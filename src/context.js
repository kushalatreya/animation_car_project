import React, { Component } from "react";
import { CAR_LIST, detailProduct } from "./data";

//making the context
const MyContext = React.createContext();

//provider
class ContextProvider extends Component {
  state = {
    data: [],
    detailProduct: detailProduct,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    text: "",
    newSearchData: [],
    searchData: [],
    city: ["Helisnki", "oulu"],
    sortOption: [
      "A-Z",
      "Z-A",
      "Latest Made",
      "Oldest Made",
      "Cheapest First",
      "Most Expensie First"
    ],
    select: "",
    selectCity: ""
  };

  componentDidMount() {
    this.setState({ data: CAR_LIST, newSearchData: CAR_LIST });
  }
  getItem = id => {
    const product = this.state.data.find(element => element.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = id => {
    let tempProducts = [...this.state.data];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  increment = id => {
    console.log("increment");
  };
  decrement = id => {
    console.log("decrement");
  };
  removeItem = id => {
    console.log("remove item");
  };
  clearCart = () => {
    console.log("cleared cart");
  };
  onChangeHandaler = event => {
    this.setState({ text: event.target.value });
  };
  onSelectChangeHanldaler = event => {
    console.log("clicked");
    this.setState({ select: event.target.value });
  };
  onSelectCityHandler;

  sortCarByLocationAZ = cars => {
    const newSearchData = cars.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState(() => {
      return { newSearchData: newSearchData };
    });
  };
  sortCarByLocationZA = cars => {
    const newSearchData = cars.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      } else if (a.title < b.title) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState(() => {
      return { newSearchData: newSearchData };
    });
  };

  sortByLatestMade = cars => {
    const newSearchData = cars.sort((a, b) => b.year - a.year);
    this.setState(() => {
      return { newSearchData: newSearchData };
    });
  };
  sortByOldMade = cars => {
    const newSearchData = cars.sort((a, b) => a.year - b.year);
    this.setState(() => {
      return { newSearchData: newSearchData };
    });
  };
  sortByCheapestFirst = cars => {
    const newSearchData = cars.sort((a, b) => a.price - b.price);
    this.setState(() => {
      return { newSearchData: newSearchData };
    });
  };
  sortByExpensiveFirst = cars => {
    const newSearchData = cars.sort((a, b) => b.price - a.price);
    this.setState(() => {
      return { newSearchData: newSearchData };
    });
  };
  SearchByKeyEnter = event => {
    let searchData = [...this.state.data];
    const newSearchData = searchData.filter(
      element =>
        element.title.toLowerCase().startsWith(this.state.text) ||
        element.location.toLowerCase().startsWith(this.state.text) ||
        element.company.toLowerCase().startsWith(this.state.text)
    );
    if (this.state.select === "A-Z") {
      this.sortCarByLocationAZ(newSearchData);
    } else if (this.state.select === "Z-A") {
      this.sortCarByLocationZA(newSearchData);
    } else if (this.state.select === "Latest Made") {
      this.sortByLatestMade(newSearchData);
    } else if (this.state.select === "Oldest Made") {
      this.sortByOldMade(newSearchData);
    } else if (this.state.select === "Cheapest First") {
      this.sortByCheapestFirst(newSearchData);
    } else if (this.state.select === "Most Expensie First") {
      this.sortByExpensiveFirst(newSearchData);
    }
    this.setState(() => {
      return { newSearchData: newSearchData };
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          SearchByKeyEnter: this.SearchByKeyEnter,
          onChangeHandaler: this.onChangeHandaler,
          onSelectChangeHanldaler: this.onSelectChangeHanldaler
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
//consumer
const ContextConsumer = MyContext.Consumer;

export { ContextProvider, ContextConsumer };
