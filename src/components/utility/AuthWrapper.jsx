import React from 'react'
import { 
  Box,
  VStack,
  Image, 
  Flex,
} from '@chakra-ui/react'
import IMAGES from '../../assets/index'

const AuthWrapper = ({children}) => {
  return (
    <VStack>
      <Flex justify='end' w='90%' p='1.5rem 0px 0px 1rem'>
        <Box>
          <Image
            fallbackSrc='https://via.placeholder.com/150'
            w='100px'
            src={IMAGES.logo} alt='Learnile'
            borderRadius='lg'
          />
        </Box>
      </Flex>
      <Flex direction='row' bg='brand.white' w='90%' h='90%' p={{ base:'1rem', lg:'3rem'}} mb='3rem'>
        <Box display={{ base:'none', lg:'block'}}>
          <Image
            fallbackSrc='https://via.placeholder.com/150'
            w='370px'
            height='100%'
            objectFit='cover'
            src={IMAGES.auth1}
            alt='Green double couch with wooden legs'
          />
        </Box>
        <Box p={{ base:'1rem', lg:'3rem'}}>
          {children}
        </Box>
      </Flex>
    </VStack>
  )
}

export default AuthWrapper