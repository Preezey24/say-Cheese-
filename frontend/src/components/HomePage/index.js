import React from 'react'; 
import { useHistory } from 'react-router-dom'

const HomePage = (props) => {
    const history = useHistory(); 
    
    const handleClick = (e) => {
        const photoId = e.target.id; 
        history.push(`/photos/${photoId}`); 
    };

    return (
        <>
            {props.photos.map(photo => {
                return (
                    <>
                        <img id={photo.id} key={photo.id} src={photo.imageLink} 
                        alt="" onClick={handleClick} />
                   </>
                )
            })}
        </>
    );
};

export default HomePage; 