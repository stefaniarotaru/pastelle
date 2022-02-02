import React, {useState, useEffect} from "react";
import Login from "./Login";
import Register from "./Register";
import LoginRegisterBtn from "./LoginRegisterBtn";

const LoginRegisterModal = () => {

    const [value, setValue] = useState('login');

    const toggle = (value) => {
            setValue(value)
    }
    

  return (
    <div
      className="absolute
                        rounded-lg
                        bg-white
                        shadow-2xl
                        md:right-44
                        right-12
                        mt-7
                        w-80
                        "
    >
      <div className="flex justify-evenly mt-8">
        <div  onClick={() => toggle('login')}>
          <LoginRegisterBtn text="Sign In"/>
          </div>

        <div onClick={() => toggle('register')}>
          <LoginRegisterBtn text="Register"/>
          </div>
      </div>

      {value === 'login' && (<Login/>)}
      {value === 'register' && (<Register/>)}

    </div>
  );
};

export default LoginRegisterModal;
