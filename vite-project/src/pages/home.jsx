import React from 'react'
import { Box, Button, Flex, Heading, Text , useBreakpointValue  } from '@chakra-ui/react';
import Pic1 from './../assets/home/hmgoepprod.jpeg'
import Pic2 from './../assets/pexels-pixabay-235985.jpg'
import Pickups from '../component/Pickups/pickups'
import Allproducts from './productsPages/allproducts.page'
import MenProduct from './productsPages/MenProduct'
import WomenProduct from './productsPages/womenProduct'
import KidsProduct from './productsPages/kidsProduct'
import BabyProduct from './productsPages/babyProduct'
import SportProduct from './productsPages/sportProduct'

function home() {
    const isMobile = useBreakpointValue({ base: true, md: false });


    return (

        <Flex className="box" direction={isMobile ? 'column' : 'row'} p={4}>
      
      <Box
        className="products"
        p={5}
        display="flex"
        flexDirection={isMobile ? 'row' : 'column'}
        gap="20px"
        overflowX={isMobile ? 'scroll' : 'unset'}
        width={isMobile ? '100%' : 'auto'}
      >
        <Allproducts />
        <MenProduct />
        <WomenProduct />
        <BabyProduct />
        <KidsProduct />
        <SportProduct />
      </Box>

      
      <Box
        className="displayproduct"
        flex="1"
        p={4}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        
        <Box
          className="item"
          backgroundImage={`url(${Pic1})`}
          height={isMobile ? '300px' : '400px'}
          backgroundSize="cover"
          backgroundPosition="center"
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          padding="1rem"
          color="white"
          width="100%"
          bgRepeat="no-repeat"
        >
          <Button colorScheme="whiteAlpha" variant="solid">
            Shop Now
          </Button>
        </Box>

        
        <Box
          className="item"
          backgroundImage={`url(${Pic2})`}
          height="200px"
          backgroundSize="cover"
          backgroundPosition="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="1rem"
          color="white"
          bgRepeat="no-repeat"
        >
          <Heading size="md">The Art of Dining In</Heading>
          <Text textAlign="center">
            Place mats, cups, bowls & more starting at just Rs.399
          </Text>
          <Button colorScheme="whiteAlpha" variant="solid">
            Shop Now
          </Button>
        </Box>

        
        <Box>
          <Pickups />
        </Box>

        
        <Box
          className="item"
          backgroundImage={`url(${Pic2})`}
          height="200px"
          backgroundSize="cover"
          backgroundPosition="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="1rem"
          color="white"
          bgRepeat="no-repeat"
        >
          <Heading size="md">The Art of Dining In</Heading>
          <Text textAlign="center">
            Place mats, cups, bowls & more starting at just Rs.399
          </Text>
          <Button colorScheme="whiteAlpha" variant="solid">
            Shop Now
          </Button>
        </Box>

       
        <Box mt={4}>
          <Heading textAlign="center" size="lg">
            Home Décor
          </Heading>
          <Text mt={2}>
            Level up your interior aesthetics with our home décor range. Whether you've moved into a new home, or you want to breathe new life into your existing living space, our collection has every room in the house covered. Our furniture edit offers stunning side tables and comfy lounge chairs, plus there’s an array of chic lighting to create a calming ambience. Looking for those finishing touches? Check out our beautiful bed linen, and top it off by scrolling for decorative items.
          </Text>
          <Button mt={2} colorScheme="teal" variant="link">
            Read More
          </Button>
        </Box>
      </Box>
    </Flex>

    )
}

export default home