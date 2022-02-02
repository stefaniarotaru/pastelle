import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import '../App.css';
import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Items from '../components/Items';
import ColorsCheck from '../components/ColorsCheck';




function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('i resizedd')
      }
    }
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })


  return (
    <div className="Home">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Slider />


      <div className="my-20 container mx-auto p-5">
        <div className='mb-8 flex flex-row gap-x-8'>

          <div className='flex flex-row items-center mx-2 gap-x-1'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#db2777">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type='text' className='rounded-lg' placeholder='Search' />
          </div>

          <select className='rounded-lg'>
            <option>Filter</option>
            <option>Price ascending</option>
            <option>Price descending</option>
            <option>Newest</option>
          </select>

        </div>
        <Items />
      </div>

      <Footer />

    </div>
  );
}

export default Home;
