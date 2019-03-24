import React, { Component } from "react";
import { CAR_LIST, detailProduct } from "./data";

//making the context
const MyContext = React.createContext();

//provider
class ContextProvider extends Component {
  state = {
    data: [],
    detailProduct: detailProduct,
    cart: [detailProduct],
    carSubTotal: 0,
    carTax: 0,
    carTotal: 0,
    text: "",
    newSearchData: [],
    searchData: [],
    city: ["Helisnki", "Oulu"],
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
        this.addTotals();
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
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        window.location.reload();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.25;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        carSubTotal: subTotal,
        carTax: tax,
        carTotal: total
      };
    });
  };
  onChangeHandaler = event => {
    this.setState({ text: event.target.value });
  };
  onSelectChangeHanldaler = event => {
    this.setState({ select: event.target.value });
  };
  onSelectCityHandler = event => {
    this.setState({ selectCity: event.target.value });
  };

  sortCarByAZ = cars => {
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
  sortCarByZA = cars => {
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
  sortByLocationHelsinki = cars => {
    const newSearchData = cars.filter(
      element => element.location === "Helsinki"
    );
    console.log("FIlter data", newSearchData);

    this.setState(() => {
      return { newSearchData: newSearchData };
    });
  };
  sortByLocationOulu = cars => {
    const newSearchData = cars.filter(element => element.location === "Oulu");
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
      this.sortCarByAZ(newSearchData);
    }
    if (this.state.select === "Z-A") {
      this.sortCarByZA(newSearchData);
    }
    if (this.state.select === "Latest Made") {
      this.sortByLatestMade(newSearchData);
    }
    if (this.state.select === "Oldest Made") {
      this.sortByOldMade(newSearchData);
    }
    if (this.state.select === "Cheapest First") {
      this.sortByCheapestFirst(newSearchData);
    }
    if (this.state.select === "Most Expensie First") {
      this.sortByExpensiveFirst(newSearchData);
    }
    if (this.state.selectCity === "Helisnki") {
      console.log(newSearchData);
      this.sortByLocationHelsinki(newSearchData);
      console.log(newSearchData);
    }
    if (this.state.selectCity === "Oulu") {
      this.sortByLocationOulu(newSearchData);
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
          onSelectChangeHanldaler: this.onSelectChangeHanldaler,
          onSelectCityHandler: this.onSelectCityHandler
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
