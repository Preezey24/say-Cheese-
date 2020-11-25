import { fetch } from './csrf'; 

const GET_COMMENTS = 'comments/getComments';
const ADD_COMMENT = 'comments/addComment'; 
const DELETE_COMMENT = 'comments/deleteComment';
const EDIT_COMMENT = 'comments/editComment'; 

export const getComments = (comments) => {
    return {
        type: GET_COMMENTS, 
        payload: comments, 
    };
};

export const newComment = (comment, photoId) => async dispatch => {
    const userId = 13; 

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