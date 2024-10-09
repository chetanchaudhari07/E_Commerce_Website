import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';
import {app} from '../component/FireBase/firebase'


export const FETCH_COFFEE_SUCCESS = 'FETCH_COFFEE_SUCCESS';
export const FETCH_COFFEE_ERROR = 'FETCH_COFFEE_ERROR';

// Action types for Signup
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// Action types for Register
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Action types for Login
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

import productsTypes from "./product.types";

// fetch product
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';


export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const db = getFirestore(app); 
      const productList = [];

      
      const querySnapshot = await getDocs(collection(db, 'products'));

      
      querySnapshot.forEach((doc) => {
        productList.push({ id: doc.id, ...doc.data() });
      });

      
      dispatch(fetchProductsSuccess(productList)); 
    } catch (error) {
     
      dispatch(fetchProductsError(error.message)); 
    }
  };
};




export const fetchCoffeeSuccess = (coffee) => ({
  type: FETCH_COFFEE_SUCCESS,
  payload: coffee,
});

export const fetchCoffeeError = (error) => ({
  type: FETCH_COFFEE_ERROR,
  payload: error,
});


export const fetchCoffee = (sortOrder) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`);

      if (!response.ok) {
       
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      dispatch(fetchCoffeeSuccess(data.data)); 
    } catch (error) {
      dispatch(fetchCoffeeError(error.message)); 
    }
  };
};




// Signup action creators
export const signupRequest = (userData) => ({
    type: SIGNUP_REQUEST,
    payload: userData,
  });
  
  export const signupSuccess = (response) => ({
    type: SIGNUP_SUCCESS,
    payload: response,
  });
  
  export const signupFailure = (error) => ({
    type: SIGNUP_FAILURE,
    payload: error,
  });
  
  // Register action creators
  export const registerRequest = (userData) => ({
    type: REGISTER_REQUEST,
    payload: userData,
  });
  
  export const registerSuccess = (response) => ({
    type: REGISTER_SUCCESS,
    payload: response,
  });
  
  export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error,
  });
  
  // Login action creators
  export const loginRequest = (credentials) => ({
    type: LOGIN_REQUEST,
    payload: credentials,
  });
  
  export const loginSuccess = (response) => ({
    type: LOGIN_SUCCESS,
    payload: response,
  });
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });


//  Product

  // export const addProductStart = productData => ({
  //   type: productsTypes.ADD_NEW_PRODUCT_START,
  //   payload: productData
  // });
  
  // export const fetchProductsStart = (filters={}) => ({
  //   type: productsTypes.FETCH_PRODUCTS_START,
  //   payload: filters
  // });

  export const fetchProductsStart = () => {
    return async (dispatch) => {
      try {

        const firestore = getFirestore(app)
       
        const q = query(collection(firestore, 'products'), orderBy('createdDate', 'desc'), limit(10));  
        const querySnapshot = await getDocs(q);
        const productsArray = [];
  
        querySnapshot.forEach((doc) => {
          productsArray.push({
            documentID: doc.id,
            ...doc.data(),
          });
        });
  
        dispatch({
          type: 'SET_PRODUCTS',
          payload: productsArray,
        });
      } catch (err) {
        console.error("Error fetching products: ", err);
      }
    };
  };
  
  export const setProducts = products => ({
    type: productsTypes.SET_PRODUCTS,
    payload: products
  });
  
  export const deleteProductStart = productID => ({
    type: productsTypes.DELETE_PRODUCT_START,
    payload: productID
  });
  
  export const fetchProductStart = productID => ({
    type: productsTypes.FETCH_PRODUCT_START,
    payload: productID
  });
  
  export const setProduct = product => ({
    type: productsTypes.SET_PRODUCT,
    payload: product
  });


  // Cart Actions

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};
  
