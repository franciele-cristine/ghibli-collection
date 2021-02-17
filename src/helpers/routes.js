import {Switch, Route} from 'react-router-dom';
import Films from '../pages/films';
import Home from '../pages/home';
import Collection from '../pages/collection';

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/films"><Films/></Route>
            <Route path="/collection"><Collection/></Route>
        </Switch>
    )
}

export default Routes