import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/Reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [logger, thunk]

//get user from local storage and save in the store

const userIdFromLocalStorage = localStorage.getItem('id')
?  localStorage.getItem('id') : null;

const initialState = {
         signup   : {user_id : userIdFromLocalStorage}
}


const store = createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;