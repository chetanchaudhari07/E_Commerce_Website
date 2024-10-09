import { collection, doc,setDoc } from "firebase/firestore";
import { firestore } from "./firebase";


// const testAddProduct = async () => {
//     const product = {
//       name: 'Test Product',
//       price: 150,
//       createdDate: new Date(),
//       category: 'Test Category',
//     };
  
//     try {
//       const productRef = doc(collection(firestore, 'products'));
//       await setDoc(productRef, product);
//       console.log('Product added successfully');
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };
  
//   testAddProduct();


export const handleAddProduct = (product) => {
    return new Promise((resolve, reject) => {
      console.log('Adding product:', product); 
      const productRef = doc(collection(firestore, 'products')); 
  
      setDoc(productRef, product)
        .then(() => {
          console.log('Product added successfully!');
          resolve();
        })
        .catch(err => {
          console.error('Error adding product:', err); 
          reject(err);
        });
    });
  };
  
  export const handleFetchProducts = ({ filterType, startAfterDoc, persistProducts=[] }) => {
    return new Promise((resolve, reject) => {
      const pageSize = 6;
  
      let ref = firestore.collection('products').orderBy('createdDate').limit(pageSize);
  
      if (filterType) ref = ref.where('productCategory', '==', filterType);
      if (startAfterDoc) ref = ref.startAfter(startAfterDoc);
  
      ref
        .get()
        .then(snapshot => {
          const totalCount = snapshot.size;
  
          const data = [
            ...persistProducts,
            ...snapshot.docs.map(doc => {
              return {
                ...doc.data(),
                documentID: doc.id
              }
            })
          ];
  
          resolve({
            data,
            queryDoc: snapshot.docs[totalCount - 1],
            isLastPage: totalCount < 1
          });
        })
        .catch(err => {
          reject(err);
        })
    })
  }
  
  export const handleDeleteProduct = documentID => {
    return new Promise((resolve, reject) => {
      firestore
        .collection('products')
        .doc(documentID)
        .delete()
        .then(() => {
          console.log(documentID, 2)
          resolve();
        })
        .catch(err => {
          reject(err);
        })
    });
  }
  
  export const handleFetchProduct = (productID) => {
    return new Promise((resolve, reject) => {
      firestore
        .collection('products')
        .doc(productID)
        .get()
        .then(snapshot => {
  
          if (snapshot.exists) {
            resolve({
              ...snapshot.data(),
              documentID: productID
            });
          }
        })
        .catch(err => {
          reject(err);
        })
    })
  }