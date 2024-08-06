import React, { useState } from 'react';
import { 
  Stack, 
  Flex, 
  Box, 
  Image, 
  Text, 
  Checkbox,
  Collapse,
  Heading,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CourseContent = () => {
  const navigate = useNavigate()
  const [activeState, setActiveState] = useState('0');
  const menuData = [
    {
      section: '01',
      isBlock: false,
      material: [
        {
          id: '1',
          title: 'Getting Started with design',
          courseItem: [
            {
              title: "What is webflow?",
              duration: '10:45',
              ongoing: false,
              completed: true,
            },
            {
              title: "What is webflow?",
              duration: '10:45',
              ongoing: false,
              completed: true,
            },
            {
              title: "What is webflow?",
              duration: '10:45',
              ongoing: false,
              completed: true,
            },
            {
              title: "What is webflow?",
              duration: '10:45',
              ongoing: false,
              completed: true,
            },
          ],
        },
        {
          id: '2',
          title: 'Getting Started with design',
          courseItem: [
            {
              title: "What is webflow?",
              duration: '10:45',
              ongoing: false,
              completed: true,
            },
            {
              title: "What is webflow?",
              duration: '10:45',
              ongoing: false,
              completed: true,
            },
            {
              title: "What is webflow?",
              duration: '10:45',
              ongoing: false,
              completed: true,
            },
            {
              title: "What is webflow?",
              duration: '10:45',
              ongoing: false,
              completed: true,
            },
          ],
        },
        {
          id: '3',
          title: 'Getting Started with design',
          courseItem: [
            {
              title: "What is webflow?",
              duration: '10:45',
              ongoing: false,
              completed: true,
            },
            {
              title: "What is webflow?",
              duration: '10:45',
              ongoing: false,
              completed: true,
            },
            {
              title: "What is webflow?",
              duration: '10:45',
              ongoing: false,
              completed: true,
            },
            {
              title: "What is webflow?",
              duration: '10:45',
              ongoing: false,
              completed: true,
            },
          ],
        },
      ]
    },
    {
      section: '02',
      isBlock: false,
      material: [
        {
          id: '4',
          title: 'Advanced Topics',
          courseItem: [
            {
              title: "Advanced Design",
              duration: '15:30',
              ongoing: false,
              completed: true,
            },
            {
              title: "Design Systems",
              duration: '20:00',
              ongoing: false,
              completed: true,
            },
          ],
        },
      ]
    },
    {
      section: '03',
      isBlock: true,
      material: [
        {
          id: '4',
          title: 'Advanced Topics',
          courseItem: [
            {
              title: "Advanced Design",
              duration: '15:30',
              ongoing: false,
              completed: true,
            },
            {
              title: "Design Systems",
              duration: '20:00',
              ongoing: false,
              completed: true,
            },
          ],
        },
      ]
    }
  ];

  const handleMenuBox = (val) => {
    setActiveState(activeState === val ? '0' : val);
  };

  return (
    <Box>
      { menuData && menuData.length !== 0 && (
        menuData.map(section => (
          <Box bg='brand.white' key={section.section}>
            <Flex px='5px' justifyContent='space-between'>
              <Heading fontSize='20px' py='1rem' color={section.isBlock && '#6E7485'}>Section {section.section}</Heading>
              <Box display={section.isBlock ? 'flex' : 'none'} alignItems='center' gap='1rem'>
                <Box display='flex' color='#4E5566' fontSize='11px'>
                  <Image src='/assets/icons/folder.svg' alt='video-play' />
                  <Text>2 Sub sections</Text>
                </Box>
                <Box display='flex' color='#4E5566' fontSize='11px'>
                  <Image src='/assets/icons/PlayCircle.svg' alt='folder' />
                  <Text>202 lectures</Text>
                </Box>
                <Box display='flex' color='#4E5566' fontSize='11px'>
                  <Image src='/assets/icons/folderclock.svg' alt='folderclock' />
                  <Text>19h 37m</Text>
                </Box>
                <Box display='flex' gap='5px' color='#4E5566' fontSize='11px'>
                  <Image src='/assets/icons/unlock.svg' alt='unlock' />
                  <Text decoration='underline' color='#6E7485'>Unblock</Text>
                  <Image src='/assets/icons/arrow-up.svg' alt='arow-down' />                  
                </Box>
              </Box>
            </Flex>
            <Box px='5px' alignItems='center' justifyContent='space-between' display={section.section !== '01' ? 'none' : 'flex'}>
              <Text fontSize='15px' color={section.isBlock && '#4E5566'}>Course Content</Text>
              <Text fontSize='11px' color='brand.primary' fontWeight='bold'>15% Completed</Text>
            </Box>
            <Box display={section.section !== '01' ? 'none' : 'flex'} position='relative' mt='.5rem'>
              <Box w='100%' h='3px' rounded='lg' bg='#B7BAC7' ></Box>
              <Box w='40%' bg='brand.primary' h='3px' rounded='lg' position='absolute' top='0px'></Box>
            </Box>
            <Stack display={section.isBlock ? 'none' : 'block'} bg='brand.white'>
              <Box borderBottom='1px solid #eee'>
                {section.material && section.material.length !== 0 && (
                  section.material.map(dataItem => (
                    <Box key={dataItem.id}>
                      <Flex
                        py='1rem'
                        px='.5rem'
                        border='1px'
                        borderColor='#eee'
                        direction={{ base: 'column', md: 'row' }}
                        justifyContent='space-between'
                        gap='2px'
                      >
                        <Box display='flex' alignItems='center' gap='1rem'>
                          <Image 
                            onClick={() => handleMenuBox(dataItem.id)} 
                            transition='.5s ease' 
                            transform={activeState === dataItem.id ? 'rotate(180deg)' : 'rotate(0deg)'} 
                            cursor='pointer' 
                            src='/assets/icons/Arrow-Down.svg' 
                            alt='arrow-down' 
                          />
                          <Text color='brand.primary' fontSize='12px'>{dataItem.title}</Text>
                        </Box>
                        <Box display='flex' alignItems='center' gap='1rem'>
                          <Box display='flex' color='#4E5566' fontSize='11px'>
                            <Image src='/assets/icons/byoutube.svg' alt='video-play' />
                            <Text>{dataItem.courseItem.length} lectures</Text>
                          </Box>
                          <Box display='flex' color='#4E5566' fontSize='11px'>
                            <Image src='/assets/icons/BlueClock.svg' w='18px' alt='clock' />
                            <Text>4hr 50mins</Text>
                          </Box>
                          <Box display='flex' color='#4E5566' fontSize='11px'>
                            <Image src='/assets/icons/greenCheck.svg' alt='video-play' />
                            <Text>(1/4)</Text>
                          </Box>
                        </Box>
                      </Flex>
                      <Collapse in={activeState === dataItem.id} animateOpacity>
                        <Box transition='.5s ease' overflow='hidden' height={activeState === dataItem.id ? '100%' : '0px'}>
                          {dataItem.courseItem.map((content, index) => (
                            <Flex
                              key={index}
                              _hover={{ background: '#6FB1FC' }}
                              py='1rem'
                              px='.5rem'
                              direction={{ base: 'column', md: 'row' }}
                              justifyContent='space-between'
                              gap='2px'
                            >
                              <Checkbox isChecked={content.completed}>
                                <Text fontSize='12px'>{content.title}</Text>
                              </Checkbox>
                              <Box display='flex' alignItems='center' gap='1rem'>
                                <Box display='flex' color='#4E5566' fontSize='11px'>
                                  <Image src='/assets/icons/Play.svg' alt='video-play' />
                                  <Text ml='5px'>{content.duration}</Text>
                                </Box>
                              </Box>
                            </Flex>
                          ))}
                        </Box>
                      </Collapse>
                    </Box>
                  ))
                )}
              </Box>
            </Stack>
          </Box>
        ))
      )}
      <Box bg='brand.white' display='flex' alignItems='center' mt='1rem' p='1rem' justifyContent='space-between'>
        <Text color='#363B47' fontSize='18px'>To access this session</Text>
        <Button onClick={() => navigate('/pay')} bg='#F0F3FF' color='brand.primary' h='50px' rounded='lg' w='190px'>Buy now</Button>
      </Box>
    </Box>
  );
};

export default CourseContent;
