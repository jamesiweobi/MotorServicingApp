import React, { useState, useEffect} from 'react';
import Button from './Button'
import Card2 from './card2'
import Input from './Input'    
import InputGroup from './InputGroup'
import { EntryPage, PageHeader } from './entryPage'
import { Link, useHistory } from 'react-router-dom'
import './css/entryPage.css'
import { AiOutlineEye, AiFillEye } from 'react-icons/ai';
import signupAsync from '../../redux/actions/signupAction.js'
import { useDispatch, useSelector } from 'react-redux';



const Signup = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const [inputType, setInputType] = useState('password');
    const[signupInfo, setSignupInfo] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        repeatPassword : ''
    });
//state.signup.error.data
    const state = useSelector(state => state.signup)
   
    // redirect users to service page after signup
    // useEffect(()=> {
    //     if(state){
    //         history.push('/services')
    //     }
    // }, [state])

 
   const handleInput = (e) =>{
    const {name, value} = e.target

    setSignupInfo(inputDetails =>{
       return { ...inputDetails,
               [name]: value
              }
    })
   }

//    const validateConfirmPassword = () =>{
//     if (signupInfo.password === signupInfo.confirmPassword){
//         return {
//             isMatch: true,
//             confirmPassword: 'match'
//         }
//     }   
//     return{
//         isMatch: false,
//         confirmPassword: 'not a match'
//     }
//     }

   const submitLogin = (event) =>{
    event.preventDefault()
    event.stopPropagation()
   

    setError(state.error.data.message)
    setIsLoading(state.isLoading)
    // const passwordMatch = validateConfirmPassword()
    // if(passwordMatch.isMatch === false){
    //     return setError({
    //         ...error,
    //         passwordMatch,
    //     })
    // }

         //call signup action
        dispatch(signupAsync(signupInfo))
        setSignupInfo({
            firstName : '',
            lastName : '',
            email : '',
            password : '',
            repeatPassword : ''
        })
    
 
    }
    


    return (
        <EntryPage>
        {/* <PageHeader to="/"> 
            Motorify
            <i className='fas fa-car' />
        </PageHeader> */}

        <Card2>

            <h1>Sign up</h1>
            <form onSubmit ={submitLogin}>
                <InputGroup>  
                    <label>First Name</label>
                    <Input name='firstName'  value={signupInfo.firstName} onChange= {handleInput}  autoComplete='off' type="text" placeholder="First Name" id="signup-firstname" />
                </InputGroup>

                <InputGroup>  
                    <label>Last Name</label>
                    <Input name='lastName'  value={signupInfo.lastName} onChange= {handleInput} autoComplete='off' type="text" placeholder="Last Name" id="signup-lastname" />
                </InputGroup>

                <InputGroup>  
                    <label>Email Address</label>
                    <Input name='email'  value={signupInfo.email} onChange= {handleInput} autoComplete='off' type="email" placeholder="Enter email" id="signup-email" />
                </InputGroup>
                  
                <InputGroup>  
                    <div className="label-eye-wrapper">
                        <label name='password'  value={signupInfo.password} onChange= {handleInput} autoComplete='off'>Password</label>
                        {inputType === "password" 
                            ? 
                            <AiOutlineEye onClick={() => setInputType('text')} />
                            : 
                            <AiFillEye onClick={() => setInputType('password')} />
                        }
                    </div>
                   
                    <Input name='password'  value={signupInfo.password} onChange= {handleInput} autoComplete='off'
                        type={inputType} placeholder="Enter password" id="signup-password" />
                </InputGroup>
                <InputGroup>  
                    <label>Confirm Password</label>
                    <Input name='repeatPassword'  value={signupInfo.repeatPassword} onChange= {handleInput} autoComplete='off'
                    type="password" placeholder="Confirm email" id="signup-confirmPassword" />
                </InputGroup>
 
         {isLoading ? <p className='errorMessage'> Loading...</p>  : <p className='errorMessage'> {error && JSON.stringify(error)} </p> }

           
                <Button type="submit">Sign Up</Button>
               
            </form>
            <span>
                Already have an account? 
                <Link to='/login'>  Login</Link> 
            </span>
            
        </Card2>
    </EntryPage>
    )
}

export default Signup
