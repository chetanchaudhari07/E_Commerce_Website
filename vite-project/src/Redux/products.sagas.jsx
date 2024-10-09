import { auth } from './../component/FireBase/firebase';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setProducts, setProduct, fetchProductsStart } from './action'
import { handleAddProduct, handleFetchProducts,handleFetchProduct, handleDeleteProduct } from './../component/FireBase/addProduct';


import productsTypes from '../Redux/product.types';

export function* addProduct({ payload }) {
    try {
      console.log('Saga addProduct triggered:', payload); 
  
      const timestamp = new Date();
      yield handleAddProduct({
        ...payload,
        productAdminUserUID: auth.currentUser.uid,
        createdDate: timestamp
      });
      yield put(fetchProductsStart());
  
    } catch (err) {
      console.error('Error adding product:', err);
    }
  }

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts({ payload }) {
  try {
    const products = yield handleFetchProducts(payload);
    yield put(
      setProducts(products)
    );

  } catch (err) {
    
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload);
    yield put (
      fetchProductsStart()
    );

  } catch (err) {
   
  }
}

export function* onDeleteProductStart() {
  yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct);
}

export function* fetchProduct({ payload }) {
  try {
    const product = yield handleFetchProduct(payload);
    yield put(
      setProduct(product)
    );

  } catch (err) {
   
  }
}

export function* onFetchProductStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchProduct);
}

export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
    call(onFetchProductStart),
  ])
}