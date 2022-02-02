import React from 'react'
import UserInput from './UserInput'
import MediaIcons from './MediaIcons'
import { useState } from 'react/cjs/react.development'
import axios from 'axios'
import verifyUserToken from '../services/UserCheck'

const Login = () => {
    const loginUrl = 'http://localhost:8080/login'

    const [loginStatus, setLoginStatus] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);

    const login = () => {
        axios.post(loginUrl, { email: email, password: password })
            .then((res) => {
                console.log(res.data)
                localStorage.setItem("user", JSON.stringify(res.data.email))
                localStorage.setItem("token", JSON.stringify(res.data.accessToken))
                if (res.data.message) {
                    setLoginStatus(false)
                } else {
                    console.log("logged in as: ", email)
                }
            })
    }
    return (
        <div>
            <div className='mt-8
                        grid
                        place-items-center
                        gap-y-6'>
                <UserInput placeholder="Email"
                    type="text"
                    value={email}
                    onChange={updateEmail} />


                <UserInput placeholder="Password"
                    type="password"
                    value={password}
                    onChange={updatePassword} />

                <button className="bg-pink-300
                           text-white
                           focus:shadow-lg
                           hover:shadow-lg
                           hover:bg-pink-400
                           rounded-md
                           w-60
                           px-3
                           py-2"
                    type='submit'
                    onClick={login}>Sign In</button>

                <p className='text-sm'>Forgot password?</p>
            </div>

            <hr className='border-1 w-full mt-8' />
            <p className='text-center mt-4 text-sm text-pink-800'>
                Or continue with...
            </p>
            <MediaIcons />
        </div>
    )
}

export default Login
