import React from 'react'; 
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

const SearchResults = () => {
    const history = useHistory(); 
    const photos = useSelector(state => state.photo);

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
    )
}

export default SearchResults; 