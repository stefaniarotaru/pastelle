import React from 'react';
import '../App.css';
import Slider from '../components/Slider';
import Items from '../components/Items';

function Home() {
  return (
    <div className="Home">
      <Slider />
      <div className="my-20 container mx-auto p-5">
        <div className='mb-8 flex flex-row gap-x-8'>

          <div className='flex flex-row items-center mx-2 gap-x-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#db2777">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
    </div>
  );
}

export default Home;
