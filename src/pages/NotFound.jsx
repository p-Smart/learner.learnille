import React from 'react'
import { 
    Button,
    Flex, 
    Heading, 
    Text ,
    Divider
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const redirect = () => {
    navigate('/')   
  }
  return (
    <Flex h='100vh' w='100%' gap='1rem' direction='column' alignItems='center' justifyContent='center'>
       <Heading fontSize={{ base:'40px', md:'70px'}}>Oops!</Heading>
       <Text fontSize={{ base:'14px', md:'16px'}} color='brand.grey.700'>This page you're looking for doesn't exist</Text>
       <Text fontSize={{ base:'14px', md:'16px'}} color='brand.grey.700'>Don't panic, just click on the big button to return home</Text>
       <Divider/>
       <Button onClick={() => redirect()} bg='brand.secondary' color='brand.primary'>Home</Button>
    </Flex>
  )
}

export default NotFound