import {FiHeart} from 'react-icons/fi';
import {RiCloseLine} from 'react-icons/ri';
import {addToCollection, removeFromCollection} from '../../store/collection/actions';
import {useDispatch} from 'react-redux';

const Card = ({film, isRemovable}) =>{
    const dispatch = useDispatch();

    return(
        <div className="film_card">
            <h3 className="film_title">{film.title}</h3>
            <p className="film_date">{film.release_date}</p>
            <p className="film_description">{film.description}</p>
            {!isRemovable ? <button onClick={() => dispatch(addToCollection(film)) } className="favorite_button"><FiHeart/></button>
            : <button onClick ={() => dispatch(removeFromCollection(film.id))} className="remove_button"><RiCloseLine/></button>}
        </div>
    )
}

export default Card