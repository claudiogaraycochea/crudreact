import React, { Component } from 'react';
import { removeFromCart } from '../../actions';
import { connect } from 'react-redux';

class ShoppingCart extends Component {

  render() {
    return (<div>
      <h4>ShoppingCart</h4>
      {this.props.cart.map(product =>
        <div key={product.id} className="row">
        <span>{product.name}</span>
        <button onClick={()=>this.props.removeFromCart(product)}>X</button>
        </div>
      )} 
    </div>)
  }

}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product){
      dispatch(removeFromCart(product));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);