import React ,{useState} from 'react'
import { useDispatch , useSelector } from "react-redux";
import {registerRequest} from '../../../../Redux/action';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth , handleUserProfile } from '../../../FireBase/firebase';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';


function register() {
    const [formData, setFormData] = useState({ name:'',username: '', password: '', member: true, });
    const dispatch = useDispatch();
    const signupState = useSelector((state) => state.register);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
      try {
        const {user} = await createUserWithEmailAndPassword(auth, formData.username,formData.password)

    await handleUserProfile(user,{
        name:formData.name,
        member:formData.member,
    })

    dispatch(registerRequest(formData));

      } catch (error) {
        console.error("Error registering the user:", error)
      }
      
    };
  
    return (
      <Box p={4} maxWidth="400px" mx="auto">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </FormControl>

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

export default register ;