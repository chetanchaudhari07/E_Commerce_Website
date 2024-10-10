import React, {useState, useEffect} from 'react'
import { collection , query , where , getDocs } from 'firebase/firestore'
import { firestore as db } from '../FireBase/firebase'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/action';
import { Box, Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';


function KidsProduct() {
    const [kidsProducts, setKidsProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const fetchKidsProducts = async () => {
        try {
          const q = query(collection(db, 'products'), where('productCategory', '==', 'kids'));
          const querySnapshot = await getDocs(q);
          const productsList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setKidsProducts(productsList);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching kids\' products:', error);
          setLoading(false);
        }
      };
  
      fetchKidsProducts();
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
  
    if (!kidsProducts.length) {
      return <div>No Kids' Products found</div>;
    }
  
    return (
      <Box>
      <Heading mb={4} textAlign={'center'}>Kids' Products</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} className="product-list">
        {kidsProducts.map((product) => (
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
  
  export default KidsProduct;