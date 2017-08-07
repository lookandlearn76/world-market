import React, { Component } from 'react';
import Counter from './counter';
//import Pubsub from  'pubsub';

class singleProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenProduct: {},
      cartContents: {},
      added: false
    };
  }

  AddToCart = (e) => {
    if(!this.state.added){
      //add singleProduct
      Pubsub.publish('cart.added', this.props.data);
    }
    else {
      // remove singleProduct
      Pubsub.publish('cart.removed', this.props.data.id);
    }

    this.setState({
      added: !this.state.added
    });
  }

  render() {
    /**/
    //add to props
    const Data = this.props.data;

    return (
      <div className= "thumbnail">
        <img src={Data.image} className="sortWidth" alt="image of product" />
        <div className="caption clearfix">
          <h2><a href={Data.url}>{Data.name}</a></h2>
          <div className="product__price">{Data.price} {Data.currency}</div>
          <div className="product__button-wrapper">
            <button className={this.state.added ? 'btn btn-danger' : 'btn btn-primary'} onClick={this.addToCart}>
              {this.state.added} ? 'Remove' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    )
  }
};
export default singleProduct;
