import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfigAuth from '../utils/getConfigAuth';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCartG: (state, action) => action.payload,
    // agregando prudctos median te logica
    addProductCartG: (state, action) => [...state, action.payload],
    // eliminados productos mediante logica del filter
    // se genera comparacion de los producto que no debe pasar
    deleteProductCartG: (state, action) => {
      return state.filter(prod => prod.id !== action.payload.id);
    },
  },
});

export const { setCartG, addProductCartG, deleteProductCartG } = cartSlice.actions;

export default cartSlice.reducer;

const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart';

export const getCartThunk = () => dispatch => {
  const url = baseUrl;
  axios
    .get(url, getConfigAuth())
    .then(res => dispatch(setCartG(res.data)))
    .catch(error => console.log(error));
};

export const postCartThunk = prod => dispatch => {
  const url = baseUrl;

  const data = {
    quantity: 1,
    productId: prod.id
  };

  axios
    .post(url, data, getConfigAuth())
    .then(res => {
        console.log(res.data)
        dispatch(addProductCartG(res.data))})
    .catch(error => console.log(error));
};
