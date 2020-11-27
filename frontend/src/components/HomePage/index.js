import React, { useEffect, useState } from 'react'; 
import { useHistory } from 'react-router-dom';
import * as photoActions from '../../store/photo.js'; 
import { useDispatch } from 'react-redux'; 

const HomePage = () => {
    const history = useHistory(); 
    const [photos, setPhotos] = useState({}); 
    const dispatch = useDispatch(); 
    
    useEffect(() => {
        dispatch(photoActions.getPhotos()).then((state) => setPhotos(state)); 
    }, [dispatch]);

    const handleClick = (e) => {
        const photoId = e.target.id; 
        history.push(`/photos/${photoId}`); 
    };

    return (
        <>
            {Object.entries(photos).map(([key, value]) => {
                return (
                    <>
                        <img id={key} key={key} src={value.imageLink} 
                        alt="" onClick={handleClick} />
                   </>
                )
            })}
        </>
    );
};

export default HomePage; 