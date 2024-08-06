import React from 'react'
import { 
    Box,
    Heading, 
    Divider, 
    Flex, 
    Avatar, 
    Text,
    Stack,
    Image
} from '@chakra-ui/react'

const Instructor = () => {
  return (
    <Stack rounded='lg' p='2rem' bg='brand.white'>
            <Heading fontSize='16px'>Instructor</Heading>
            <Divider py='.3rem'/>
            <Flex mt='.5rem'>
                <Flex flex='1' gap='4'>
                    <Avatar size='xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>
                    <Box>
                        <Box display='flex' flexDirection='column'>
                           <Heading fontSize='20px' color='brand.grey.700'>Adigun kofoworola Aduke</Heading>
                           <Text py='.5rem' fontSize='12px' color='brand.grey.400'>Enterpreneur & Designer &bull; Founder of shiftride</Text>
                           <Flex gap='1rem' py='.5rem'>
                              <Box display='flex' gap='4px' alignItems='center'>
                                <div>&#11088;</div>
                                <Text fontSize='12px' fontWeight='bold'>4.6</Text>
                                <Text fontSize='12px'>Course rating</Text>
                              </Box>
                              <Box display='flex' gap='4px' alignItems='center'>
                                <Image w='16px' src='/assets/images/Users.svg' alt='people'/>
                                <Text fontWeight='bold' fontSize='12px'>65</Text>
                                <Text fontSize='12px'>Active Student</Text>
                              </Box>
                              <Box display='flex' alignItems='center'>
                                <Image w='16px' src='/assets/icons/PlayYout.svg' alt='people'/>
                                <Text fontSize='12px' fontWeight='bold'>01</Text>
                                <Text fontSize='12px'>Courses</Text>
                              </Box>
                           </Flex>
                        </Box>
                        <Text fontSize='12px' noOfLines='3' color='brand.grey.400'>
                            I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Stack>
  )
}

export default Instructor