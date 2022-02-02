import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Apparel from './pages/Apparel';
import Accessories from './pages/Accessories';
import Sale from './pages/Sale';
import NewArrivals from './pages/NewArrivals';
import Admin from './pages/Admin';
import FormAttempt from './components/FormAttempt';
import Subcategory from './components/Subcategory';

function App() {
  
  return (
    <div className='flex flex-col min-h-screen'>
      <Router>
        <Route exact path="/"><Home/></Route>
        <Route path="/product/:id"><Product/></Route>
        <Route path ="/apparel"><Apparel/></Route>
        <Route path ="/accessories"><Accessories/></Route>
        <Route path ="/sale"><Sale/></Route>
        <Route path ="/new"><NewArrivals/></Route>
        <Route path="/admin"><Admin/></Route>
        <Route path="/attempt"><FormAttempt/></Route>
        <Route path="/subcategory/:subcategory"><Subcategory/></Route>
      </Router>

    </div>
  );
}

export default App;
