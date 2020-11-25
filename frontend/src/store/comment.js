import { fetch } from './csrf'; 

const GET_COMMENTS = 'comments/getComments';
const ADD_COMMENT = 'comments/addComment'; 
const EDIT_COMMENT = 'comments/editComment';
const DELETE_COMMENT = 'comment/deleteComment';  

export const getComments = (comments) => {
    return {
        type: GET_COMMENTS, 
        payload: comments, 
    };
};

const addComment = (comment) => {
    return {
        type: ADD_COMMENT, 
        payload: comment, 
    };
};

const adjustComment = (comment) => {
    return {
        type: EDIT_COMMENT, 
        payload: comment, 
    };
};

const removeComment = (id) => {
    return {
        type: DELETE_COMMENT, 
        payload: id, 
    }
}

export const newComment = (comment, photoId, userId) => async dispatch => {

    const res = await fetch('/api/comments/', {
        method: 'POST', 
        body: JSON.stringify({
            comment, 
            photoId, 
            userId,    
        }),
    });
    const newComment = res.data; 
    dispatch(addComment(newComment));  
}

export const deleteComment = (commentId, photoId) => async dispatch => {
    const res = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE',
        body: JSON.stringify({
            photoId, 
        })
    });
    const comment = res.data; 
    dispatch(removeComment(comment.id)); 
}

export const editComment = (commentId, newComment, photoId) => async dispatch => {
    const res = await fetch(`/api/comments/${commentId}`, {
        method: 'PUT', 
        body: JSON.stringify({ 
            newComment,
            photoId, 
        }),
    });
    const comments = res.data; 
    dispatch(getComments(comments)); 
}

const initialState = {};

const commentReducer = (state = initialState, action) => {
    let newState; 
    switch (action.type) {
        case GET_COMMENTS:
            return action.payload; 
        case ADD_COMMENT: 
            newState = {...state, [action.payload.id]: action.payload};
            return newState;   
        case DELETE_COMMENT: 
            newState = Object.assign({}, state);
            delete newState[action.payload]; 
            return newState; 
        // case EDIT_COMMENT: 
        //     return {...state, [action.payload.id]:action.payload }
        default: 
            return state; 
    }
};

export default commentReducer; 