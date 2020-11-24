const ADD_PHOTOS = 'photos/addPhotos'

const addPhotos = (photos) => {
    return {
        type: ADD_PHOTOS, 
        payload: photos, 
    };
};

export const getPhotos = () => async (dispatch) => {
    const response = await fetch('/hello');
    const data = await response.json();   
    dispatch(addPhotos(data));
    return data; 
};

const initialState = { photos: null }

const photoReducer = (state = initialState, action) => {
    let newState; 
    switch (action.type) {
        case ADD_PHOTOS: 
            newState = Object.assign({}, state);
            newState.photos = action.payload; 
            return newState; 
        default:
            return state; 
    }
}; 

export default photoReducer; 