import React from 'react'
import { 
  Box, 
  Card, 
  Heading, 
  Text, 
  Divider,
  Image,
  Button,
  Stack,
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import Progress from '../progress/Progress'
import { useNavigate } from 'react-router-dom'

const MyCourseCard = ({hasCompleted}) => {
    const navigate = useNavigate()
    return (
        <Card p='.7rem' flexGrow={1}>
          <Box>
            <Image
              h='127px' w='100%'
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
            />
            <Progress hasCompleted={hasCompleted}/>
            { !hasCompleted && (
              <Box py='.4rem' justifyContent='space-between'>
                <Heading size='sm' fontSize='12px' color='#222021'>The Complete Web Development Bootcamp</Heading>
                <Text mt='.5rem' noOfLines='1' color='#6E7485' fontSize='12px' mb='.5rem'>167. What You'll Okay Need to Get Started</Text>
              </Box>
            )}
            <Divider />
            <Stack pt='1rem' justifyContent='space-between'>
              { hasCompleted ? (
                <>
                  <Button w='full' bg='brand.primary' color='brand.white' fontSize='12px' h='30px'>View Certificate</Button>
                  <Button onClick={() => navigate('/my-course/1')} w='full' color='brand.primary' fontSize='14px' h='30px'>Watch Again</Button>
                </>
              ):(
                <Button w='full' onClick={() => navigate('/my-course/1')} color='brand.primary' fontSize='14px' h='34px'>Resume Course</Button>
              )}
            </Stack>
          </Box>
        </Card>
    )
}

export default MyCourseCard