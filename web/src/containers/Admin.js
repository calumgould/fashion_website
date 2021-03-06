import React from 'react';
import {connect} from "react-redux";

import AdminAddProduct from 'components/AdminAddProduct';
import AdminAddCategory from 'components/AdminAddCategory';

import { removeProduct } from "../actions";

import 'styles/Admin.css';

const AdminPage = ({dispatch, categories, products}) => {

    const handleRemoveProduct = (product) => {
        const index = products.findIndex((productItem) => productItem.id === product.id)
        dispatch(removeProduct(product, products, index))
    }

    const currentProducts = products.map((product) => {
        return (
          <tr key={product.id}>
                <td className='table-image' style={{backgroundImage: `url(${product.image})`}} />
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>
                    <button className='remove-button' onClick={() => handleRemoveProduct(product)}>Remove</button>
                </td>
            </tr>
        )
    })

    return ( 
        <div>
            <h2>Admin</h2>
            <AdminAddProduct dispatch={dispatch} categories={categories} products={products} />
            <AdminAddCategory dispatch={dispatch} />
            <h2>Current Products</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts}
                </tbody>
            </table>
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