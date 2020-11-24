import { useSelector } from 'react-redux'; 

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

export const newComment = (comment) => async dispatch => {
    const photoId = useSelector(state => state.photo.id)
    const userId = 13; 

    const res = await fetch('/api/comments/', {
        method: 'POST', 
        body: JSON.stringify({
            comment, 
            photoId, 
            userId,    
        }),
    });
    const comments = res.json(); 
    dispatch(getComments(comments)); 
}

const initialState = { comments: [] };

const commentReducer = (state = initialState, action) => {
    let newState; 
    switch (action.type) {
        case GET_COMMENTS:
            newState = Object.assign({}, state); 
            newState.comments = action.payload; 
            return newState; 
        default: 
            return state; 
    }
};

export default commentReducer; 