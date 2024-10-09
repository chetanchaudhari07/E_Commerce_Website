import React from 'react'
import { Box, Button, Flex, Heading, Text , useMediaQuery } from '@chakra-ui/react';
import Pic1 from './../assets/HM-online.jpeg'
import Pic2 from './../assets/pexels-pixabay-235985.jpg'
import Allproducts from './productsPages/allproducts.page'
import Pickups from '../component/Pickups/pickups';
import MenProduct from './productsPages/MenProduct'
import WomenProduct from './productsPages/womenProduct'
import KidsProduct from './productsPages/kidsProduct'
import BabyProduct from './productsPages/babyProduct'
import SportProduct from './productsPages/sportProduct'


function kids() {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    return (

        
        <Flex className='box' direction={isMobile ? "column" : "row"} wrap="wrap" p={4}>
      
      <Box 
        className='products' 
        p={4} 
        display='flex' 
        flexDirection={isMobile ? 'row' : 'column'} 
        gap={'20px'} 
        overflowX={isMobile ? 'scroll' : 'initial'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        <Allproducts />
        <MenProduct />
        <WomenProduct />
        <BabyProduct />
        <KidsProduct />
        <SportProduct />
      </Box>

    
      <Box 
        className='displayproduct' 
        flex="1" 
        p={4} 
        display={'flex'} 
        flexDirection={'column'} 
        gap={2} 
        width={isMobile ? '100%' : 'auto'}
      >
       
        <Box
          className='item'
          backgroundImage={`url(${Pic1})`}
          height={isMobile ? "250px" : "400px"}
          backgroundSize="cover"
          position="relative"
          display="flex"
          alignItems="flex-end"
          padding="1rem"
          color="white"
        >
          <Button colorScheme="teal" variant="solid">Shop Now</Button>
        </Box>

        
        <Box
          className='item'
          backgroundImage={`url(${Pic2})`}
          height={isMobile ? "150px" : "200px"}
          backgroundSize="cover"
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="white"
          padding="1rem"
        >
          <Heading size={isMobile ? "sm" : "md"}>The Art of Dining In</Heading>
          <Text textAlign="center">Place mats, cups, bowls & more starting at just Rs.399</Text>
          <Button colorScheme="teal" variant="solid">Shop Now</Button>
        </Box>

        
        <Box>
          <Pickups />
        </Box>

        
        <Box
          className='item'
          backgroundImage={`url(${Pic2})`}
          height={isMobile ? "150px" : "200px"}
          backgroundSize="cover"
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="white"
          padding="1rem"
        >
          <Heading size={isMobile ? "sm" : "md"}>The Art of Dining In</Heading>
          <Text textAlign="center">Place mats, cups, bowls & more starting at just Rs.399</Text>
          <Button colorScheme="teal" variant="solid">Shop Now</Button>
        </Box>

        
        <Box mt={4}>
          <Heading textAlign={'center'} size="lg">Home Décor</Heading>
          <Text mt={2}>
            Level up your interior aesthetics with our home décor range. Whether you've moved into a new home, or you want to breathe new life into your existing living space, our collection has every room in the house covered. Our furniture edit offers stunning side tables and comfy lounge chairs, plus there’s an array of chic lighting to create a calming ambience. Looking for those finishing touches? Check out our beautiful bed linen, and top it off by scrolling for decorative items.
          </Text>
          <Button mt={2} colorScheme="teal" variant="link">Read More</Button>
        </Box>
      </Box>
    </Flex>

    )
}

export default kids