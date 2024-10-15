import React, { useState } from 'react'
import './loign.css'


import { signInWithGoogle } from '../../FireBase/firebase'
import SignupForm from './Signup/signup';
import Loginform from './Loginform/loginform';
import Register from './Register/register';

import {
    Box,
    Button,
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react';




function login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedForm, setSelectedForm] = useState(null);

  const handleSignInClick = () => {
    setSelectedForm('signUp');
    onOpen();
  };

  const handleLoginClick = () => {
    setSelectedForm('login');
    onOpen();
  };

  const handleRegisterClick = () => {
    setSelectedForm('register');
    onOpen();
  };

  return (
    <Box className="app" p={4}>
      <Menu>
        <MenuButton
          as={Button}
          colorScheme="whiteAlpha"
          color="black"
          size={['sm', 'md', 'lg']} 
        >
          Sign up
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleSignInClick}>Sign Up</MenuItem>
          <MenuItem onClick={handleLoginClick}>Log In</MenuItem>
          <MenuItem onClick={handleRegisterClick}>Member Register</MenuItem>
        </MenuList>
      </Menu>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedForm === 'login' && 'Login'}
            {selectedForm === 'signUp' && 'Sign Up'}
            {selectedForm === 'register' && 'Member Register'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedForm === 'login' && <Loginform />}
            {selectedForm === 'signUp' && <SignupForm />}
            {selectedForm === 'register' && <Register />}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={signInWithGoogle}>
              Sign in with Google
            </Button>
            <Button onClick={onClose} ml={3}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default login