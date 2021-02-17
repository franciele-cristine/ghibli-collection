import {GET_FILMS} from './actions-type';

export const getFilms = (films) =>({
    type: GET_FILMS,
    films
})