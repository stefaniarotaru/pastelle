import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import '../App.css';
import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Items from '../components/Items';



function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
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
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Slider/>
      <Items/>

      <Footer/>
    </div>
  );
}

export default Home;
