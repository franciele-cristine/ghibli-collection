import {GET_FILMS} from './actions-type';

const filmsReducer = (state = [], actions) =>{
    switch (actions.type) {
        case GET_FILMS:
            return [...state, actions.films];
        default:
            return state;
    }
}

export default filmsReducer