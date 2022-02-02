import React, { useState } from 'react'
import UserInput from './UserInput'
import MediaIcons from './MediaIcons'
import axios from 'axios'
import verifyUserToken from '../services/UserCheck'

const Register = () => {

    const registerUrl = 'http://localhost:8080/api/v1/registration';
    const role = ['USER']

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateFirstName = (e) => {
        console.log(e.target.value);
        setFirstName(e.target.value)};

    const updateLastName = (e) => setLastName(e.target.value);
    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);

    const register = () => {
        axios.post(registerUrl, {firstName, lastName, email, password, role})
        .then((res) => {
            console.log("registered successfully")
        })
    }

    return (
        <div>
            <div className='mt-8
                            grid
                            place-items-center
                            gap-y-6'>
                
                <UserInput placeholder="First Name" 
                           type="text" 
                           value={firstName}
                           onChange={updateFirstName}/>

                <UserInput placeholder="Last Name" 
                           type="text" 
                           value={lastName}
                           onChange={updateLastName}/>

                <UserInput placeholder="Email" 
                           type="text" 
                           value={email}
                           onChange={updateEmail}/>


                <UserInput placeholder="Password" 
                           type="password" 
                           value={password}
                           onChange={updatePassword}/>
                
                <button className="bg-pink-300
                           text-white
                           focus:shadow-lg
                           hover:shadow-lg
                           hover:bg-pink-400
                           rounded-md
                           w-60
                           px-3
                           py-2"
                        type="submit"
                        onClick={register}>Register</button>
            </div>

            <hr className='border-1 w-full mt-8' />
            <p className='text-center mt-4 text-sm text-pink-800'>
                Or continue with...
            </p>
            <MediaIcons />
        </div>
    )
}

export default Register
