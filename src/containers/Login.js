import React from 'react';

import 'styles/Main.css';
import 'styles/Login.css';

const Login = () => {
    return ( 
        <div className='page-background'>
            <div>
                <h1 className='logo'>Feasty</h1>
                <div className='button-wrapper'>
                    <button className='button'>Enter</button>
                </div>
            </div>
        </div>
     );
}
 
export default Login;