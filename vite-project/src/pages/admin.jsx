import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collection, doc,setDoc } from 'firebase/firestore';

import { auth ,firestore } from '../component/FireBase/firebase';
import { fetchProductsStart,  deleteProductStart } from '../Redux/action'
import FormSelect from '../component/Header/Form/FormSelect';
import FormInput from '../component/Header/Form/FormInput';





import Modal from '../component/Modal/Modal';
import LoadMore from '../component/LoadMore/LoadMore';
import './admin.css'


const mapState = (state) => {
    console.log(state);  // Debugging: Log entire state to inspect structure
    return {
        products: state.productsData?.products || {}
    };
};

function Admin() {
    const { products } = useSelector(mapState);
    const dispatch = useDispatch();
    const [hideModal, setHideModal] = useState(true);
    const [productCategory, setProductCategory] = useState('mens');
    const [productName, setProductName] = useState('');
    const [productThumbnail, setProductThumbnail] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productDesc, setProductDesc] = useState('');

    const { data, queryDoc, isLastPage } = products;

    useEffect(() => {
        
        dispatch(fetchProductsStart());
       
    }, [dispatch]);
    

    const toggleModal = () => setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    };

    const resetForm = () => {
        setHideModal(true);
        setProductCategory('mens');
        setProductName('');
        setProductThumbnail('');
        setProductPrice(0);
        setProductDesc('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!productName || !productThumbnail || productPrice <= 0) {
            alert('Please fill in all fields correctly.');
            return;
        }

        const timestamp = new Date();

   const productRef = doc(collection(firestore, 'products'));
      await setDoc(productRef, {
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDesc,
        productAdminUserUID: auth.currentUser.uid,
        createdDate: timestamp,
      });

      console.log('Product added successfully!');

        // dispatch(addProductStart({
        //     productCategory,
        //     productName,
        //     productThumbnail,
        //     productPrice,
        //     productDesc,
        // }));


        resetForm();




    };

    const handleLoadMore = () => {
       
        dispatch(fetchProductsStart({
            startAfterDoc: queryDoc,
            persistProducts: data
        }));
    };

    const configLoadMore = {
        onLoadMoreEvt: handleLoadMore
    };

    return (
        <div className="admin">

          
            <div className="callToActions">

                <button onClick={toggleModal}>
                    Add new product
                </button>

            </div>

           
            <Modal {...configModal}>
                <div className="addNewProductForm">
                    <form onSubmit={handleSubmit}>
                        <h2>Add new product</h2>

                        <FormSelect
                            label="Category"
                            options={[
                                { value: "mens", name: "Mens" },
                                { value: "womens", name: "Womens" },
                                { value: "kids", name: "kids" },
                                { value: "baby", name: "baby" },
                                { value: "sport", name: "sport" },
                            ]}
                            handleChange={e => setProductCategory(e.target.value)}
                        />

                        <FormInput
                            label="Name"
                            type="text"
                            value={productName}
                            handleChange={e => setProductName(e.target.value)}
                        />

                        <FormInput
                            label="Main image URL"
                            type="url"
                            value={productThumbnail}
                            handleChange={e => setProductThumbnail(e.target.value)}
                        />

                        <FormInput
                            label="Price"
                            type="number"
                            min="0.00"
                            max="10000.00"
                            step="0.01"
                            value={productPrice}
                            handleChange={e => setProductPrice(e.target.value)}
                        />

                        <textarea
                            onChange={(e) => setProductDesc(e.target.value)}
                        />

                        <br />

                        <button type="submit">
                            Add product
                        </button>
                    </form>
                </div>
            </Modal>

           
            <div className="manageProducts">
                <table>
                    <tbody>
                        <tr>
                            <th><h1>Manage Products</h1></th>
                        </tr>
                        <tr>
                            <td>
                                <table className="results">
                                    <tbody>
                                        {(Array.isArray(data) && data.length > 0) ? (
                                            data.map((product) => {
                                                const { productName, productThumbnail, productPrice, documentID } = product;
                                                return (
                                                    <tr key={documentID}>
                                                        <td><img className="thumb" src={productThumbnail} alt={productName} /></td>
                                                        <td>{productName}</td>
                                                        <td>£{productPrice}</td>
                                                        <td>
                                                            <button onClick={() => dispatch(deleteProductStart(documentID))}>Delete</button>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr>
                                                <td colSpan="4">No products found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {!isLastPage && (
                                    <LoadMore {...configLoadMore} />
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default Admin