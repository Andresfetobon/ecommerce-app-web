import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllProductsThunk } from './slices/products.slice';
import { useEffect } from 'react';
import './App.css';

// Routes Pages
import Home from './pages/Home';
import ProductId from './pages/ProductIdPage';

function App() {
  const dispatch = useDispatch();

  // Get all Products when the app is loaded
  useEffect(() => {
    dispatch(getAllProductsThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductId />} />
      </Routes>
    </div>
  );
}

export default App;
