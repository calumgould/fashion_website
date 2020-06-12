import React from 'react';
import { connect } from "react-redux";

import Products from 'components/Products';

const Shop = ({user, history}) => {

    return ( 
        <div>
            <h2>Shop</h2>
            {user.displayName && 
            <h4>Welcome back {user.displayName}!</h4>
            }
            <Products history={history} />
        </div>
       
     );
}
 
function mapStateToProps(state) {
    return {
      user: state.auth.user,
    };
  }
  
export default (connect(mapStateToProps)(Shop));