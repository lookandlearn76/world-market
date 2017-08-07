import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './scripts/components/productsList';
import Cart from './scripts/components/cart';
import { Container } from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: [],
      cart: [],
      totalProducts: 0,
      totalValue: 0,
      term: '',
      category: '',
      quantity: 1
    };

  }

  /*getProducts() {
    //for eternal API exchange this for relevant url
    const url = "products.json";

    axios.get(url).then(response => {
      this.setState({ products:response.data })
    })
  }

  componentWillmount(){
    this.getProducts();
  }

  handleAddToCart(chosenProducts) {
    let cartItem  = this.state.cart;
    let productID = chosenProducts.id;
    let productQty = chosenProducts.quantity;
    if(this.checkID(productID)) {
      let index = cartItem.findIndex(())
    }
  }*/




  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <ProductsList />
          <Cart />
        </div>
      </div>
    );
  }
}

export default App;
