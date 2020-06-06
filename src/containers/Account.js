import React, { useState } from 'react';
import { connect } from 'react-redux';
import DisplayImage from 'components/DisplayImage';
import { storage } from '../firebase/firebase';
import { uploadUserProfileImage } from 'actions';

const Account = (props) => {

  const { user } = props;

  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showEdit, setShowEdit] = useState(false);

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
      setShowEdit(false);
    } else {
      return 'No image uploaded';
    }
  }

  const EditProfileImage = () => (
    <div>
      <progress value={uploadProgress} max='100' />
      <input type='file' name='profile-image' onChange={handleDisplayImage} />
      <button className='button' onClick={handleImageUpload} >Upload Image</button>
    </div>
  )

  return (
    <div>
      <h2>Account</h2>
      <div>
        <h3>Your Details</h3>
        <p>Display Name</p>
        <p>{user.displayName}</p>
        <p>Email</p>
        <p>{user.email}</p>
      </div>

      <div>
        <h3>Profile Image</h3>
        <DisplayImage imageURL={imageURL || user.photoURL} />
        {showEdit ? <EditProfileImage /> : <button className='button' onClick={() => setShowEdit(true)}>Change Image</button>}
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
