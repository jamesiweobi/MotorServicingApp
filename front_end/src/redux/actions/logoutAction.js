import {LOG_OUT} from './actionType.js'

const logoutRequest = () => ({
    type: LOG_OUT
})



const logoutFunction = () => {

        dispatch(logoutRequest())
        localStorage.setItem('token', "null")
}

export default logoutFunction