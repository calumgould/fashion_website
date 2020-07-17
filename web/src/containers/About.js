import React from 'react';

import 'styles/About.css';

const About = () => {

    return ( 
        <>
            <h2>About</h2>
            <p className='about-text'>
                <span className='about-logo'>trend.</span>
                is an online fashion website, designed to gain experience in building a full app from scratch and allowing me to develop skills in several new technologies, some of which including :
            </p>
            <br />
            <ul className='about-text'>
                <li><span>-</span> React Redux</li>
                <li><span>-</span> Dark mode toggle</li>
                <li><span>-</span> Firebase user authentication</li>
                <li><span>-</span> Firestore database for user cart, product list and categories</li>
                <li><span>-</span> Firestore storage for user profile picture and product images</li>
                <li><span>-</span> Example admin page to allow adding/removing of products</li>
                <li><span>-</span> Stripe payment integration</li>
                <li><span>-</span> Material UI icons</li>
                <li><span>-</span> Axios</li>
            </ul>
        </>
    );
}
 
export default About