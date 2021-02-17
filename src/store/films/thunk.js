import {getFilms} from './actions';
import api from '../../helpers/api';

export const getFilmsThunk = () => (dispatch) =>{
    api.get('/films')
        .then(res => dispatch(getFilms(res.data)))
        .catch( err => console.log(err))
}