
    import Categories from './pages/Categories'
    import Products from './pages/Products'
    import Product from './pages/Product'
    import Header from './pages/Header'
    import './App.css';
    import E404 from './pages/E404';
    import Cart from './Cart'
    import { Route, Routes } from 'react-router-dom';
    //import { useContext } from 'react';
   // const usercontext=useContext()
    function App() {
      return (
        <div className="App">
          <Header />
          <div className='main'>
          <Cart />
          <Routes>
            <Route path='/' element={<Categories />} />
            <Route path='/Products/:item' element={<Products />} />
            <Route path='/Product/:id' element={<Product />} />
            <Route path='/*' element={<E404 />} />
          </Routes>
          </div>
    </div>
  );
}

export default App;
