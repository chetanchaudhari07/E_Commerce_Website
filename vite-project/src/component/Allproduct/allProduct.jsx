import React,{ useState,useEffect} from 'react'
import { collection , doc, getDocs } from 'firebase/firestore'
import { firestore as db} from './../FireBase/firebase'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/action';
import { Navigate } from 'react-router-dom';
import { Box, Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';


function allProduct() {

    const [products , setProduct] = useState([]);
    const [loading , setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                const productsCollection = collection(db,'products')
                const productSnapshot = await getDocs(productsCollection)
                const productList = productSnapshot.docs.map((doc)=>({
                    id:doc.id,
                    ...doc.data(),
                }))
                setProduct(productList);
                setLoading(false)
            } catch (error) {
                console.error('error fetching products:' ,error)
                setLoading(false)
            }
        }
        fetchProducts()
    },[])

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
    


    if(loading){
        return <div>Loading...</div>
    }

    if(!products.length){
        return <div>No Products found</div>
    }

  return (
    <Box>
      <Heading mb={4} textAlign={'center'}>All Products</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} className="product-list">
        {products.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            p={4}
            textAlign="center"
            boxShadow="md"
          >
            <Image src={product.productThumbnail} alt={product.productName} mb={2}  mx={'auto'} />
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

export default allProduct