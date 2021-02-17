import {FiHeart} from 'react-icons/fi';
import {addToCollection} from '../../store/collection/actions';
import {useDispatch} from 'react-redux';

const Card = ({film}) =>{
    const dispatch = useDispatch();

    return(
        <div className="film_card">
            <h3 className="film_title">{film.title}</h3>
            <p className="film_date">{film.release_date}</p>
            <p className="film_description">{film.description}</p>
            <button onClick={() => dispatch(addToCollection(film)) } className="favorite_button"><FiHeart/></button>
        </div>
    )
}

export default Card