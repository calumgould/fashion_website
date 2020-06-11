import React from 'react';
import { connect } from "react-redux";

const Recipes = (props) => {

    const { user } = props;

    return ( 
        <div>
            <h2>Recipes</h2>
            {user.displayName && 
            <h4>Welcome back {user.displayName}!</h4>
            }
        </div>
       
     );
}
 
function mapStateToProps(state) {
    return {
      user: state.auth.user,
    };
  }
  
export default (connect(mapStateToProps)(Recipes));