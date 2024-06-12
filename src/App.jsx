import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/shared/Header';
import './App.css';

// Routes Pages
import Home from './pages/Home';
import ProductId from './pages/ProductIdPage';
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage';

// Thunk
import { getCartThunk } from './slices/cart.slice';
import { getAllProductsThunk } from './slices/products.slice';

function App() {
  const dispatch = useDispatch();

  // Get all Products when the app is loaded
  useEffect(() => {
    dispatch(getAllProductsThunk());
    dispatch(getCartThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductId />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
