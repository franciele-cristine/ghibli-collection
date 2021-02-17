import {ADD_TO_COLLECTION, REMOVE_TO_COLLECTION} from './actions-type';

const collectionReducer = (state=[], actions) =>{
    switch (actions.type) {
        case ADD_TO_COLLECTION:
            return [...state, actions.film];
    
        default:
            return state;
    }
}

export default collectionReducer