import React from 'react';
import { connect } from "react-redux";

const About = () => {

    return ( 
        <>
            <h2>About</h2>
        </>
    );
}
 
function mapStateToProps(state) {
    return {

    };
  }
  
export default (connect(mapStateToProps)(About));