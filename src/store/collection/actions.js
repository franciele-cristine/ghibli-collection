import {ADD_TO_COLLECTION, REMOVE_FROM_COLLECTION} from './actions-type';

export const addToCollection = (film) =>({
    type: ADD_TO_COLLECTION,
    film
})

export const removeFromCollection = (id) =>({
    type: REMOVE_FROM_COLLECTION,
    id
})