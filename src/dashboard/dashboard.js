// Dependencies
import React, { Component } from 'react';
import ProductList from './productList/productList';
import ShoppingCart from './shoppingCart/shoppingCart';

class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <ProductList/>
        <ShoppingCart/>
      </div>
    );
  }

}

export default Dashboard;