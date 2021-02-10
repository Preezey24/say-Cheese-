import React, { useEffect, useState }  from 'react';
import { useDispatch } from 'react-redux'; 
import * as photoActions from '../../store/photo.js'; 
import Footer from '../Footer' 
import "./SplashPage.css";

const SplashPage = () => {
    const [photos, setPhotos] = useState({}); 
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(photoActions.getPhotos()).then((state) => setPhotos(state)); 
    }, [dispatch]);

    return (
        <>
            <div className={"splashPage__container"}>
                <div className={"splashPage__container_heading"}>
                    <h1 className={"splashPage__heading"}>Welcome to say Cheese</h1>
                    <h2 className={"splashPage__text"}>
                        To see more photos, upload your own photo(s) or leave comments and search
                        for photos, sign up or log in. 
                    </h2>
                </div>
                <div className={"photoSplash__container"}>
                    {Object.entries(photos).map(([key, value]) => {
                        if (key > 9) return; 
                        return (
                            <>
                                <img id={key} key={key} src={value.imageLink} 
                                alt=""/>
                            </>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SplashPage;