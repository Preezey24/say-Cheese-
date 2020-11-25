import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import * as commentActions from '../../store/comment';
import { useParams } from 'react-router-dom'; 

const Comments = (props) => {
    const dispatch = useDispatch(); 
    const [newComment, setComment] = useState(""); 
    const [edit, setEdit] = useState(false);
    const [editCommentId, setEditComment] = useState("");  
    const { photoId } = useParams(); 
    const userId = useSelector(state => state.session.user.id)

    useEffect(() => {
        dispatch(commentActions.getComments(props.comments));
    }, [dispatch, props.comments]); 

    const addClick = () => {
        dispatch(commentActions.newComment(newComment, photoId, userId));
        setComment(""); 
    };

    const deleteClick = (e) => {
        const commentId = e.target.id;
        dispatch(commentActions.deleteComment(commentId, photoId));
    };

    const editClick = (e) => {
        const commentId = e.target.id; 
        setEdit(true);
        setEditComment(commentId);  
    };

    const editComplete = () => {
        dispatch(commentActions.editComment(editCommentId, newComment, photoId)); 
    }

    return (
        <>
            {props.comments.map(comment => {
                const auth = userId === comment.userId
                return (
                    <>  
                        {!(editCommentId == comment.id) && (                     
                            <div key={comment.id}>
                                {comment.comment}
                                {auth && (
                                    <>
                                        <button onClick={editClick} id={comment.id}>Edit</button>
                                        <button onClick={deleteClick} id={comment.id}>Delete</button>
                                    </>
                                )};
                            </div>
                        )}
                        {edit && editCommentId == comment.id && (
                            <div>
                                <textarea cols="30" rows="10" onChange={(e) => setComment(e.target.value)} 
                                value={newComment}>
                                    {comment.comment}
                                </textarea>
                                <button onClick={editComplete}>Done</button>
                            </div>
                        )}
                    </>
                )
            })}
            <div>
                <textarea placeholder="Add a comment" cols="30" 
                rows="10" onChange={(e) => setComment(e.target.value)} value={newComment}/>
                <button onClick={addClick}>
                    Add Comment
                </button>
            </div>
        </>
    )
};

export default Comments; 