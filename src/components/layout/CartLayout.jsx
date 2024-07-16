import React from 'react'
import Cart from '../cart/Cart'
import { Flex,Box } from '@chakra-ui/react'

const CartLayout = (props) => {
  return (
      <Flex direction={{base:'column', md:'row' }} mt='1rem' gap='1rem'>
          <Box w={{base:'100%'}}>{props.children}</Box>
          <Box w={{base:'100%', lg: '500px'}}>
              <Cart/>
          </Box>
      </Flex>
  )
}

export default CartLayout