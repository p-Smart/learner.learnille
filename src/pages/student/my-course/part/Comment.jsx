import React, { useState } from 'react'
import { Box, Image, Flex, Text, Button, Input } from '@chakra-ui/react'

const Comment = () => {
    const [openComment , setOpenComment] = useState(false)
    return (
    <Box mb='1rem'>
        <Flex gap='1rem'>
            <Image w={35} h={35} src='/assets/CmtAvarter.png' alt='images'/>
            <Box w='100%'>
               <Text as='h1' fontWeight='bold' fontSize='14px'>John Doe</Text>
               <Text as='p' color='#4E5566' mt='4px' fontSize='14px' fontWeight='light'>Lorem ipsum dolor sit amet consectetur. Sed elementum consequat di</Text>
               <Box onClick={() => setOpenComment(!openComment)} cursor='pointer' display='flex' gap='1rem' mt='4px' alignItems='center'>
                  <Image src='/assets/icons/ChatsCircle.svg'/>
                  <Text color={`${openComment ? '#4364F7': '#4E5566'}`}>REPLY</Text>
               </Box>
               { openComment && (
                    <Flex mt='1rem' gap='.5rem'>
                        <Box border='1px' w='100%' rounded='lg' borderColor='#E8EAEE' bg='#fff' display='flex'>   
                            <Image p='.5rem'  src='/assets/icons/ChatsCircle.svg'/>
                            <Input style={{boxShadow: 'none'}} border='none' placeholder='write your reply here'/>
                        </Box>
                        <Flex>
                            <Button fontSize='14px' color='brand.primary'>Post Reply</Button>
                            <Box bg='brand.primary' borderRightRadius='7px' h='40px' w='40px' display='flex' alignItems='center' justifyContent='center' color='brand.white'>🡪</Box>
                        </Flex>                  
                    </Flex>
               )}
            </Box>
        </Flex>
    </Box>
  )
}

export default Comment