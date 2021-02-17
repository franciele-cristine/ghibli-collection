import {getFilmsThunk}from '../../store/films/thunk';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import Card from '../../components/card';
import Grid from '../../components/grid';

const Films = () =>{
    const dispatch = useDispatch();
    const films = useSelector(state => state.films[0])

    useEffect(() =>{
        dispatch(getFilmsThunk())
    }, [])

    return(
        <div>
            <h1>Films</h1>
            <Grid>
            {films && films.map((film, index) =>{
                return(
                    <Card key={index} film={film}/>
                )
            })}
            </Grid>
        </div>
    )
}

export default Films