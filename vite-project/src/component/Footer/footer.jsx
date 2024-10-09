import React from 'react'
import { Box, Stack, Heading, Text, UnorderedList, ListItem, Link, Flex } from '@chakra-ui/react';
import SocialMedia from './SocialMedia/socialMedia';

function footer() {
    return (
        <Box bg="gray.200" py={10}>
            <Flex justify="space-around" wrap="wrap" p={4}>

                {/* Shop Section */}
                <Stack spacing={4} width={['100%', '25%']} mb={[6, 0]}>
                    <Heading size="md">Shop</Heading>
                    <UnorderedList styleType="none" m={0}>
                        <ListItem cursor="pointer"><Link href="#">Mens</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Ladies</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Babys</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Kids</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Sport</Link></ListItem>
                    </UnorderedList>
                </Stack>

                {/* Corporate Info Section */}
                <Stack spacing={4} width={['100%', '25%']} mb={[6, 0]}>
                    <Heading size="md">Corporate Info</Heading>
                    <UnorderedList styleType="none" m={0}>
                        <ListItem cursor="pointer"><Link href="#">Career at H&M</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">About H&M Group</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Sustainability H&M Group</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Press</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Investor Relations</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Corporate Governance</Link></ListItem>
                    </UnorderedList>
                </Stack>

                {/* Help Section */}
                <Stack spacing={4} width={['100%', '25%']} mb={[6, 0]}>
                    <Heading size="md">Help</Heading>
                    <UnorderedList styleType="none" m={0}>
                        <ListItem cursor="pointer"><Link href="#">Customer Service</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">My H&M</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Find a Store</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Legal & Privacy</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Contact</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Report a Scam</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Cookies Notice</Link></ListItem>
                        <ListItem cursor="pointer"><Link href="#">Cookie Settings</Link></ListItem>
                    </UnorderedList>
                </Stack>

                {/* Signup Section */}
                <Stack spacing={4} width={['100%', '25%']} mb={[6, 0]}>
                    <Text fontSize="lg">
                        Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!
                    </Text>
                    <Link color="teal.500" href="#">Read more</Link>
                </Stack>
            </Flex>

            {/* Social Media Section */}
            <Box py={4} display={'flex'} justifyContent={'center'} fontSize={25} cursor={'pointer'}>
                <SocialMedia />
            </Box>
        </Box>
    )
}

export default footer