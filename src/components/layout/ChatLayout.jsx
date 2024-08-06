import React from 'react'
import { Flex, 
    Box,
    Text,
    Avatar,
    AvatarBadge, 
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Image
} from '@chakra-ui/react'
import ASSETS from '../../../public/assets'

const ChartLayout = (props) => {
  return (
      <Flex direction={{base:'column', md:'row' }} mt='1rem' gap='1rem'>
         <Box w={{base:'100%'}}>{props.children}</Box>
         <Box display='flex' flexDirection='column' gap='1rem' w={{base:'100%', lg: '500px'}} mb='3rem' bg='brand.white'>
          <Flex direction='column' gap='1rem' rounded='lg' >
            <Text color='#363B47' fontSize='16px' fontWeight='bold' px='1rem' py='1rem'>Messages</Text>    
            <InputGroup
              display={["none", "none", "block", "block"]}
              w={["200px", "200px", "350px", "350px"]}
              mx='1rem'
            >
              <Input focusBorderColor="brand.primary" placeholder="Search.." />
              <InputRightElement>
                <Image src={ASSETS.icon} alt='search'/>
              </InputRightElement>
            </InputGroup>
            <Flex px='1rem' py='.5rem' justifyContent='space-between' align='center' _hover={{background:'#F0F3FF'}}>
              <Box display='flex' gap='6px' alignItems='center'>
                <Avatar>
                  <AvatarBadge boxSize='1em' bg='green.500' />
                </Avatar>
                <Box>
                  <Heading fontSize='12px' color='#222021'>James Oshoala</Heading>
                  <Text fontSize='12px' color='#222021' mt='5px'>Author: You can update your Figma</Text>
                </Box>
              </Box>
              <Text fontSize='10px' rounded='lg' p='4px' bg='brand.primary' color='white'>
                200+
              </Text>
            </Flex> 
            <Flex px='1rem' py='.5rem' justifyContent='space-between' align='center' _hover={{background:'#F0F3FF'}}>
              <Box display='flex' gap='6px' alignItems='center'>
                <Avatar>
                  <AvatarBadge boxSize='1em' bg='green.500' />
                </Avatar>
                <Box>
                  <Heading fontSize='12px' color='#222021'>James Oshoala</Heading>
                  <Text fontSize='12px' color='#222021' mt='5px'>Author: You can update your Figma</Text>
                </Box>
              </Box>
              <Text fontSize='10px' rounded='lg' p='4px' bg='brand.primary' color='white'>
                200+
              </Text>
            </Flex> 
            <Flex px='1rem' py='.5rem' justifyContent='space-between' align='center' _hover={{background:'#F0F3FF'}}>
              <Box display='flex' gap='6px' alignItems='center'>
                <Avatar>
                  <AvatarBadge boxSize='1em' bg='green.500' />
                </Avatar>
                <Box>
                  <Heading fontSize='12px' color='#222021'>James Oshoala</Heading>
                  <Text fontSize='12px' color='#222021' mt='5px'>Author: You can update your Figma</Text>
                </Box>
              </Box>
              <Text fontSize='10px' rounded='lg' p='4px' bg='brand.primary' color='white'>
                200+
              </Text>
            </Flex> 
            
            <Flex px='1rem' py='.5rem' justifyContent='space-between' align='center' _hover={{background:'#F0F3FF'}}>
              <Box display='flex' gap='6px' alignItems='center'>
                <Avatar>
                  <AvatarBadge boxSize='1em' bg='green.500' />
                </Avatar>
                <Box>
                  <Heading fontSize='12px' color='#222021'>James Oshoala</Heading>
                  <Text fontSize='12px' color='#222021' mt='5px'>Author: You can update your Figma</Text>
                </Box>
              </Box>
              <Text fontSize='10px' rounded='lg' p='4px' bg='brand.primary' color='white'>
                200+
              </Text>
            </Flex> 
            
            <Flex px='1rem' py='.5rem' justifyContent='space-between' align='center' _hover={{background:'#F0F3FF'}}>
              <Box display='flex' gap='6px' alignItems='center'>
                <Avatar>
                  <AvatarBadge boxSize='1em' bg='green.500' />
                </Avatar>
                <Box>
                  <Heading fontSize='12px' color='#222021'>James Oshoala</Heading>
                  <Text fontSize='12px' color='#222021' mt='5px'>Author: You can update your Figma</Text>
                </Box>
              </Box>
              <Text fontSize='10px' rounded='lg' p='4px' bg='brand.primary' color='white'>
                200+
              </Text>
            </Flex> 
          </Flex>
        </Box>
    </Flex>
  )
}

export default ChartLayout