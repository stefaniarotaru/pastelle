import React from 'react'

const UserInput = (props) => {
    // const placeholder = props.placeholder;
    // const type = props.type;
    
    return (
        <input type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            className='border
        focus:outline-none 
        focus:border-pink-200
        focus:ring-pink-200
        focus:shadow-lg
        block 
        rounded-md
        focus:ring-1
        px-10
        w-60
        h-8
        mx-auto
        text-center'/>
    )
}

export default UserInput
