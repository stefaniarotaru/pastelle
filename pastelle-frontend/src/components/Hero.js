import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="bg-pink-200 h-screen flex 
        flex-col justify-center items-center">
            <h1 className="lg:text-9xl 
                           md:text-7xl 
                           sm:text-5xl 
                           text-3xl font-black mb-14 ">
                                Blalalala
                           </h1>
            <Link className="py-6 px-10 
                             bg-pink-500 
                             rounded-full  
                             text-3xl 
                             hover:bg-green-200 
                             transition duration-300 
                             ease-in-out 
                             flex items-center">
                asdf
                <svg class="w-6 h-6 ml-4" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24" 
                     xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" 
                              stroke-linejoin="round" 
                              stroke-width="2" 
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z">
                        </path>
                </svg>
            </Link>
        </div>  
    )
}

export default Hero
