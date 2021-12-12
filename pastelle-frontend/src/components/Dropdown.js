import React from 'react'
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={
            isOpen 
            ? "grid grid-rows-4 text-center items-center bg-green-100 my-20" 
            : "hidden"}
            onClick={toggle}>
            <Link className="p-4 hover:bg-pink-100 transition duration-300 text-pink-500" to="/sale">SALE</Link>
            <Link className="p-4 hover:bg-pink-100 transition duration-300" to="/new">NEW ARRIVALS</Link>
            <Link className="p-4 hover:bg-pink-100 transition duration-300" to="/apparel">APPAREL</Link>
            <Link className="p-4 hover:bg-pink-100 transition duration-300" to="/accessories">ACCESORIES</Link>

        </div>
    )
}

export default Dropdown
