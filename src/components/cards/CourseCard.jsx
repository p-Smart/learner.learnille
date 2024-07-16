import React from 'react'
import { 
  Box, 
  Card, 
  Heading, 
  Text, 
  Flex,
  Divider,
  Image
} from '@chakra-ui/react'
import ASSETS from '../../../public/assets'

import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const CourseCard = () => {
    return (
        <ChakraLink style={{ textDecoration: "none" }} as={ReactRouterLink} to='/marketplace/course/1'>       
          <Card p='.7rem' flexGrow={1}>
            <Box>
              <Image
                h='180px' w='100%'
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
              />
              <Flex mt='.5rem' justifyContent='space-between'>
                <Text bg='brand.lightPrimary' borderRadius='2px' px='5px' color='brand.primary' fontWeight='400' fontSize='10px'>HEALTH & FITNESS</Text>
              </Flex>
              <Flex gap='1rem' mt='.5rem' justifyContent='space-between'>
                <Heading size='sm'>Living room Sofa for displaying users</Heading>
              </Flex>
              <Flex gap='1rem' py='1rem' justifyContent='space-between'>
                <Flex gap='2px' alignItems='center'>
                  <Image src={ASSETS.star} alt='more-options'/>
                  <Text fontWeight='bold' fontSize='12px'>5.0</Text>
                  <Text fontSize='12px' color='#A1A5B3'>(3,579)</Text>
                </Flex>
                <Flex gap='4px' alignItems='center'>
                  <Image src={ASSETS.singleUser} alt='user'/>
                  <Text fontWeight='bold' fontSize='12px'>982,941</Text>
                  <Text fontSize='12px' color='#A1A5B3'>students</Text>
                </Flex>
              </Flex>
              <Divider />
              <Flex pt='1rem' justifyContent='space-between'>
                <Flex gap='5px'>
                      <Text fontWeight='bold' fontSize='12px'>$14.00</Text>
                      <Text as='s' fontSize='12px' color='#A1A5B3'>$26.00</Text>
                </Flex>
                <Flex gap='3px' alignItems='center'>
                  &bull;&bull;&bull;
                </Flex>
              </Flex>
            </Box>
          </Card>
        </ChakraLink>
    )
}

export default CourseCard