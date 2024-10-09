import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from './../../assets/h-and-m.png.webp'

import Login from './Login/account'
import { auth } from './../FireBase/firebase'
// import Cart from '../../pages/CartPage/cart'
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Select,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  UnorderedList,
  ListItem,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';



function header({ currentUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('userId');
      navigate('/');
    });
  };

  return (
    <>
    <Box as="header" p={4} borderBottom="1px solid #ccc">
     
      <Flex justify="space-between" align="center">
       
        <Flex align="center" gap={4} display={['none', 'flex']}>
          <Link to="/customer-service">
            <Button variant="link">Customer Service</Button>
          </Link>

          <Link to="/newsletter">
            <Button variant="link">Newsletter</Button>
          </Link>

          <Link to="/store-finder">
            <Button variant="link">Find a Store</Button>
          </Link>

          <Select placeholder="Download App" onChange={() => { }}>
            <option value="android">Download Android</option>
            <option value="ios">Download iOS</option>
          </Select>
        </Flex>

       
        <Box display="flex" justifyContent="center" flex="1" marginRight='180px'>
          <Image src={Logo} alt="logo" boxSize={['50px', '70px']} />
        </Box>

        
        <Flex align="center" gap={4} display={['flex', '']}>
          {!currentUser ? (
            <Login />
          ) : (
            <Button onClick={handleLogout} colorScheme="teal" size={['sm', 'md']}>
              Logout
            </Button>
          )}
          <Button colorScheme='whiteAlpha' color={'black'} size={['sm', 'md']} borderStyle={'none'}>
            Favourites
          </Button>
          <Link to="/cart">
            <Button colorScheme='whiteAlpha' color={'black'} size={['sm', 'md']}>
              Cart
            </Button>
          </Link>
        </Flex>

        
        <IconButton
          icon={<HamburgerIcon />}
          display={['block', 'none']} 
          onClick={onOpen}
          variant="outline"
          aria-label="Open Menu"
        />
      </Flex>

     
      <Flex
        as="nav"
        justify="center"
        gap={4}
        display={['none', 'flex']} 
        mt={4}
      >
        <Link to="/ladies">Ladies</Link>
        <Link to="/men">Men</Link>
        <Link to="/baby">Babies</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/">Home</Link>
        <Link to="/sport">Sport</Link>
        <Link to="/sale">Sale</Link>
        <Link to="/sustainability">Sustainability</Link>
      </Flex>

      

      
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        
        <DrawerOverlay />
        
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack align="start" spacing={4}>
             
              <Link to="/customer-service" onClick={onClose}>
                Customer Service
              </Link>
              <Link to="/newsletter" onClick={onClose}>
                Newsletter
              </Link>
              <Link to="/store-finder" onClick={onClose}>
                Find a Store
              </Link>

             
              <Select placeholder="Download App" onChange={() => { }}>
                <option value="android">Download Android</option>
                <option value="ios">Download iOS</option>
              </Select>

              
              <UnorderedList listStyleType="none" spacing={3} style={{ padding: 0 }}>
                <ListItem>
                  <Link to="/ladies" onClick={onClose}>
                    Ladies
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/men" onClick={onClose}>
                    Men
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/baby" onClick={onClose}>
                    Babies
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/kids" onClick={onClose}>
                    Kids
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/" onClick={onClose}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/sport" onClick={onClose}>
                    Sport
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/sale" onClick={onClose}>
                    Sale
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/sustainability" onClick={onClose}>
                    Sustainability
                  </Link>
                </ListItem>
              </UnorderedList>

            

            </VStack>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  </>

  );
}

export default header