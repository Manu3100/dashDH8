import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Link } from 'react-router-dom';

import Home from './components/Home';
import PetshopApi from './components/PetshopApi'



function App() {
  return (
    <div>
        <hr/>
        <Home />
        <PetshopApi/>
    </div>
  );
}

export default App;
