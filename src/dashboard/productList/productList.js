import React, { Component } from 'react';
import { addToCart } from '../../actions';
import { connect } from 'react-redux';

class ProductList extends Component {

  render(){
    return <div>
      <h1>ProductList</h1>
      <div className="product-wrapper">
        {this.props.products.map(product =>
          <div className="item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <button onClick={() => this.props.addToCart(product)} >Add</button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  }

}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart(product){
      dispatch(addToCart(product));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);