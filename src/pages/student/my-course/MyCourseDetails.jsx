import React from 'react'
import MainLayout from '../../../components/layout/MainLayout'
import CourseDetailWrapper from '../../../components/layout/CourseDetailWrapper'
import TabsView from '../../../components/utility/Tabs'
import { 
    Stack,
    Grid,
    GridItem,
    Flex,
    Box,
    Text,
    Heading,
} from '@chakra-ui/react'
import ReactPlayer from 'react-player'
import CourseCard from '../../../components/cards/CourseCard'

const tabOptions = [
    'Description', 'Lesson Note','Attached File','Comments'
];
  
const Overview = () => (
    <div>
        Overview
    </div>
);
  
const Curriculum = () => (  
   <Box bg='brand.white'>
       Curriculum
   </Box>    
);
  
const Instructor = () => (  
    <Box bg='brand.white'>
        Instructor
    </Box>    
);

const Review = () => (  
<Box bg='brand.white'>
    Curriculum
</Box>    
);

const tabView = [
    <Overview key="overview" />, <Curriculum key="Curriculum" />,<Instructor key='Instructor'/>,<Review key='Review'/>
];
  

export const MyCourseDetails = () => {
  return (
    <MainLayout>
       <CourseDetailWrapper>
            <Stack>
                <Flex direction='column' p='2rem' bg='brand.white'>
                    <Box py='1rem'>
                    <Heading fontSize='20px' color='brand.grey.700'>How to make your first Million as a Front-End Developer</Heading>
                    <Text py='1rem' fontSize='14px' color='brand.grey.400'>Lorem ipsum dolor sit amet consectetur. Varius in convallis gravida sagittis faucibus est dignissim nunc diam. Et egestas vulputate sed aliquam</Text>
                    </Box>
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
