import React from 'react'
import MainLayout from '../../../components/layout/MainLayout'
import CourseDetailWrapper from '../../../components/layout/CourseDetailWrapper'
import TabsView from '../../../components/utility/Tabs'
import { 
    Stack,
    Button,
    Flex,
    Box,
    Text,
    Heading,
} from '@chakra-ui/react'
import ReactPlayer from 'react-player'

const tabOptions = [
    'Description', 'Lesson Note','Attached File','Comments'
];
  
const Description = () => (
    <Box>
        <Heading fontSize='20px' py='1rem' color='#222021'>Lecture Description</Heading>
        <Text fontSize='14px' color='#4E5566' mb='2rem'>
        Lorem ipsum dolor sit amet consectetur. Venenatis scelerisque urna et lectus amet orci ac nibh enim. Lorem urna dolor pellentesque facilisi erat aliquet gravida. Sed enim nisl viverra molestie egestas venenatis fermentum. Lacus sollicitudin tellus mi suspendisse. Venenatis cras nisl eu sapien lacus donec condimentum morbi id. Etiam facilisi habitant suspendisse at leo viverra amet et feugiat. Fames eu imperdiet integer proin arcu. Ut dignissim est enim venenatis odio dictum sed dolor. Morbi vel ut vitae neque nec id et faucibus. Facilisi ipsum aliquam nibh ullamcorper lorem nisi. Eget volutpat nec praesent tellus.
        Nulla in nulla sed sed eget urna laoreet egestas lectus. Tempus aliquet blandit egestas quis tristique odio ut id. Quam aliquam lectus amet vitae elit in risus. Commodo mattis platea diam tellus orci. Amet maecenas morbi vel quam congue aliquam tincidunt 
        </Text>
    </Box>
);
  
const LessonNote = () => (  
   <Box>
       <Flex justifyContent='space-between'>      
            <Heading fontSize='20px' py='1rem' color='#222021'>Lecture Note</Heading>
            <Button bg='none' color='brand.primary' fontSize='12px' fontWeight='thin'>DownLoad Notes</Button>
       </Flex>
        <Text fontSize='14px' color='#4E5566' mb='2rem'>
        Lorem ipsum dolor sit amet consectetur. Venenatis scelerisque urna et lectus amet orci ac nibh enim. Lorem urna dolor pellentesque facilisi erat aliquet gravida. Sed enim nisl viverra molestie egestas venenatis fermentum. Lacus sollicitudin tellus mi suspendisse. Venenatis cras nisl eu sapien lacus donec condimentum morbi id. Etiam facilisi habitant suspendisse at leo viverra amet et feugiat. Fames eu imperdiet integer proin arcu. Ut dignissim est enim venenatis odio dictum sed dolor. Morbi vel ut vitae neque nec id et faucibus. Facilisi ipsum aliquam nibh ullamcorper lorem nisi. Eget volutpat nec praesent tellus.
        Nulla in nulla sed sed eget urna laoreet egestas lectus. Tempus aliquet blandit egestas quis tristique odio ut id. Quam aliquam lectus amet vitae elit in risus. Commodo mattis platea diam tellus orci. Amet maecenas morbi vel quam congue aliquam tincidunt 
        </Text>
   </Box>    
);
  
const Attached = () => (  
    <Box>
        Instructor
    </Box>    
);

const Comments = () => (  
<Box>
    Curriculum
</Box>    
);

const tabView = [
    <Description key="desc" />, <LessonNote key="lesson" />,<Attached key='attached'/>,<Comments key='comment'/>
];
  

export const MyCourseDetails = () => {
  return (
    <MainLayout>
       <CourseDetailWrapper>
            <Stack>
                <Flex direction='column' p='2rem' bg='brand.white'>
                    <Box width="100%" height="400px">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=BK07WUEMvPk"
                            width="100%"
                            height="100%"
                            controls
                        />
                    </Box>
                </Flex>
            </Stack>
            <TabsView tab={tabOptions} view={tabView}/>
        </CourseDetailWrapper>
    </MainLayout>
  )
}

export default MyCourseDetails;
