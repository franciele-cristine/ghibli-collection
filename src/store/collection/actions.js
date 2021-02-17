import {ADD_TO_COLLECTION, REMOVE_TO_COLLECTION} from './actions-type';

export const addToCollection = (film) =>({
    type: ADD_TO_COLLECTION,
    film
})