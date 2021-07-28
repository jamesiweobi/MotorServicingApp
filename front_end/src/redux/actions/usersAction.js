import {USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE} from './actionType.js'
import axios from 'axios'


const RegisterUser = (firstName, lastName, email, password, repeatPassword) => {
     return async dispatch => {
            try{
                dispatch({
                    type: USER_REGISTER_REQUEST
                })
    
                //make api call
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
           
                const {newUser} = await axios.post('/signup',{
                    firstName,
                    lastName,
                    email,
                    password,
                    repeatPassword
                }, config)
                
                dispatch({
                    type: USER_REGISTER_SUCCESS,
                    payload: data
                });
                
            }
            catch(error){
                dispatch({
                    type: USER_REGISTER_FAILURE,
                    payload: error.res && error.newUser.message
                })
            }
     }
  

     
 }
 export default RegisterUser