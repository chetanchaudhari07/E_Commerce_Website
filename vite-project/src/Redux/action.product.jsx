import { collection ,doc, setDoc  } from "firebase/firestore";
import { auth , firestore } from "../component/FireBase/firebase";

export const addProduct = (productData) => {
    return async (dispatch) => {
      try {
        const timestamp = new Date();
  
        const productRef = doc(collection(firestore, 'products'));
        await setDoc(productRef, {
          ...productData,
          productAdminUserUID: auth.currentUser.uid,
          createdDate: timestamp,
        });
  
        console.log('Product added successfully!');
       
  
      } catch (error) {
        console.error('Error adding product: ', error);
       
      }
    };
  };

