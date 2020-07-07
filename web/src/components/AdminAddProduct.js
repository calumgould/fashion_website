import React from 'react';

const AdminAddProduct = ({dispatch, categories}) => {

    const handleAddProduct = (event) => {
        event.preventDefault();

        const product = {
            name: event.target.productName.value,
            description: event.target.productDescription.value,
            category: event.target.productCategory.value,
            image: event.target.productImage.value,
            price: event.target.productPrice.value,
            quantity: 1
        }
        console.log('PRODUCT TO ADD', product);
    }

    const categoryOptions = categories.map((category, index) => {
        return <option key={index} value={category}>{category}</option>
    })

    return ( 
        <div>
            <h3>Add Product</h3>
            <form onSubmit={handleAddProduct}>
                <input type='text' name='productName' placeholder='Product name...' required/>
                <input type='text' name='productDescription' placeholder='Product description' required/>
                <select name='productCategory' placeholder='Category...' required >
                    {categoryOptions}
                </select>
                <input type='number' name='productPrice' placeholder='Price...' required/>
                <button type='submit'>Add</button>
            </form>
        </div>
     );
}
 
export default AdminAddProduct;