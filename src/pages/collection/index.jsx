import {useSelector, useDispatch} from 'react-redux';
import Card from '../../components/card';
import Grid from '../../components/grid';

const Collection = () =>{
    const collection = useSelector(state => state.collection)

    return(
        <div>
            <h1>My favorite films</h1>
            <Grid>
            {collection && collection.map((film, index) =>{
                return(
                    <Card key={index} film={film}/>
                )
            })}
            </Grid>
        </div>
    )
}

export default Collection