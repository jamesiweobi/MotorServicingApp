import {USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE} from '../actions/actionType.js'
import RegisterUser from '../actions/usersAction.js'

const userReducer = (state={}, action) =>{
    switch (action.type){
     case USER_REGISTER_REQUEST:
     return{
         loading: true,
     }
     case USER_REGISTER_SUCCESS:
         return{
             userInfo: action.payload
         }
         case USER_REGISTER_FAILURE:
         return{
             error: action.payload,
             loading:false
         }
         default: state
    }
}

export default userReducer