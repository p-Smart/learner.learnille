import React from 'react'
import { Stack, Flex, Text, Box, Button, Image, Divider, Heading, Avatar } from '@chakra-ui/react'
import { useState } from 'react'

const OnGoing = () => {
  const [isOpen , setIsOpen ] = useState('false')
  const handleViewMore = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Stack bg='brand.white' rounded='lg' border={ isOpen ? '1px' : '0px' } borderColor='brand.secondary' transition='.5s ease'>
      <Flex justifyContent='space-between' p='1rem'>
        <Box gap='4px' fontSize='12px' display='flex' justifyContent='center' alignItems='center'>
          Mentorship Session With
          <Text fontSize='14px' color='brand.primary' fontWeight='bold'>John Doe</Text>
        </Box>
        <Flex alignItems='center' cursor='pointer' bg='none' _hover='none' color='#4E5566' fontSize='12px' onClick={() => handleViewMore()}>View {isOpen ? 'Less':'More'}&nbsp;&nbsp;
        <Box display='flex' gap='1rem' transition='.5s ease' transform={ isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}><Image src='/assets/icons/arrow-up.svg' alt='arrow-up'/></Box></Flex>
      </Flex>
      <Flex gap='1rem' px='1rem' pb='.5rem'>
        <Box display='flex' fontSize='12px' alignItems='center' gap='.5rem'><Image w='20px' color='#363B47' src='/assets/icons/bluebook.svg' alt='book'/>Wed, Nov. 14 2023</Box> 
        <Box display='flex' fontSize='12px' alignItems='center' gap='.5rem'><Image w='20px' color='#363B47' src='/assets/icons/BlueClock.svg' alt='clock'/>10:00pm - 12:00pm</Box> 
      </Flex>
      <Box height={ isOpen ? '270px' : '0px' } transition='.5s ease' overflow='hidden'>    
         <Divider/>
          <Stack p='1rem'>
            <Box>
              <Text fontWeight='bold' fontSize='12px' color='#363B47'>Mentor:</Text>
              <Flex flex='1' gap='4' py='.5rem'>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>
                <Box>
                  <Box display='flex' alignItems='center' gap='1rem'>
                      <Heading size='xs'>Segun Adebayo</Heading>
                  </Box>
                  <Text fontSize='12px' m='.2rem' color='#363B47'>Lead Developer at Pencill.ng</Text>
                </Box>
            </Flex>
            </Box>
            <Box mt='.2rem'>
              <Text fontWeight='bold' fontSize='12px' color='#363B47'>Session name:</Text> 
              <Text mt='.2rem' fontSize='12px' fontWeight='300' color='#363B47'>The Nations Development and Creation Of Sound Development</Text> 
            </Box>
            <Box mt='.2rem'>
              <Text fontWeight='bold' fontSize='12px' color='#363B47'>Your Note/Question</Text>
              <Text mt='.2rem' fontSize='12px' fontWeight='300' color='#363B47'>Lorem ipsum dolor sit amet consectetur. Volutpat egestas nulla rhoncus vitae suspendisse ipsum. Mattis id sed egestas cras faucibus at dignissim. Vel egestas tincidunt curabitur mauris ullamcorper eget vestibulum. Cras potenti tellus nec sit amet elit tellus lacinia semper. Ac scelerisque non dui est quam leo diam. Purus libero elementum ultricies amet placerat et id di</Text> 
            </Box>
          </Stack>
      </Box>
      <Flex gap='1rem' alignItems='center' flexWrap='wrap' p='1rem'>
          <Button fontWeight='thin' border='1px' size='sm' fontSize='14px' color='brand.white' bg='brand.primary'>Join meeting</Button>
          <Button bg='#F0F3FF' fontWeight='thin' border='1px' size='sm' fontSize='14px' color='brand.primary' borderColor='brand.primary'>Send message</Button>
          <Button bg='#F0F3FF' fontWeight='thin' border='1px' size='sm' fontSize='14px' color='brand.primary' borderColor='brand.primary'>Reschedule</Button>
          <Button bg='none' fontWeight='thin'border='1px' color='#FF3E3E' borderColor='#FF3E3E' size='sm'>Cancel</Button>
      </Flex>
    </Stack>
  )
}

export default OnGoing