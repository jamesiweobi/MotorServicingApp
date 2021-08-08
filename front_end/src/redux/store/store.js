import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/Reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [logger, thunk]

//get user from local storage and save in the store

const userIdFromLocalStorage = localStorage.getItem('id')
?  localStorage.getItem('id') : null;

const loginUserIdFromLocalStorage = localStorage.getItem('loginId') 
? localStorage.getItem('loginId'): null;


const initialState = {
         signup   : { user_id : userIdFromLocalStorage,
                     data: {},
                    isLoading:false,
                    error: {
                                data:{ message: ''} 
                            }
         },

         login    : { user_id : loginUserIdFromLocalStorage,
            data: {},
           isLoading:false,
           error: {
                       data:{ message: ''} 
                   }
},
        }


const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;