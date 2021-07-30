import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/Reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [logger, thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;