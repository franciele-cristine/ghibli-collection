import {ADD_TO_COLLECTION, REMOVE_FROM_COLLECTION} from './actions-type';

const collectionReducer = (state=[], actions) =>{
    
    switch (actions.type) {
        
        case ADD_TO_COLLECTION:
            const {film} = actions
            const exists = state.find(element => element.id === film.id)
            if(!exists){
                return [...state, film];
            } 
        case REMOVE_FROM_COLLECTION:
            const {id} = actions 
            const list = state.filter(element => element.id !== id)
            state = list
            return state
        default:
            return state;
    }
}

export default collectionReducer