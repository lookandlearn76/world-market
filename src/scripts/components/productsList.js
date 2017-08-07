import React, { Component } from 'react';
import singleProduct from './singleProduct';

class ProductsList extends Component {
   render (){
     const Products = this.props.data.map((product) => {
       return (
         <li key={product.id}>
           <singleProduct data={product} />
         </li>
       )
     });
     return(
       <ul className="clearfix">
         {Products}
       </ul>
     );
   }
}

export default ProductsList;
