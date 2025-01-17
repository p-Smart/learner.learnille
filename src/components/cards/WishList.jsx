import React from 'react'
import {
    Button,
    Heading, 
    Text, 
    Flex,
    Avatar, 
    Wrap,
    WrapItem,
    Image,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
} from '@chakra-ui/react'


const WishList = ({isCourse}) => {
  return (
    <TableContainer bg='brand.white'>
        <Table variant='simple'>
            <Thead>
            <Tr>
                <Th>{ !isCourse?'CONSULTATION':'COURSE'}</Th>
                <Th>PRICES</Th>
                <Th isNumeric>ACTION</Th>
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Td>
                    <Box display='flex' gap='1rem'>
                        <Image
                            h='102px' w='125px'
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                        />
                        <Flex direction='column' justifyContent='space-between'>
                            <Flex gap='1rem' justifyContent='space-between'>
                                <Heading fontSize='14px'>Living room Sofa for displaying users</Heading>
                            </Flex>
                            { !isCourse ? (
                            <Flex m='.5' justifyContent='space-between'>
                                <Flex gap='3px' alignItems='center'>
                                    <Image src='/assets/images/Clock.svg' alt='more-options'/>
                                    <Text fontWeight='bold' color='brand.grey.700' fontSize='12px'>4 hours</Text>
                                </Flex>
                                <Flex gap='3px' alignItems='center'>
                                    <Image src='/assets/images/user-card.svg' alt='more-options'/>
                                    <Text fontWeight='bold' color='brand.grey.700' fontSize='12px'>4 sessions</Text>
                                </Flex>
                                <Flex gap='3px' alignItems='center'>
                                    <Image src='/assets/images/card-bar.svg' alt='Card Bar'/>   
                                    <Text fontSize='12px' fontWeight='bold' color='brand.grey.700'>Bi weekly</Text>
                                </Flex>
                            </Flex>
                            ):(
                                <Flex alignItems='center'gap='1rem'>
                                    <Text fontSize='12px' color='#8C94A3'>Created by</Text><Text fontSize='12px' color='#363B47'>Makanju &bull; Femi</Text>
                                </Flex>
                            )}
                            <Flex  gap='1rem'>
                                {!isCourse && (      
                                    <Flex gap='1rem' alignItems='center'>
                                        <Wrap>
                                        <WrapItem>
                                            <Avatar bg='brand.primary' size='xs' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                        </WrapItem>
                                        </Wrap>
                                        <Text fontSize='12px' color='brand.grey.400'>Segun Adebayo</Text>
                                     </Flex>
                                )}
                                    <Flex  gap='2px' alignItems='center'>
                                        <Image src='/assets/images/Star.svg' alt='more-options'/>
                                        <Text fontWeight='bold' fontSize='12px'>5.0</Text>
                                        <Text fontSize='12px' color='#A1A5B3'>(3,579)</Text>
                                    </Flex>
                                { isCourse && (
                                   <Flex  gap='2px' alignItems='center'>
                                        <Image src='/assets/images/user-card.svg' alt='more-options'/>
                                        <Text fontWeight='bold' fontSize='12px'>878,765</Text>
                                        <Text fontSize='12px' color='#A1A5B3'>Students</Text>
                                    </Flex>
                                )}
                            </Flex>
                        </Flex>
                    </Box>
                </Td>
                <Td>
                    <Flex gap='5px'>
                       <Text color='brand.primary' fontWeight='bold' fontSize='16px'>$14.00</Text>
                       <Text as='s' fontSize='12px' color='#A1A5B3'>$26.00</Text>
                    </Flex>
                </Td>
                <Td>
                   <Flex gap='.5rem'>
                      <Button fontSize='12px'>Book Now</Button>
                      <Button fontSize='12px'bg='brand.primary' color='white'>Add To Cart</Button>
                      <Button fontSize='12px'>
                        <Image src='/assets/icons/BlueHeart.svg' alt='heart'></Image>
                      </Button>
                   </Flex>
                </Td>
            </Tr>
            </Tbody>
        </Table>
    </TableContainer>
  )
}

export default WishList