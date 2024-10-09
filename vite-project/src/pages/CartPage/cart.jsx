import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removeFromCart } from '../../Redux/action'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';


function cart() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
  
    const handleRemoveFromCart = (productId) => {
      dispatch(removeFromCart(productId));
    };
  
    return (
      <Box>
      <Heading mb={4}>Your Cart</Heading>
      {cartItems.length === 0 ? (
        <Text>No items in cart</Text>
      ) : (
        <Box className="cart-list">
          {cartItems.map(item => (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="md"
              overflow="hidden"
              p={4}
              display="flex"
              alignItems="center"
              mb={4}
              boxShadow="md"
            >
              <Image
                src={item.productThumbnail}
                alt={item.productName}
                boxSize="100px"
                objectFit="cover"
                mr={4}
              />
              <Box flex="1">
                <Heading size="md" mb={2}>{item.productName}</Heading>
                <Text mb={2}>Price: ₹{item.productPrice}</Text>
                <Button colorScheme="red" onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
    );
  };

export default cart