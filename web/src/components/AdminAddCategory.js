import React from 'react';

import { addCategory } from 'actions';

const AdminAddCategory = ({dispatch}) => {

    const handleAddCategory = (event) => {
        event.preventDefault()
        dispatch(addCategory(event.target.category.value))
        alert(`${event.target.category.value} category added!`)
    }

    return ( 
        <div>
            <h3>Add Category</h3>
            <form onSubmit={handleAddCategory}>
                <input type='text' name='category' placeholder='Enter new category...' required/>
                <button type='submit'>Add Category</button>
            </form>
        </div>
     );
}
 
export default AdminAddCategory;