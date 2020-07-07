import React, { useEffect } from 'react';
import {connect} from "react-redux";

import AdminAddProduct from 'components/AdminAddProduct';
import AdminAddCategory from 'components/AdminAddCategory';


const AdminPage = ({dispatch, categories}) => {

    // const [products, setProducts] = useState({})

    // const currentProducts = products.map((product) => {
    //     <p>{product.name}</p>
    // })



    return ( 
        <div>
            <h2>Admin</h2>
            <AdminAddProduct dispatch={dispatch} categories={categories} />
            <AdminAddCategory dispatch={dispatch} />
            <h2>Current Products</h2>
            {/* {currentProducts} */}
        </div>
     );
}
 
function mapStateToProps(state) {
    return {
      categories: state.admin.categories
    };
  }
  
  export default connect(mapStateToProps)(AdminPage);