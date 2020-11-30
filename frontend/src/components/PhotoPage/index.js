import React, { useEffect, useState } from 'react'; 
import * as photoActions from '../../store/photo';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comments from './Comments'; 
import './PhotoPage.css'; 

const formatDate = (date) => {
    let arr = date.split('T'); 
    let dateArr = arr[0].split('-'); 
    return `Uploaded on ${dateArr[2]} of the ${dateArr[1]}, ${dateArr[0]}`;
}

const PhotoPage = () => {
    const [photo, setPhoto] = useState("..loading");
    const dispatch = useDispatch(); 
    const { photoId } = useParams(); 

    useEffect(() => {
        dispatch(photoActions.getSinglePhoto(photoId)).then((photo) => setPhoto(photo)); 
    }, [dispatch]);


    return (
        <div className={"bg__photo-page"}>
            <div className={"photo__first-half"}>
                <div className={"photo__container"}>
                    <img src={photo.imageLink} className={"img__container"}/>
                </div>
            </div>
            <div className={"photo__comments"}>
                <Comments /> 
            </div>
            {photo.id &&
                <div className={"misc__container"}>
                    <div>
                        <p className={"misc__container-date"}>
                            {formatDate(photo.createdAt)}
                        </p> 
                    </div>
                    <ul className={"tag__container"}>
                        <span className={"heading"}>Tags</span>
                        {photo.Tags.map(tag => {
                            return (
                                <li className={"tag__tags"}>
                                    {`#${tag.tag}`}
                                </li>
                            )
                        })}  
                    </ul>
                </div>
            } 
        </div>
    );
}

export default PhotoPage; 