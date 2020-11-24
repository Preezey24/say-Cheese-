import React, { useEffect, useState } from 'react'; 
import * as photoActions from '../../store/photo'; 
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const PhotoPage = () => {
    const [photo, setPhoto] = useState("...loading");
    const dispatch = useDispatch(); 
    const { photoId } = useParams(); 

    useEffect(() => {
        dispatch(photoActions.getSinglePhoto(photoId)).then((photo) => setPhoto(photo)); 
    }, [dispatch]);

    return (
        <img src={photo.imageLink} />
    );
}

export default PhotoPage; 