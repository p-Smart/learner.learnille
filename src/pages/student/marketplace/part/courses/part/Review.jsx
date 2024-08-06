import React from 'react'
import { Box, Flex, Divider, Text, Menu, MenuItem, MenuButton,MenuList, Avatar, Heading } from '@chakra-ui/react'
import ConsultationRating from '../../../../../../components/chart/ConsultationRating'

const Review = () => {
  return (
    <Box>
        <ConsultationRating/>
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
    </Box>
  )
}

export default Review