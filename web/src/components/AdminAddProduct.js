import React, { useState, useEffect } from 'react';
import { storage } from '../firebase/firebase';

import { addProduct } from 'actions';

const AdminAddProduct = ({ dispatch, categories, products }) => {

    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [showProgress, setShowProgress] = useState(false);

    useEffect(() => {
        console.log('products length', products.length + 1);
    }, [products])

    const handleImageUpload = (event) => {
        if (image !== null) {
            return new Promise((resolve, reject) => {
                setShowProgress(true)
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
                price: event.target.productPrice.value,
                quantity: 1
            }
            console.log('PRODUCT TO ADD', product);
            dispatch(addProduct(product))
        } catch (error) {
            console.log('ERROR', error);
        }

    }

    const categoryOptions = categories.map((category, index) => {
        return <option key={index} value={category}>{category}</option>
    })

    return (
        <div>
            <h3>Add Product</h3>
            <form onSubmit={handleAddProduct}>
                <input type='text' name='productName' placeholder='Product name...' required />
                <input type='text' name='productDescription' placeholder='Product description' required />
                <select name='productCategory' placeholder='Category...' required >
                    {categoryOptions}
                </select>
                <input type='number' name='productPrice' placeholder='Price...' required />

                <div className='image-wrapper'>
                    <h3>Profile Image</h3>
                    <img className='profile-image' src={imageURL} alt='uploaded' />
                </div>

                <div className='edit-wrapper'>
                    {showProgress ? <progress value={uploadProgress} max='100' /> : null}
                    <div>
                        <label className='upload-button'>
                            <input id='upload' type='file' name='product-image' onChange={handleDisplayImage} />
                        Choose File
                        </label>
                    </div>
                </div>

                <button type='submit'>Add</button>
            </form>
        </div>
    );
}

export default AdminAddProduct;