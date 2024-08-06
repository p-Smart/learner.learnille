import React from 'react'
import { 
    Box, 
    Button,  
    Card, 
    Text, 
    Flex,
    Divider,
    Image,
    Heading,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  return (
    <Card flexGrow={1}>
      <Box>
        <Heading pt='1rem' pl='1rem' fontSize='sm' color='brand.grey.400'>Courses(02)</Heading>
        <Flex p='1rem 1rem' gap='1rem'>
            <Box>
                <Image
                   rounded='lg'
                   width='150px'
                   height='100px'
                   objectFit='cover'
                   src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                   alt='Chakra UI'
                />
            </Box>
            <Flex direction='column' justifyContent='space-between'>
                <Text fontSize='10px' color='brand.grey.400'>created by:&nbsp; AdigunTemitayo</Text>
                <Text fontSize='12px' color='brand.grey.400' fontWeight='bold'>Graphic Design Masterclass - Learn GREAT Design</Text>
                <Text fontSize='12px' color='brand.primary' fontWeight='bold'>$400.00</Text>
            </Flex>
        </Flex>
        <Divider />
        <Box>
            <Heading p='1rem' fontSize='sm' color='brand.grey.400'>Order Summary</Heading>       
            <Flex px='1rem' direction='column'  gap='1rem'>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Text fontSize='10px' color='brand.grey.400'>Subtotal:</Text>
                    <Text fontSize='12px' color='brand.grey.400' fontWeight='bold'>$619.00 USD</Text>
                </Flex>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Text fontSize='10px' color='brand.grey.400'>Coupon Discount:</Text>
                    <Text fontSize='12px' color='brand.grey.400' fontWeight='bold'>8%</Text>
                </Flex>
                <Divider/>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Text fontSize='12px' fontWeight='bold' color='brand.grey.400'>Total:</Text>
                    <Text fontSize='14px' color='brand.grey.400' fontWeight='bold'>$75.00 USD</Text>
                </Flex>

                <Button
                    onClick={() => navigate('/pay')}
                    mb='1rem' 
                    bg='brand.primary' 
                    color='brand.white'>
                       Proceed To payment
                </Button>
            </Flex>
        </Box>  
      </Box>
    </Card>
  )
}

export default Cart