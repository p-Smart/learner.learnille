import React from 'react'
import MainLayout from '../../components/layout/MainLayout'
import { 
    Stack,
    Heading,
    Divider,
    Box,
    Text,
    Flex,
    Button,
 } from '@chakra-ui/react'
import Progress from '../../components/progress/Progress'

const MyCerificate = () => {
  return (
    <MainLayout>
      <Stack mt='1rem' bg='brand.white'>
        <Box p='1rem'>
          <Heading  fontSize='20px'>
            My certificates
          </Heading>
        </Box>
        <Divider/>
        <Flex p='1rem' alignItems='center' justifyContent='space-between'>
          <Box w={{ base: '100%' , md:'300px'}}>
              <Progress hasCompleted={true}/>
              <Text fontSize='13px' fontWeight='bold' textAlign='center'>The Complete Web Development Bootcamp</Text>
          </Box>
          <Box>
              <Flex gap='.5rem'>
                <Button fontSize='12px'>View Certificate</Button>
                <Button fontSize='12px'bg='brand.primary' color='white'>Download Certificate</Button>
              </Flex>
          </Box>
        </Flex>
        <Divider/>
        <Flex p='1rem' alignItems='center' justifyContent='space-between'>
          <Box w={{ base: '100%' , md:'300px'}}>
              <Progress hasCompleted={true}/>
              <Text fontSize='13px' fontWeight='bold' textAlign='center'>The Complete Web Development Bootcamp</Text>
          </Box>
          <Box>
              <Flex gap='.5rem'>
                <Button fontSize='12px'>View Certificate</Button>
                <Button fontSize='12px'bg='brand.primary' color='white'>Download Certificate</Button>
              </Flex>
          </Box>
        </Flex>
        <Divider/>
      </Stack>
    </MainLayout>
  )
}

export default MyCerificate