import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  
  return (
    <div>
      <Router>
        <Route exact path="/"><Home/></Route>
        <Route path="/product/:id"><Product/></Route>
        <Route path ="/apparel"></Route>
        <Route path ="/accessories"></Route>
        <Route path ="/sale"></Route>
        <Route path ="/new"></Route>
      </Router>

    </div>
  );
}

export default App;
