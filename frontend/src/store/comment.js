import { fetch } from './csrf'; 

const GET_COMMENTS = 'comments/getComments';

export const getComments = (comments) => {
    return {
        type: GET_COMMENTS, 
        payload: comments, 
    };
};

export const newComment = (comment, photoId, userId) => async dispatch => {

    const res = await fetch('/api/comments/', {
        method: 'POST', 
        body: JSON.stringify({
            comment, 
            photoId, 
            userId,    
        }),
    });
    const comments = res.data; 
    dispatch(getComments(comments));  
}

export const deleteComment = (commentId, photoId) => async dispatch => {
    const res = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE',
        body: JSON.stringify({
            photoId, 
        })
    });
    const comments = res.data; 
    dispatch(getComments(comments)); 
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

const initialState = [];

const commentReducer = (state = initialState, action) => {
    let newState; 
    switch (action.type) {
        case GET_COMMENTS:
            return action.payload; 
        default: 
            return state; 
    }
};

export default commentReducer; 