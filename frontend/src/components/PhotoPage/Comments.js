import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import * as commentActions from '../../store/comment';

const Comments = (props) => {
    const dispatch = useDispatch(); 
    const [newComment, setComment] = useState(""); 
    const photoId = useSelector(state => state.photo[0].id);

    useEffect(() => {
        dispatch(commentActions.getComments(props.comments));
    }, [dispatch, props.comments]); 

    const handleClick = () => {
        dispatch(commentActions.newComment(newComment, photoId));
        setComment(""); 
    };

    return (
        <>
            {props.comments.map(comment => {
             return (
                <>
                    {comment.comment}
                </>
            )
            })}
            <div>
                <textarea placeholder="Add a comment" cols="30" 
                rows="10" onChange={(e) => setComment(e.target.value)} value={newComment}/>
                <button onClick={handleClick}>
                    Add Comment
                </button>
            </div>
        </>
    )
};

export default Comments; 