import React from 'react'
import { 
  Stack, 
  Flex, 
  Box, 
  Image, 
  Text, 
  Checkbox 
} from '@chakra-ui/react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const CourseContent = () => {
  return (
    <Stack bg='brand.white'>
        <Box borderBottom='1px solid #eee'>     
            <Flex py='1rem' px='.5rem' border='1px' borderColor='#eee' direction={{base: 'column', md: 'row'}} justifyContent='space-between' gap='2px'>
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
            <Box>     
                <Flex _hover={{ background:'#6FB1FC'}} py='1rem' px='.5rem' direction={{base: 'column', md: 'row'}} justifyContent='space-between' gap='2px'>
                    <Checkbox defaultChecked>
                      <Text fontSize='12px'>what is webflow</Text>
                    </Checkbox>
                    <Box display='flex' alignItems='center' gap='1rem'>
                        <Box display='flex' color='#4E5566' fontSize='11px'><Image src='/assets/icons/greenCheck.svg' alt='video-play'/><Text>07:38</Text></Box>
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
                <Flex _hover={{ background:'#6FB1FC'}} py='1rem' px='.5rem' direction={{base: 'column', md: 'row'}} justifyContent='space-between' gap='2px'>
                    <Checkbox defaultChecked>
                      <Text fontSize='12px'>what is webflow</Text>
                    </Checkbox>
                    <Box display='flex' alignItems='center' gap='1rem'>
                        <Box display='flex' color='#4E5566' fontSize='11px'><Image src='/assets/icons/greenCheck.svg' alt='video-play'/><Text>07:38</Text></Box>
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
            <Flex py='1rem' px='.5rem' border='1px' borderColor='#eee' direction={{base: 'column', md: 'row'}} justifyContent='space-between' gap='2px'>
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
            <Box>     
                <Flex _hover={{ background:'#6FB1FC'}} py='1rem' px='.5rem' direction={{base: 'column', md: 'row'}} justifyContent='space-between' gap='2px'>
                    <Checkbox defaultChecked>
                      <Text fontSize='12px'>what is webflow</Text>
                    </Checkbox>
                    <Box display='flex' alignItems='center' gap='1rem'>
                        <Box display='flex' color='#4E5566' fontSize='11px'><Image src='/assets/icons/greenCheck.svg' alt='video-play'/><Text>07:38</Text></Box>
                    </Box>
                </Flex>
                <Flex _hover={{ background:'#6FB1FC'}} py='1rem' px='.5rem' direction={{base: 'column', md: 'row'}} justifyContent='space-between' gap='2px'>
                    <Checkbox>
                      <Text fontSize='12px'>what is webflow</Text>
                    </Checkbox>
                    <Box display='flex' alignItems='center' gap='1rem'>
                        <Box display='flex' color='#4E5566' fontSize='11px'><Image src='/assets/icons/greenCheck.svg' alt='video-play'/><Text>07:38</Text></Box>
                    </Box>
                </Flex>
                <Flex _hover={{ background:'#6FB1FC'}} py='1rem' px='.5rem' direction={{base: 'column', md: 'row'}} justifyContent='space-between' gap='2px'>
                    <Checkbox disabled>
                      <Text fontSize='12px'>what is webflow</Text>
                    </Checkbox>
                    <Box display='flex' alignItems='center' gap='1rem'>
                        <Box display='flex' color='#4E5566' fontSize='11px'><Image src='/assets/icons/greenCheck.svg' alt='video-play'/><Text>07:38</Text></Box>
                    </Box>
                </Flex>
                <Flex _hover={{ background:'#6FB1FC'}} py='1rem' px='.5rem' direction={{base: 'column', md: 'row'}} justifyContent='space-between' gap='2px'>
                    <Checkbox>
                      <Text fontSize='12px'>what is webflow</Text>
                    </Checkbox>
                    <Box display='flex' alignItems='center' gap='1rem'>
                        <Box display='flex' color='#4E5566' fontSize='11px'><Image src='/assets/icons/greenCheck.svg' alt='video-play'/><Text>07:38</Text></Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    </Stack>
  )
}

export default CourseContent