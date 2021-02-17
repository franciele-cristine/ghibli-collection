import {useSelector, useDispatch} from 'react-redux';
import Card from '../../components/card';
import Grid from '../../components/grid';

const Collection = () =>{
    const collection = useSelector(state => state.collection)

    return(
        <div>
            <Grid>
            {collection && collection.map((film, index) =>{
                return(
                    <Card isRemovable={true} key={index} film={film}/>
                )
            })}
            </Grid>
        </div>
    )
}

export default Collection