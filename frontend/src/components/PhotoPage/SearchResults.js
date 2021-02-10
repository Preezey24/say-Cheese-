import React from 'react'; 
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import './SearchResults.css'

const SearchResults = () => {
    const history = useHistory(); 
    const photos = useSelector(state => state.photo); 

    const handleClick = (e) => {
        const photoId = e.target.id; 
        history.push(`/photos/${photoId}`); 
    };

    let photoResults; 
    if (Object.keys(photos).length > 0) {
        photoResults = (
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
    } else {
        photoResults = (
            <div className={"searchPage__noresults"}>  
                No tags found during this search. Please use another search
                term or return to the main page. 
            </div>
        )
    }
    
    return (
        <div className={"searchpage__container"}>
            <div className={"photoSearch__container"}>
                {photoResults}
            </div>
        </div>
    )
}

export default SearchResults; 