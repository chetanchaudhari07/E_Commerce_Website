import React, {useState, useEffect} from 'react'
import { collection , query , where , getDocs } from 'firebase/firestore'
import { firestore as db } from '../FireBase/firebase'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/action';
import { Box, Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';




function mensProduct() {

    const [mensProducts, setMensProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMensProducts = async () => {
        try {
          const q = query(collection(db, 'products'), where('productCategory', '==', 'mens'));
          const querySnapshot = await getDocs(q);
          
          console.log("Query Snapshot:", querySnapshot); 
          const productsList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
      
          console.log("Fetched Men's Products:", productsList); 
          setMensProducts(productsList);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching men\'s products:', error);
          setLoading(false);
        }
      };

    fetchMensProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!mensProducts.length) {
    return <div>No Men's Products found</div>;
  }

  return (
    <Box>
      <Heading mb={4} textAlign={'center'}>Men's Products</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} className="product-list">
        {mensProducts.map((product) => (
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
  )
}

export default mensProduct