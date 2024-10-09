import React , {useState} from "react";
import { useDispatch , useSelector } from "react-redux";
import {signupRequest} from '../../../../Redux/action'
import { auth, handleUserProfile } from "../../../FireBase/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {Box,Button,FormControl,FormLabel,Input,Text,VStack,useToast,} from '@chakra-ui/react';

const SignupForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const dispatch = useDispatch();
    const signupState = useSelector((state) => state.signUp);
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const {user} = await createUserWithEmailAndPassword(auth, formData.username, formData.password) ;

         await handleUserProfile(user,{username:formData.username})

        dispatch(signupRequest(formData));
      } catch (error) {
        console.error("error signing up the user:", error)
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

      {signupState?.loading && <Text mt={4}>Loading...</Text>}
    </Box>
    );
  };
  
  export default SignupForm;