import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import * as photoActions from '../../store/photo'; 
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch(); 
    const history = useHistory(); 

    const handleSearch = () => { 
        dispatch(photoActions.searchPhotos(search.toLowerCase()));
        history.push(`/photos/tags/${search}`); 
        setSearch(""); 
    }

    const handleChange = (e) => {
        const value = e.target.value; 
        setSearch(value); 
    }
    
    return (
        <>
            <input onChange={handleChange} value={search} placeholder="Search here..."/>
            <button onClick={handleSearch}>Search</button>
        </>
    )
}; 

export default SearchBar; 