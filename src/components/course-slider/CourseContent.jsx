import React from 'react'
import { 
  Stack, 
  Flex, 
  Box, 
  Image, 
  Text, 
  Checkbox 
} from '@chakra-ui/react'

const CourseContent = () => {
  return (
    <Stack bg='brand.white'>
        <Box borderBottom='1px solid #eee'>     
            <Flex py='1rem' px='.5rem' borderBottom='#eee' direction={{base: 'column', md: 'row'}} justifyContent='space-between' gap='2px'>
                <Box display='flex' alignItems='center' gap='1rem'>
                   <Image src='/assets/icons/Arrow-Down.svg' alt='arrow-down'/>
                   <Text color='brand.primary' fontSize='12px'>Getting started with graphics design</Text>                    
                </Box>
                <Box display='flex' alignItems='center' gap='1rem'>
                    <Box display='flex' color='#4E5566' fontSize='11px'><Image src='/assets/icons/byoutube.svg' alt='video-play'/><Text>4 lectures</Text></Box>
                    <Box display='flex' color='#4E5566' fontSize='11px'><Image src='/assets/icons/BlueClock.svg' w='18px' alt='clock'/><Text>4hr 50mins</Text></Box>
                    <Box display='flex' color='#4E5566' fontSize='11px'><Image src='/assets/icons/greenCheck.svg' alt='video-play'/><Text>(1/4)</Text></Box>
                </Box>
            </Flex>
            <Flex _hover={{ background:'#6FB1FC'}} py='1rem' px='.5rem' direction={{base: 'column', md: 'row'}} justifyContent='space-between' gap='2px'>
                <Checkbox defaultChecked>
                  <Text fontSize='12px'>what is webflow</Text>
                </Checkbox>
                <Box display='flex' alignItems='center' gap='1rem'>
                    <Box display='flex' color='#4E5566' fontSize='11px'><Image src='/assets/icons/greenCheck.svg' alt='video-play'/><Text>07:38</Text></Box>
                </Box>
            </Flex>
        </Box>
    </Stack>
  )
}

export default CourseContent