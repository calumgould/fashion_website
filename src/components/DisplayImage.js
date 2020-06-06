import React from 'react';

const DisplayImage = ({imageURL}) => {
    if(imageURL !== null) {
        return ( 
            <img className='display-image' src={imageURL} alt='uploaded'/>
         );
    } else {
        return null;
    }

}
 
export default DisplayImage;