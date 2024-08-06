import React from 'react'
import MainLayout from '../../../../../components/layout/MainLayout'
import ConsultationWrapper from '../../../../../components/layout/ConsultationWrapper'
import TabsView from '../../../../../components/utility/Tabs'
import { 
    Image,
    Stack,
    Grid,
    GridItem,
    Flex,
    Box,
    Text,
    Heading,
    Divider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar
} from '@chakra-ui/react'
import ConsultionCard from '../../../../../components/cards/ConsultionCard'
import ReactPlayer from 'react-player'
import ASSETS from '../../../../../../public/assets'

const tabOptions = [
    'Consultation overview', 'Reviews'
];
  
const ConsultationOverview = () => (
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
        <Flex  rounded='lg' direction='column' p='2rem' bg='brand.white'>
           <Heading fontSize='16px'>What you will gain</Heading>
           <Flex mt='1rem' gap='.5rem'>
                <Box>
                   <Image w='30px' src={ASSETS.bluecheck} alt='bluecheck'/>
                </Box>
                <Text fontSize='12px'>
                Lorem ipsum dolor sit amet consectetur. Placerat tellus purus faucibus viverra sit. Augue eu fringilla faucibus mauris ultrices risus commodo justo magna. Mauris amet tincidunt ac.
                </Text>
           </Flex>
           <Flex mt='1rem' gap='.5rem'>
                <Box>
                   <Image w='30px' src={ASSETS.bluecheck} alt='bluecheck'/>
                </Box>
                <Text fontSize='12px'>
                Lorem ipsum dolor sit amet consectetur. Placerat tellus purus faucibus viverra sit. Augue eu fringilla faucibus mauris ultrices risus commodo justo magna. Mauris amet tincidunt ac.
                </Text>
           </Flex>
           <Flex mt='1rem' gap='.5rem'>
                <Box>
                   <Image w='30px' src={ASSETS.bluecheck} alt='bluecheck'/>
                </Box>
                <Text fontSize='12px'>
                Lorem ipsum dolor sit amet consectetur. Placerat tellus purus faucibus viverra sit. Augue eu fringilla faucibus mauris ultrices risus commodo justo magna. Mauris amet tincidunt ac.
                </Text>
           </Flex>
           <Flex mt='1rem' gap='.5rem'>
                <Box>
                   <Image w='30px' src={ASSETS.bluecheck} alt='bluecheck'/>
                </Box>
                <Text fontSize='12px'>
                Lorem ipsum dolor sit amet consectetur. Placerat tellus purus faucibus viverra sit. Augue eu fringilla faucibus mauris ultrices risus commodo justo magna. Mauris amet tincidunt ac.
                </Text>
           </Flex>
        </Flex>
        <Stack rounded='lg' p='2rem' bg='brand.white'>
            <Heading fontSize='16px'>Instructor</Heading>
            <Divider py='.3rem'/>
            <Flex mt='.5rem'>
                <Flex flex='1' gap='4'>
                    <Avatar size='xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>
                    <Box>
                        <Box display='flex' flexDirection='column'>
                           <Heading fontSize='20px' color='brand.grey.700'>Adigun kofoworola Aduke</Heading>
                           <Text py='.5rem' fontSize='12px' color='brand.grey.400'>Enterpreneur & Designer &bull; Founder of shiftride</Text>
                           <Flex gap='1rem' py='.5rem'>
                              <Box display='flex' gap='4px' alignItems='center'>
                                <div>&#11088;</div>
                                <Text fontSize='12px' fontWeight='bold'>4.6</Text>
                                <Text fontSize='12px'>Course rating</Text>
                              </Box>
                              <Box display='flex' gap='4px' alignItems='center'>
                                <Image w='16px' src='/assets/images/Users.svg' alt='people'/>
                                <Text fontWeight='bold' fontSize='12px'>65</Text>
                                <Text fontSize='12px'>Active Student</Text>
                              </Box>
                              <Box display='flex' alignItems='center'>
                                <Image w='16px' src='/assets/icons/PlayYout.svg' alt='people'/>
                                <Text fontSize='12px' fontWeight='bold'>01</Text>
                                <Text fontSize='12px'>Courses</Text>
                              </Box>
                           </Flex>
                        </Box>
                        <Text fontSize='12px' noOfLines='3' color='brand.grey.400'>
                            I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Stack>
    </Stack>
);
  
const Reviews = () => (  
   <Box bg='brand.white'>
      <Flex justifyContent='space-between' p='1rem'>
         <Text fontWeight='bold'>Students Feedback</Text>
         <Menu>
            <MenuButton color='brand.grey.400' fontSize='12px'>5 Star rating &#x25BC;</MenuButton>
            <MenuList>
                <MenuItem as='a' href='#'>
                4 Star rating
                </MenuItem>
                <MenuItem as='a' href='#'>
                3 Star rating
                </MenuItem>
                <MenuItem as='a' href='#'>
                2 Star rating
                </MenuItem>
                <MenuItem as='a' href='#'>
                1 Star rating
                </MenuItem>
            </MenuList>
         </Menu>
      </Flex>
      <Divider/>
      <Box justifyContent='space-between' p='1rem'>
        <Flex spacing='4'>
            <Flex flex='1' gap='4'>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>
                <Box>
                    <Box display='flex' alignItems='center' gap='1rem'>
                       <Heading size='xs'>Segun Adebayo</Heading>&bull;<Text fontSize='12px' color='brand.grey.400'>1 week ago</Text>
                    </Box>
                   <Flex>
                      <div>&#11088;</div>
                      <div>&#11088;</div>
                      <div>&#11088;</div>
                      <div>&#11088;</div>
                      <div>&#11088;</div>
                   </Flex>
                   <Text fontSize='14px' color='brand.grey.400'>
                       I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.
                   </Text>
                </Box>
            </Flex>
        </Flex>
      </Box>
   </Box>    
);
  
const tabView = [
    <ConsultationOverview key="c=overview" />, <Reviews key="consultation" />
];
  

const MKTConsultDetails = () => {
  return (
    <MainLayout>
        <ConsultationWrapper>
            <TabsView tab={tabOptions} view={tabView}/> 
            <Box m='1rem'>
                <Text fontWeight='bold' py='1rem'>Similar Consultations</Text>
                <Grid templateColumns="repeat(auto-fit, minmax(337px, 1fr))" gap="1rem">
                    <GridItem>
                       <ConsultionCard />
                    </GridItem>
                    <GridItem>
                       <ConsultionCard />
                    </GridItem>
                </Grid>
            </Box>
        </ConsultationWrapper>
    </MainLayout>
  )
}

export default MKTConsultDetails