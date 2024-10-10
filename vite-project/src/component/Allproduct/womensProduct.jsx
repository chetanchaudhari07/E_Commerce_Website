import React, {useState, useEffect} from 'react'
import { collection , query , where , getDocs } from 'firebase/firestore'
import { firestore as db } from '../FireBase/firebase'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/action';
import { Box, Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';



function womenProduct() {
    const [womensProducts, setWomensProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const fetchWomensProducts = async () => {
        try {
          const q = query(collection(db, 'products'), where('productCategory', '==', 'womens'));
          const querySnapshot = await getDocs(q);
          const productsList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setWomensProducts(productsList);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching women\'s products:', error);
          setLoading(false);
        }
      };
  
      fetchWomensProducts();
    }, []);

    const handleAddToCart = (product) => {
      const userId = localStorage.getItem('userId');
  
      if(!userId){
          alert('you need to log in to add item to the cart')
          Navigate('/login')
      }else{
          dispatch(addToCart(product)); 
          alert('Product Added to Cart')
      }
  
  
  
    };
  
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!womensProducts.length) {
      return <div>No Women's Products found</div>;
    }
  
    return (
      <Box>
      <Heading mb={4} textAlign={'center'}>Women's Products</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} className="product-list">
        {womensProducts.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            p={4}
            textAlign="center"
            boxShadow="md"
          >
            <Image src={product.productThumbnail} alt={product.productName} mb={2} mx={'auto'} />
            <Heading size="md" mb={2}>{product.productName}</Heading>
            <Text mb={2}>Price: ₹{product.productPrice}</Text>
            <Button colorScheme="teal" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
    );
  }
  

export default womenProduct