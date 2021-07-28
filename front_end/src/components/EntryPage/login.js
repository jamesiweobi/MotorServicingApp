import React,{ useState } from 'react'
import Button from './Button'
import Card from './Card'
import Input from './Input'    
import InputGroup from './InputGroup'
import { EntryPage, PageHeader } from './entryPage'
import { Link } from 'react-router-dom'
// import './css/entryPage.css'

const Login = () => {

   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
      
        // try {
        //   await authenticate(email, password);
        //   alert("Logged in");
        // } catch (e) {
        //   alert(e.message);
        // }
      }
    
    
    return (
        <EntryPage>
            <PageHeader to="/"> 
                Motorify
                <i className='fas fa-car' />
            </PageHeader>
            <Card>
                <h1>Login</h1>
                <form onSubmit ={handleSubmit}>
                    <InputGroup>  
                        <label >Email address</label>
                        <Input 
                            autoFocus
                            type="email" 
                            placeholder="Enter email" 
                            id="login-email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    </InputGroup>

                    <InputGroup>  
                        <label>Password</label>
                        <Input 
                            type="password" 
                            placeholder="Enter password" 
                            id="login-password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputGroup>
                      
                    
                    <Button type="submit" disabled={!validateForm()} >Login</Button>
                   
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
