import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Home from './components/Home';
import ProductsApi from './components/ProductsApi'
import UsersApi from './components/UsersApi'
import CategoriasApi from './components/categoriesApi';
import CountApi from './components/productsCount';




function App() {
  return (
    <div>
        <Home/>
        <hr/>
        <section className='flexRow'>
        <ProductsApi/>
        <UsersApi/>
        <CategoriasApi/> 
        </section>
        <CountApi/>
    </div>
  );
}

export default App;
