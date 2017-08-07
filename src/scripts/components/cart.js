import React, { Component } from 'react';

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
        items: [],
        total: 0,
        currency: 'EUR'
    };

  }

  //getInitialState : {
    //this is for subscribing to product events
  //  $.subscribe('cart.added', this.addItem);
  //  $.subscribe('cart.removed', this.removeItem);

  addItem = (event, item) => {
    this.state.items.push(item);
    this.forceUpdate();
    this.countTotal();
  }
  removeItem = (e, itemId) => {
    var itemIndexInArray;

    this.state.items.some((item, index) => {
      if(item.id === itemId) {
        itemIndexInArray = index;
        return true;
      }
    });

    this.state.items.splice(itemIndexInArray, 1);
    this.forceUpdate();
    this.countTotal();
  }
  countTotal = () => {
    var total = 0;
    this.state.items.forEach(function(item, index){
      total= total + item.price;
    });
    this.setstate({total: total})
  }
  render() {
    const Items = this.state.items.map((item) => {
      return(
        <li key={item.id} className="cart-item">
          <span className="cart-item__name">{item.name}</span>
          <span className="cart-item__price">{item.price} {item.currency}</span>
        </li>
      )
    });
    let ItemBody = (
      <ul>
        {Items}
      </ul>
    );

    var emptyCart = <div className="alert alert-info">The shopping cart is empty</div>;

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          {Items.length > 0 ? ItemBody : emptyCart}
          <div className="shopping__total">
            Total: {this.state.total} {this.state.currency}
          </div>
        </div>
      </div>
    )
  }
}

export default Cart;
