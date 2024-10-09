import React ,{useState} from 'react'
import { getDoc } from 'firebase/firestore';
import { useDispatch , useSelector } from 'react-redux'
import {loginRequest} from '../../../../Redux/action'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth , handleUserProfile } from '../../../FireBase/firebase';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useToast
} from '@chakra-ui/react';




function loginform() {
  const [formData , setFormData] = useState({username:'', password:''});
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    console.log('Username:', formData.username);
    console.log('Password:', formData.password);

    try {
        const userCredential = await signInWithEmailAndPassword(auth, formData.username, formData.password)
         const userAuth = userCredential.user

         localStorage.setItem('userId' , userAuth.uid);

         const userRef = await handleUserProfile(userAuth);
         const userSnapshot = await getDoc(userRef);
         const userData = userSnapshot.data();

         if(userData?.role==='Admin'){
          navigate('/admin')
          console.log('Navigating to admin');
         }else{
          navigate('/')
          console.log('Navigating to home'); 
         }


      dispatch(loginRequest({user: userCredential.user,loggedIn:true}));
         

    } catch (error) {
        console.error("Error logging in:",error);
        dispatch(loginRequest({error:error.message}))
    }

  };


  return (
    <Box p={4} maxWidth="400px" mx="auto">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" mt={4}>
            Sign Up
          </Button>
        </VStack>
      </form>

      {loginState?.loading && <Text mt={4}>Logging in...</Text>}
    </Box>
  )
}

export default loginform