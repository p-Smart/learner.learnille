import { Flex,Box } from "@chakra-ui/react"
import CourseContent from "../course-slider/CourseContent"

const CourseDetailWrapper = (props) => {
   return (
      <Flex direction={{base:'column', md:'row' }} mt='1rem' gap='.5rem'>
         <Box w={{base:'100%'}} >{props.children}</Box>
         <Box w={{base:'100%', md: '750px'}}>
            <CourseContent/>
         </Box>
      </Flex>
   )
}

export default CourseDetailWrapper