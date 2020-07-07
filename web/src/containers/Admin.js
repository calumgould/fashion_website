import React from 'react';
import {connect} from "react-redux";

import AdminAddProduct from 'components/AdminAddProduct';
import AdminAddCategory from 'components/AdminAddCategory';


const AdminPage = ({dispatch, categories, products}) => {

    const currentProducts = products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.name}></img>
            <h4>{product.name}</h4>
          </div>
        )
    })

    return ( 
        <div>
            <h2>Admin</h2>
            <AdminAddProduct dispatch={dispatch} categories={categories} products={products} />
            <AdminAddCategory dispatch={dispatch} />
            <h2>Current Products</h2>
            {currentProducts}
        </div>
     );
}
 
function mapStateToProps(state) {
    return {
      categories: state.admin.categories,
      products: state.admin.products,
    };
  }
  
  export default connect(mapStateToProps)(AdminPage);