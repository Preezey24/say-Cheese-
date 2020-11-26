import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import * as commentActions from '../../store/comment';
import { useParams } from 'react-router-dom'; 

const Comments = () => {
    const dispatch = useDispatch(); 
    const [newComment, setComment] = useState(""); 
    const [editText, setEditText] = useState(""); 
    const [edit, setEdit] = useState(false);
    const [render, setRender] = useState(false); 
    const [editCommentId, setEditComment] = useState("");  
    const { photoId } = useParams(); 
    const userId = useSelector(state => state.session.user.id)
    const comments = useSelector(state => state.comment); 

    //sort array for edit command 
    // comments.sort((a, b) => a.id - b.id); 

    useEffect(() => {
        dispatch(commentActions.getComments(comments));
    }, [dispatch, render]); 

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
        setEditText(comments[commentId].comment);
    };

    const editComplete = () => {
        dispatch(commentActions.editComment(editCommentId, editText));
        setEdit(false); 
    }

    return (
        <>
            {Object.entries(comments).map(([key, value]) => {
                const auth = userId === value.userId
                return (
                    <>  
                        {!(editCommentId == key) && (                     
                            <div key={key}>
                                {value.comment}
                                {auth && (
                                    <>
                                        <button onClick={editClick} id={key}>Edit</button>
                                        <button onClick={deleteClick} id={key}>Delete</button>
                                    </>
                                )};
                            </div>
                        )}
                        {edit && editCommentId == key && (
                            <div>
                                <textarea cols="30" rows="10" onChange={(e) => setEditText(e.target.value)} 
                                value={editText}/>
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