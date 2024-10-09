import React, { useEffect, useState } from 'react'
import { auth, handleUserProfile } from '../src/component/FireBase/firebase'


import { BrowserRouter as Router, Routes, Route, Navigate, replace } from 'react-router-dom'
import Header from './component/Header/header'
import Footer from './component/Footer/footer'
import Home from './pages/home'
import Ladies from './pages/ladies'
import Men from './pages/men'
import Baby from './pages/baby'
import Sport from './pages/sport'
import Sustainability from './pages/sustainability'
import Sale from './pages/sale'
import Kids from './pages/kids'

import Admin from './pages/admin'
import AllProduct from './component/Allproduct/allProduct'
import MensProduct from './component/Allproduct/mensProduct'
import WomenProduct from './component/Allproduct/womensProduct'
import KidsProduct from './component/Allproduct/kidsProduct'
import BabyProduct from './component/Allproduct/babysProduct'
import SportsProduct from './component/Allproduct/sportsProduct'
import Cart from './pages/CartPage/cart'



import './App.css'
import { getDoc } from 'firebase/firestore'



const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState('user')
  const [redirectToAdmin, setRedirectToAdmin] = useState(false);
  // const [redirectToHome, setRedirectToHome] = useState(false);



  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);

        
        const userSnapshot = await getDoc(userRef);
        const userData = {
          id: userSnapshot.id,
          ...userSnapshot.data(),
        };
        setCurrentUser(userData);

        // Check for admin role
        if (userData.role === 'Admin') {
          setUserRole('Admin');
          setRedirectToAdmin(true); 
        } else {
          setUserRole('user');
        }
      } else {
        setCurrentUser(null);
        setRedirectToAdmin(false);
      }
    });

    return () => {
      authListener();
    };
  }, []);



  return (
    <>
       <div>

       <Router >
      <div>
        <Header currentUser={currentUser}  />
        <Routes>
          <Route
            path="/admin"
            element={userRole === 'Admin' ? <Admin /> : <Navigate to="/" />}  />
          <Route path="/ladies" element={<Ladies />} />
          <Route path="/men" element={<Men />} />
          <Route path="/baby" element={<Baby />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/" element={<Home />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/menProduct" element={<MensProduct />} />
          <Route path="/WomenProduct" element={<WomenProduct />} />
          <Route path="/kidsProduct" element={<KidsProduct />} />
          <Route path="/babyProduct" element={<BabyProduct />} />
          <Route path="/sportProduct" element={<SportsProduct />} />
          <Route path="/cart" element={<Cart />} />


          
        </Routes>
        <Footer />
      </div>
    </Router>

       </div>
    </>
  );

}


export default App;
