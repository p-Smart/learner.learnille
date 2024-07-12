import React from 'react'
import { Flex,Box } from '@chakra-ui/react'
import Cart from '../cart/Cart'


const PaymentLayout = () => {
  return (
    <Flex direction={{base:'column', md:'row' }} mt='1rem' gap='.5rem'>
        <Box w={{base:'100%'}}>{props.children}</Box>
        <Box w={{base:'100%', lg: '500px'}}>
            <Cart/>
        </Box>
    </Flex>
  )
}

export default PaymentLayout;
