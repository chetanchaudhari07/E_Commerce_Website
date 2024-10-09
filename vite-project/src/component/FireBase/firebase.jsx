import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore , doc , getDoc , setDoc , collection } from 'firebase/firestore';
import {firebaseConfig} from './firebaseConfig'







const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const firestore = getFirestore(app);

export { app, };


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const handleUserProfile = async (userAuth, additionalData ={}) => {
    if (!userAuth) return;

    const { uid } = userAuth;
    const userRef = doc(firestore, 'users', uid); 
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const timestamp = new Date();

        try {
           
            await setDoc(userRef, {
                displayName:additionalData.name || displayName || 'Anonymous',
                email,
                member: additionalData.member !== undefined ? additionalData.member : true,
                role :'user',
                createDate: timestamp,
                
            });
        } catch (error) {
            console.error('Error creating user document', error);
        }
    }
    return userRef;
};
