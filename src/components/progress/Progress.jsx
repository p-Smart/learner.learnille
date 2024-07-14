import React from 'react'
import { Box, Flex,Text } from '@chakra-ui/react'

const Progress = ({hasCompleted}) => {
  return (
    <Box py='1rem'>  
        <Flex mt='.5rem' justifyContent={hasCompleted ? 'center' : 'space-between'}>
            { !hasCompleted && (<Text fontSize='14px' fontWeight='bold'>Ongoing course</Text>)}
            <Text fontSize='14px' color='brand.primary' fontWeight='bold'>{hasCompleted ? '100% Completed': '15% Completed'}</Text>
        </Flex>
        <Box position='relative' mt='.5rem'>
            <Box w='100%' h='6px' rounded='lg' bg='#B7BAC7' ></Box>
            <Box w='70%' bg='brand.primary' h='6px' rounded='lg' position='absolute' top='0px'></Box>
        </Box>
    </Box>
  )
}

export default Progress