import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/action';
import { Box, Button, Heading, Image, Text, Stack, Alert, AlertIcon } from '@chakra-ui/react';

function Pickups() {
    const dispatch = useDispatch();
    const { productList = [], error } = useSelector((state) => state.products);
    const [currentSlide, setCurrentSlide] = useState(0); 
    const itemsPerPage = 6; 
  
    useEffect(() => {
      dispatch(fetchProducts()); 
    }, [dispatch]);
  
   
    const indexOfLastItem = (currentSlide + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
  
    const handleNextSlide = () => {
      if (indexOfLastItem < productList.length) {
        setCurrentSlide(currentSlide + 1);
      }
    };
  
    const handlePrevSlide = () => {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };
  
    return (
      <Box p={4} position="relative">
       
        {error && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            Error fetching products data: {error}
          </Alert>
        )}
  
      
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection={{ base: 'column', md: 'row' }}>
          <Button onClick={handlePrevSlide} disabled={currentSlide === 0} colorScheme="teal" mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
            Prev
          </Button>
  
          
          <Stack spacing={4} mx={4} direction={{ base: 'column', md: 'row' }}>
            {currentItems.map((product) => (
              <Box
                key={product.id}
                borderWidth={1}
                borderRadius="md"
                overflow="hidden"
                textAlign="center"
                p={4}
                width={{ base: '100%', md: 'auto' }} 
              >
                <Heading size="md">{product.title}</Heading>
                <Image
                  src={product.productThumbnail}
                  alt={product.productName}
                  boxSize={{ base: '100%', md: '150px' }} 
                  objectFit="cover"
                  mx="auto"
                  mt={2}
                />
                <Text mt={2}>Price: ₹{product.productPrice}</Text>
              </Box>
            ))}
          </Stack>
  
          <Button
            onClick={handleNextSlide}
            disabled={indexOfLastItem >= productList.length}
            colorScheme="teal"
            mb={{ base: 4, md: 0 }} 
          >
            Next
          </Button>
        </Box>
      </Box>
    );
  }
export default Pickups;
