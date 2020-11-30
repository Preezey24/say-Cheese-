import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import * as commentActions from '../../store/comment';
import { useParams } from 'react-router-dom'; 
import './Comments.css'; 

const Comments = () => {
    const dispatch = useDispatch(); 
    const [newComment, setComment] = useState(""); 
    const [editText, setEditText] = useState(""); 
    const [edit, setEdit] = useState(false);
    const [editCommentId, setEditComment] = useState("");   
    const { photoId } = useParams(); 
    const userId = useSelector(state => state.session.user.id);
    const username = useSelector(state => state.session.user.username); 
    const photo = useSelector(state => state.photo)
    const comments = useSelector(state => state.comment); 
    
    useEffect(() => {
        dispatch(commentActions.getComments(comments));
    }, [dispatch]); 

    const addClick = () => {
        dispatch(commentActions.newComment(newComment, photoId, userId));
        setComment(""); 
    };

    const deleteClick = (e) => {
        const commentId = e.currentTarget.id;
        dispatch(commentActions.deleteComment(commentId, photoId));
    };
    
    const editClick = (e) => {
        const commentId = e.currentTarget.id; 
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
            <div className={"description__container"}> 
                    <p className={"description__title"}>
                        {photo.title}
                    </p>
                    <p className={"description__author"}>
                        {photo.author}
                    </p>  
            </div>         
            <div className={"comments__container"}>
                {Object.entries(comments).map(([key, value]) => {
                    const auth = userId === value.userId;
                    let otherUser; 
                    if (value.User) {
                        otherUser = true; 
                    } else {
                        otherUser = false; 
                    } 
                    return (
                        <>  
                            {!(editCommentId == key) && (
                                    <div key={key} className={"comment__container"}>
                                        <div>
                                            {!otherUser && 
                                                <p className={"comment__username"}>
                                                    {username}
                                                </p>
                                            }
                                            {otherUser &&
                                                <p className={"comment__username"}>
                                                    {value.User.username}
                                                </p>
                                            }
                                            <p className={"comment__comment"}>
                                                {value.comment}
                                            </p>
                                        </div>
                                    {auth && (
                                        <div>
                                            <button onClick={editClick} id={key} className={"comment__edit-button"}>
                                                <i class="fas fa-edit"></i>
                                            </button>
                                            <button onClick={deleteClick} id={key} className={"comment__delete-button"}>
                                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    )}
                                    </div>
                            )}
                            {edit && editCommentId == key && (
                                <div>
                                    <textarea cols="30" rows="10" onChange={(e) => setEditText(e.target.value)} 
                                    value={editText} className={"textbox__edit-text"}/>
                                    <button onClick={editComplete} className={"comment__edit-complete-button"}>Done</button>
                                </div>
                            )}
                        </>
                    )
                })}
            </div>
            <div className={"textbox__container"}>
                <textarea className={"textbox__textarea"} placeholder="Add a comment" cols="30" 
                rows="10" onChange={(e) => setComment(e.target.value)} value={newComment}/>
                <button className={"textbox__button"} onClick={addClick}>
                    Comment
                </button>
            </div>

        </>
    )
};

export default Comments; 