import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({toggle}) => {
    return (
        <nav className="fixed 
                        flex 
                        justify-between 
                        items-center 
                        h-16 bg-white 
                        text-black 
                        z-50
                        shadow-sm 
                        font-mono
                        inset-x-0
                        top-0" 
              role="navigation">
                
            <Link to="/" className="pl-8 text-pink-400 text-4xl font-body flex">
            Pastelle</Link>

            <div className= "px-4 cursor-pointer md:hidden"
            onClick={toggle}>
                <svg
          className='w-8 h-8'
          fill='none'
          stroke='pink'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>   
                </div>
              <div className="pr-8 md:block hidden">
                <Link className="p-4 hover:text-pink-400 text-green-500" to="/sale">SALE</Link>
                <Link className="p-4 hover:text-pink-400" to="/new">NEW ARRIVALS</Link>
                <Link className="p-4 hover:text-pink-400" to="/apparel">APPAREL</Link>
                <Link className="p-4 hover:text-pink-400" to="/accessories">ACCESSORIES</Link>
                </div>  
        </nav>
    )
}

export default Navbar
