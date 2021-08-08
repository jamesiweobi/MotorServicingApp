import React, {useState} from 'react'
import Button from './Button'
import Card from './Card'
import Input from './Input'    
import InputGroup from './InputGroup'
import { EntryPage, PageHeader } from './entryPage'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import loginAsync from '../../redux/actions/loginAction'


const Login = () => {

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })
    
    
    const handleInput = (e) =>{
        const {name, value} = e.target

        setLoginInfo(inputDetails =>{
           return { ...inputDetails,
                   [name]: value
            }
        })
      
    }

    function validateForm() {
        return loginInfo.email.length > 0 && loginInfo.password.length > 0;
    }

    const state = useSelector(state => state.login)

    const submitLogin = (e) =>{
        e.preventDefault()
       
        dispatch(loginAsync(loginInfo))
        setIsLoading(state.isLoading)
        setErrorMessage(state.error.data.message)
        // setLoginInfo({
        // email: '',
        // password: ''})

       
    }

    return (
        <EntryPage>
            <PageHeader to="/"> 
                Motorify
                <i className='fas fa-car' />
            </PageHeader>
            <Card>
                <h1>Login</h1>


                <form >
                    <InputGroup>  
                        <label >Email address</label>
                        <Input name='email' value={loginInfo.email} onChange={handleInput} autoComplete='off' type="email" placeholder="Enter email" id="login-email" />
                    </InputGroup>

                    <InputGroup>  
                        <label>Password</label>

                    
                        <Input name='password' value={loginInfo.password} onChange={handleInput} autoComplete='off' type="password" placeholder="Enter password" id="login-password" />
                    </InputGroup>
                
                    {isLoading ? <p className='errorMessage'> Loading...</p> : <p className='errorMessage'> {errorMessage && JSON.stringify(errorMessage)} </p> }

                    <Button type="submit"onClick={submitLogin} disabled={!validateForm()}>Login</Button>
                    {/* <Button type="submit"onClick={submitLogin} >Login</Button> */}

                   
                </form>
                <span>
                    Don't have an account? 
                    <Link to='/sign-up'>  Signup</Link> 
                </span>
                
            </Card>
        </EntryPage>
    )
}

export default Login
