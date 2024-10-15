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



function header({ currentUser })  {
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
      <Box as="header" p={4} borderBottom="1px solid #ccc" maxWidth="100%">
        <Flex justify="space-between" align="center" wrap="wrap">
          {/* Links Section */}
          <Flex
            align="center"
            gap={4}
            display={['none', 'flex']}
            flexWrap="wrap"
          >
            <Link to="/customer-service">
              <Button variant="link" size={['sm', 'md']}>
                Customer Service
              </Button>
            </Link>
            <Link to="/newsletter">
              <Button variant="link" size={['sm', 'md']}>
                Newsletter
              </Button>
            </Link>
            <Link to="/store-finder">
              <Button variant="link" size={['sm', 'md']}>
                Find a Store
              </Button>
            </Link>
            <Select placeholder="Download App" size="sm" width="auto">
              <option value="android">Download Android</option>
              <option value="ios">Download iOS</option>
            </Select>
          </Flex>

          {/* Logo Section */}
          <Box display="flex" justifyContent="center" flex="1" marginRight={['0', '180px']}>
            <Image src={Logo} alt="logo" boxSize={['40px', '70px']} />
          </Box>

          {/* User & Cart Section */}
          <Flex align="center" gap={2}>
            {!currentUser ? (
              <Login />
            ) : (
              <Button onClick={handleLogout} colorScheme="teal" size={['sm', 'md']}>
                Logout
              </Button>
            )}
            <Button colorScheme="whiteAlpha" color="black" size={['sm', 'md']} border="none">
              Favourites
            </Button>
            <Link to="/cart">
              <Button colorScheme="whiteAlpha" color="black" size={['sm', 'md']}>
                Cart
              </Button>
            </Link>
          </Flex>

          {/* Hamburger Menu for Mobile */}
          <IconButton
            icon={<HamburgerIcon />}
            display={['block', 'none']}
            onClick={onOpen}
            variant="outline"
            aria-label="Open Menu"
          />
        </Flex>

        {/* Navigation Links for Desktop */}
        <Flex as="nav" justify="center" gap={4} display={['none', 'flex']} mt={4}>
          <Link to="/ladies">Ladies</Link>
          <Link to="/men">Men</Link>
          <Link to="/baby">Babies</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/">Home</Link>
          <Link to="/sport">Sport</Link>
          <Link to="/sale">Sale</Link>
          <Link to="/sustainability">Sustainability</Link>
        </Flex>

        {/* Drawer for Mobile Navigation */}
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

                <Select placeholder="Download App" size="sm" width="auto">
                  <option value="android">Download Android</option>
                  <option value="ios">Download iOS</option>
                </Select>

                <UnorderedList listStyleType="none" spacing={3} padding={0}>
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