import React from 'react';

import { addCategory } from 'actions';

const AdminAddCategory = ({dispatch}) => {

    const handleAddCategory = (event) => {
        event.preventDefault();
        dispatch(addCategory(event.target.category.value));
        document.getElementById('add-category-form').reset()
        alert(`${event.target.category.value} category added!`)
    }

    return ( 
        <div>
            <h3>Add Category</h3>
            <form id='add-category-form' onSubmit={handleAddCategory}>
                <div className='add-category-wrapper'>
                    <div className='input-wrapper'>
                        <input type='text' name='category' placeholder='Enter new category...' required/>
                    </div>
                    
                </div>
                <div className='submit-wrapper'>
                    <button type='submit' className='button'>Add Category</button>
                </div>
            </form>
            
        </div>
     );
}
 
export default AdminAddCategory;