import React from 'react'
import { 
  Box, 
  Card, 
  Heading, 
  Text, 
  Flex,
  Divider,
  Image,
  Button,
  Stack,
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import Progress from '../progress/Progress'

const MyCourseCard = ({hasCompleted}) => {
    return (
        <ChakraLink style={{ textDecoration: "none" }} as={ReactRouterLink} to='/marketplace/course/1'>       
          <Card p='.5rem' flexGrow={1}>
            <Box>
              <Image
                h='127px' w='100%'
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
              />
              <Progress hasCompleted={hasCompleted}/>
              { !hasCompleted && (
                <Box mt='.5rem' justifyContent='space-between'>
                  <Heading size='sm' fontSize='14px'>The Complete Web Development Bootcamp</Heading>
                  <Text mt='.5rem' noOfLines='1' fontSize='12px' mb='.5rem'>167. What You'll Okay Need to Get Started</Text>
                </Box>
              )}
              <Divider />
              <Stack pt='.5rem' justifyContent='space-between'>
                { hasCompleted ? (
                  <>
                    <Button w='full' bg='brand.primary' color='brand.white' fontSize='12px' h='30px'>View Certificate</Button>
                    <Button w='full' color='brand.primary' fontSize='14px' h='30px'>Watch Again</Button>
                  </>
                ):(
                  <Button w='full' color='brand.primary' fontSize='14px' h='30px'>Resume Course</Button>
                )}
              </Stack>
            </Box>
          </Card>
        </ChakraLink>
    )
}

export default MyCourseCard