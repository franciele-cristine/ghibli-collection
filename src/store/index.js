import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import filmsReducer from './films/reducer';
import collectionReducer from './collection/reducer';

const reducers = combineReducers(
    {
        films: filmsReducer,
        collection: collectionReducer,
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
