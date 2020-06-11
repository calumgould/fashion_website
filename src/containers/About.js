import React, { useEffect } from 'react';
import { connect } from "react-redux";

const About = (props) => {

    const { darkMode } = props;

    return ( 
        <>
            <h2>About</h2>
        </>
    );
}
 
function mapStateToProps(state) {
    return {
      darkMode: state.auth.darkMode,
    };
  }
  
export default (connect(mapStateToProps)(About));