import React from 'react'
import { 
    Box, 
    Card, 
    Stack, 
    Text, 
    Flex,
    Divider,
    Image,
    Heading,
} from '@chakra-ui/react'

const CartList = () => {
  return (  
    <Box>
        <Heading fontSize='sm' fontWeight='bold' color='brand.grey.400' py='1rem'>Cart (3)</Heading>     
        <Card flexGrow={1}>
        <Box>
            <Flex justifyContent='space-between' p='1rem'>
                <Heading pt='1rem' pl='1rem' fontSize='sm' color='brand.grey.400'>CONSULTATION</Heading>
                <Heading pt='1rem' pl='1rem' fontSize='sm' color='brand.grey.400'>PRICES</Heading>
            </Flex>    
            <Divider />
                <Flex direction='column' px='2rem' >
                    <Flex justifyContent='space-between' alignItems='center'>
                        <Flex p='1rem 1rem' gap='1rem'>
                            <Flex alignItems='center' gap='1rem'>
                                <Box 
                                border='2px' 
                                rounded='full' 
                                borderColor='#8C94A3' 
                                w='25px' 
                                h='25px' 
                                display='flex' 
                                justifyContent='center'
                                >
                                <Text color='#8C94A3'>X</Text>
                                </Box>
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
                            </Flex>
                            <Flex direction='column' justifyContent='space-between'>
                                <Text fontSize='10px' color='brand.grey.400'>created by:&nbsp; AdigunTemitayo</Text>
                                <Text fontSize='12px' color='brand.grey.400' fontWeight='bold'>Graphic Design Masterclass - Learn GREAT Design</Text>
                                <Text fontSize='12px' color='brand.primary' fontWeight='bold'>$400.00</Text>
                            </Flex>
                        </Flex>
                        <Flex gap='5px'>
                        <Text fontSize='12px' color='brand.primary' fontWeight='bold'>$400.00</Text>
                        <Text as='s' fontSize='12px' color='#A1A5B3'>$26.00</Text>
                    </Flex>
                </Flex>
                <Divider />
            </Flex>
            
            <Flex px='2rem' justifyContent='space-between' alignItems='center'>
                <Flex p='1rem 1rem' gap='1rem'>
                    <Flex alignItems='center' gap='1rem'>
                        <Box 
                        border='2px' 
                        rounded='full' 
                        borderColor='#8C94A3' 
                        w='25px' 
                        h='25px' 
                        display='flex' 
                        justifyContent='center'
                        >
                        <Text color='#8C94A3'>X</Text>
                        </Box>
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
                    </Flex>
                    <Flex direction='column' justifyContent='space-between'>
                        <Text fontSize='10px' color='brand.grey.400'>created by:&nbsp; AdigunTemitayo</Text>
                        <Text fontSize='12px' color='brand.grey.400' fontWeight='bold'>Graphic Design Masterclass - Learn GREAT Design</Text>
                        <Text fontSize='12px' color='brand.primary' fontWeight='bold'>$400.00</Text>
                    </Flex>
                </Flex>
                <Flex gap='5px'>
                <Text fontSize='12px' color='brand.primary' fontWeight='bold'>$400.00</Text>
                <Text as='s' fontSize='12px' color='#A1A5B3'>$26.00</Text>
                </Flex>
            </Flex>
        </Box>
        </Card>
    </Box> 
  )
}

export default CartList