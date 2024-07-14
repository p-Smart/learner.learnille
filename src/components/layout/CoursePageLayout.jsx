
import React from 'react'
import { Flex,Box } from '@chakra-ui/react'
import EventSecion from '../event/EventSecion'

const CoursePageLayout = (props) => {
    return (
      <Flex direction={{base:'column', md:'row' }} mt='1rem' gap='.5rem'>
          <Box w={{base:'100%'}}>{props.children}</Box>
          <Box w={{base:'100%', lg: '350px'}}>
            <EventSecion/>   
          </Box>
      </Flex>
    )
}

export default CoursePageLayout