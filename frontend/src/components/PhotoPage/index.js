import React, { useEffect, useState } from 'react'; 
import * as photoActions from '../../store/photo';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comments from './Comments'; 

const PhotoPage = () => {
    const [photo, setPhoto] = useState("..loading");
    const dispatch = useDispatch(); 
    const { photoId } = useParams(); 
    const commentLength = useSelector(state => state.comment.length)

    useEffect(() => {
        dispatch(photoActions.getSinglePhoto(photoId)).then((photo) => setPhoto(photo)); 
    }, [dispatch, commentLength]);

    return (
        <>
            <img src={photo.imageLink} />
            <Comments comments={photo.Comments || []}/> 
        </>
    );
}

export default PhotoPage; 