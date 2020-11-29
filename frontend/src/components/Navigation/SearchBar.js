import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import * as photoActions from '../../store/photo'; 
import { useHistory } from 'react-router-dom';
import './SearchBar.css'; 

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
            <button onClick={handleSearch} className={"search__button"}>
                <i className="fas fa-search"></i>
            </button>
            <input onChange={handleChange} value={search} className={"search__input"} placeholder="Search photos..."/>
        </>
    )
}; 

export default SearchBar; 