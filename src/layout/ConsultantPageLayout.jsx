import React from 'react'
import { Flex, Box,Heading,Text } from '@chakra-ui/react'

const ConsultantPageLayout = (props) => {
   return (
      <Flex direction={{base:'column', md:'row' }} mt='1rem' gap='1rem'>
         <Box w={{base:'100%'}}>{props.children}</Box>
         <Box display='flex' flexDirection='column' gap='1rem' w={{base:'100%', lg: '500px'}} mb='3rem'>
          <Flex direction='column' p='1rem' rounded='lg' border='1px' color='#C7D0FD' _hover={{shadow:'0px 2px 7px rgba(0 , 0 , 0 , .1)'}}>
             <Text color='#363B47' fontSize='12px' fontWeight='bold'>#1 Tip for a successful meeting</Text>
             <Heading color='brand.primary' py='.5rem' fontSize='14px' fontWeight='bold'>How to Prepare for your Next Meeting</Heading>
             <Text color='#42404C' fontSize='12px'>Plan ahead! Prepare the questions and topics you do like to discuss. Get a stable network connection, convenient space free from any form of distraction. </Text>
          </Flex>
          <Flex direction='column' p='1rem' rounded='lg' border='1px' color='#C7D0FD' _hover={{shadow:'0px 2px 7px rgba(0 , 0 , 0 , .1)'}}>
             <Text color='#363B47' fontSize='12px' fontWeight='bold'>#1 Tip for a successful meeting</Text>
             <Heading color='brand.primary' py='.5rem' fontSize='14px' fontWeight='bold'>How to Prepare for your Next Meeting</Heading>
             <Text color='#42404C' fontSize='12px'>Plan ahead! Prepare the questions and topics you do like to discuss. Get a stable network connection, convenient space free from any form of distraction. </Text>
          </Flex>
          <Flex direction='column' p='1rem' rounded='lg' border='1px' color='#C7D0FD' _hover={{shadow:'0px 2px 7px rgba(0 , 0 , 0 , .1)'}}>
             <Text color='#363B47' fontSize='12px' fontWeight='bold'>#1 Tip for a successful meeting</Text>
             <Heading color='brand.primary' py='.5rem' fontSize='14px' fontWeight='bold'>How to Prepare for your Next Meeting</Heading>
             <Text color='#42404C' fontSize='12px'>Plan ahead! Prepare the questions and topics you do like to discuss. Get a stable network connection, convenient space free from any form of distraction. </Text>
          </Flex>
          <Flex direction='column' p='1rem' rounded='lg' border='1px' color='#C7D0FD' _hover={{shadow:'0px 2px 7px rgba(0 , 0 , 0 , .1)'}}>
             <Text color='#363B47' fontSize='12px' fontWeight='bold'>#1 Tip for a successful meeting</Text>
             <Heading color='brand.primary' py='.5rem' fontSize='14px' fontWeight='bold'>How to Prepare for your Next Meeting</Heading>
             <Text color='#42404C' fontSize='12px'>Plan ahead! Prepare the questions and topics you do like to discuss. Get a stable network connection, convenient space free from any form of distraction. </Text>
          </Flex>
        </Box>
    </Flex>
  )
}

export default ConsultantPageLayout