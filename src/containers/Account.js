import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { storage } from '../firebase/firebase';
import { uploadUserProfileImage } from 'actions';

import 'styles/Account.css';

const Account = (props) => {

  const { user } = props;

  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    if(uploadProgress === 100){
      setShowEdit(false);
      setUploadProgress(0);
    }
  },[uploadProgress])

  const handleDisplayImage = (event) => {
    let reader = new FileReader();
    let file = event.target.files[0]
    reader.onloadend = () => {
      setImage(file)
      setImageURL(reader.result)
    }
    reader.readAsDataURL(file);
  }

  const handleImageUpload = (event) => {
    if (image !== null) {
      setShowProgress(true)
      const uploadTask = storage.ref(`profiles/${user.uid}/${image.name}`).put(image)
      uploadTask.on(
        'state_changed',
        snapshot => {
          const uploadProgress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )
          setUploadProgress(uploadProgress)
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref(`profiles/${user.uid}`)
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              const { dispatch } = props;
              dispatch(uploadUserProfileImage(url))
            });
        }
      );
    } else {
      return 'No image uploaded';
    }
  }

  const formatDate = (date) => {
    return date.split(' ').slice(0, 4).join(' ');
  }

  const EditProfileImage = () => (
    <div className='edit-wrapper'>
      {showProgress ? <progress value={uploadProgress} max='100' /> : null}
      <div>
        <label className='upload-button' for='upload'>
          <input id='upload' type='file' name='profile-image' onChange={handleDisplayImage} />
          Choose File
        </label>
      </div>
      <div>
        <button className='button' onClick={handleImageUpload} >Upload Image</button>
      </div>
    </div>
  )

 
  if(user.displayName !== null) return (
    <div>
      <h2>Account</h2>
      <div className='account-page'>
        <div className='details-wrapper'>
        
          <div className='details-text'>
            <h3>Your Details</h3>
            <h4>Display Name</h4>
            <p>{user.displayName}</p>
            <h4>Email</h4>
            <p>{user.email}</p>
            <h4>Date Created</h4>
            <p>{formatDate(user.metadata.creationTime)}</p>
            <h4>Last Login</h4>
            <p>{formatDate(user.metadata.lastSignInTime)}</p>
            <button className='button'>Edit Details</button>

          </div>

        </div>
  
        <div className='profile-wrapper'>
          <div className='image-wrapper'>
            <h3>Profile Image</h3>
            <img className='profile-image' src={imageURL || user.photoURL} alt='uploaded'/>
          </div>
            {showEdit ? <EditProfileImage /> : 
            <div className='edit-wrapper'>
              <button className='button' onClick={() => setShowEdit(true)}>Change Image</button>
            </div>
            }
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

export default (connect(mapStateToProps)(Account));
