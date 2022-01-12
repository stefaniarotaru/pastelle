import React, {useState, useEffect} from "react";
import Login from "./Login";
import Register from "./Register";

const LoginRegisterModal = () => {

    const [value, setValue] = useState('login');

    const toggle = (value) => {
            setValue(value)
    }
    

  return (
    <div
      className="absolute
                        rounded-lg
                        bg-green-200
                        right-44
                        top-[20rem]
                        w-80
                        h-80"
    >
      <div className="flex justify-evenly mt-8">
        <button className="bg-blue-200" onClick={() => toggle('login')}>Sign In</button>
        <button className="bg-red-400" onClick={() => toggle('register')}>Register</button>
      </div>

      {value === 'login' && (<Login/>)}
      {value === 'register' && (<Register/>)}

    </div>
  );
};

export default LoginRegisterModal;
