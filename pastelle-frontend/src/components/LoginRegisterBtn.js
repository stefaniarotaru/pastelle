import React, { useState } from 'react'

const LoginRegisterBtn = (props) => {
    const text = props.text;

    return (
        <div>
            <button className="bg-pink-300
                           text-white
                           focus:shadow-lg
                           hover:shadow-lg
                           hover:bg-pink-400
                           rounded-md
                           p-3">{text}</button>
            
        </div>
    )
}

export default LoginRegisterBtn
