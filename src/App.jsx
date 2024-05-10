import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

// Routes Pages
import Home from './pages/Home';
import { useEffect } from 'react';
import { getAllProductsThunk } from './slices/products.slice';

function App() {
  const dispatch = useDispatch();

  // Get all Products when the app is loaded
  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, []);
  


  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
