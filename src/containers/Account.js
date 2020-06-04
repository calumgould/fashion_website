import React from "react";
import { connect } from "react-redux";

const Account = (props) => {

    const { isLoggingOut, logoutError } = props;

    return ( 
        <div>
            <h2>Account</h2>
            {isLoggingOut && <p>Logging Out....</p>}
            {logoutError && <p>Error logging out</p>}
      </div>
     );
}
 
function mapStateToProps(state) {
    return {
      isLoggingOut: state.auth.isLoggingOut,
      logoutError: state.auth.logoutError
    };
  }

export default connect(mapStateToProps)(Account);