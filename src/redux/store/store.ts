import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { favsReducer } from "../reducers/favsReducers";
import { loginReducer } from "../reducers/loginReducer";
import { moviesReducer } from "../reducers/movieReducers";
import { registroReducer } from "../reducers/registroReducer";
import { searchreducer } from "../reducers/searchReducer";

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    registro: registroReducer,
    movies: moviesReducer,
    favs: favsReducer,
    search: searchreducer
})  


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)