import React, { useState, useEffect } from 'react';
import { storage } from '../firebase/firebase';

import { addProduct } from 'actions';

const AdminAddProduct = ({ dispatch, categories, products }) => {

    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState(null);

    useEffect(() => {
        console.log('products length', products.length + 1);
    }, [products])

    const handleImageUpload = (event) => {
        if (image !== null) {
            return new Promise((resolve, reject) => {
                const uploadTask = storage.ref(`admin/products/${products.length + 1}/${image.name}`).put(image)
                uploadTask.then(() => {
                    storage
                        .ref(`admin/products/${products.length + 1}`)
                        .child(image.name)
                        .getDownloadURL()
                        .then(downloadURL => {
                            resolve(downloadURL)
                        })
                })

            })
        } else {
            console.log('ERRORERROR');
        }

    }

    const handleDisplayImage = (event) => {
        let reader = new FileReader();
        let file = event.target.files[0]
        reader.onloadend = () => {
            setImage(file)
            setImageURL(reader.result)
        }
        reader.readAsDataURL(file);
    }

    const handleAddProduct = async (event) => {
        event.preventDefault();
        event.persist();
        try {
            let downloadURL = await handleImageUpload();
            const product = {
                id: products.length + 1,
                name: event.target.productName.value,
                description: event.target.productDescription.value,
                category: event.target.productCategory.value,
                image: downloadURL,
                price: parseFloat(event.target.productPrice.value).toFixed(2),
                quantity: 1
            }
            console.log('PRODUCT TO ADD', product);
            dispatch(addProduct(product))
        } catch (error) {
            console.log('ERROR', error);
        }
        document.getElementById('add-product-form').reset()
        setImage(null)
    }

    const categoryOptions = categories.map((category, index) => {
        return <option key={index} value={category}>{category}</option>
    })

    return (
        <div>
            <h3>Add Product</h3>
            <form id='add-product-form' onSubmit={handleAddProduct}>
                <div className='add-form-wrapper'>
                    <div className='input-wrapper'>
                        <input type='text' name='productName' placeholder='Product name...' required />
                        <textarea type='text' name='productDescription' placeholder='Product description...' required />
                        <select name='productCategory' defaultValue='' required >
                            <option value='' disabled>Select product category</option>
                            {categoryOptions}
                        </select>
                        <input type='number' step='0.01' name='productPrice' placeholder='Price...' required />
                    </div>
    
                    <div className='upload-wrapper'>
                        <h4>Upload Product Image</h4>
                        <div className='product-image-wrapper'>
                            <img src={imageURL} alt='uploaded' />
                        </div>
                        <label className='upload-file'>
                            <input id='upload' type='file' name='product-image' onChange={handleDisplayImage} accept='image/*'/>
                            Choose File
                        </label>
                    </div>
                </div>
                <div className='submit-wrapper'>
                    <button type='submit' className='button'>Confirm Add Product</button>
                </div>
            </form>
        </div>
    );
}

export default AdminAddProduct;