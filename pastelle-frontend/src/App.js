import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewArrivals from './pages/NewArrivals';
import Admin from './pages/Admin';
import Subcategory from './components/Subcategory';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import UserPage from './pages/UserPage';
import ProductsWithFilters from './pages/ProductsWithFilters';
import types from './components/Types';

function App() {

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
    <div className='flex flex-col min-h-screen'>

      <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />

        <Route exact path="/"><Home /></Route>
        <Route path="/product/:id"><Product /></Route>
        <Route path="/accessories"><ProductsWithFilters defaultFilter={'category:accessories'} filterTypes={types.slice(5)} title={'Accessories'}/></Route>
        <Route path="/apparel"><ProductsWithFilters defaultFilter={'category:apparel'} filterTypes={types.slice(0, 5)} title={'Apparel'}/></Route>
        <Route path="/sale"><ProductsWithFilters defaultFilter={'sale:true'} filterTypes={types} title={'Sale'}/></Route>
        <Route path="/new"><NewArrivals /></Route>
        <Route path="/admin"><Admin /></Route>
        <Route path="/subcategory/:subcategory"><Subcategory /></Route>
        <Route path="/user"><UserPage /></Route>


        <Footer/>
      </Router>

    </div>
  );
}

export default App;
