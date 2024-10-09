import { combineReducers } from 'redux';
import { FETCH_COFFEE_SUCCESS, FETCH_COFFEE_ERROR } from './action';

// form
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from './action'
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './action'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './action'
import { FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_ERROR } from './action';

// Product Types

import productsTypes from './product.types';

// cart

import { ADD_TO_CART, REMOVE_FROM_CART } from './action';

//////////////////////////////


// all product fetch in pickup

const initialState = {
  productList: [],
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        error: null,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        productList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};


// dummuy cofee 

const initialStatecofee = {
  coffeeList: [],
  error: null,
};

const coffeeReducer = (state = initialStatecofee, action) => {
  switch (action.type) {
    case FETCH_COFFEE_SUCCESS:
      return {
        ...state,
        coffeeList: action.payload,
        error: null,
      };
    case FETCH_COFFEE_ERROR:
      return {
        ...state,
        coffeeList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// for form

// for sign up

const initialStateForm = {
    loading : false,
    userData : null,
    error : null,
}

const signupReducer = (state = initialStateForm, action) => {
    switch (action.type) {
      case SIGNUP_REQUEST:
        return { ...state, loading: true };
      case SIGNUP_SUCCESS:
        return { ...state, loading: false, userData: action.payload };
      case SIGNUP_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

//   for register form

const initialStateRegister = {
    loading: false,
    registeredData: null,
    error: null,
  };
  
  const registerReducer = (state = initialStateRegister, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        return { ...state, loading: true };
      case REGISTER_SUCCESS:
        return { ...state, loading: false, registeredData: action.payload };
      case REGISTER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

//   for Login

  const initialStateLogin = {
    loading: false,
    userInfo: null,
    error: null,
  };
  
  const loginReducer = (state = initialStateLogin, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, loading: true };
      case LOGIN_SUCCESS:
        return { ...state, loading: false, userInfo: action.payload };
      case LOGIN_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };







  const INITIAL_STATE = {
    products: [],
  };
  
  const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };
  
      default:
        return state;
    }
  };


  // Cart Reducer


  const initialCartState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
      default:
        return state;
    }
  };



  const rootReducer = combineReducers({
    products:productReducer,
    coffee: coffeeReducer, 
    SignUp : signupReducer,
    register : registerReducer,
    login : loginReducer,
    productsReducer : productsReducer,
    cart:cartReducer,

  });




export default rootReducer;
