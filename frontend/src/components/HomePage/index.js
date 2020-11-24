import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import * as photoActions from '../../store/photo'
import { Redirect } from 'react-router-dom';

const HomePage = (props) => {
    const dispatch = useDispatch();
    
    const handleClick = (e) => {
        const photo = e.target.id; 
        dispatch(photoActions.addPhoto(photo));
        return (
        <Redirect to={`/photos/${photo}`} />
        )
    };

    return (
        <>
            {props.photos.map(photo => {
                return (
                    <img id={photo.id} key={photo.id} src={photo.imageLink} 
                    alt="" onClick={handleClick} />
                )
            })}
        </>
    );
};

export default HomePage; 