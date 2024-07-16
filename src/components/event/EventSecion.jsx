import React,{useState} from 'react'
import DatePicker from '../calender/DatePicker'
import { 
  Flex,
  Card, 
  Box, 
  Text,
  Divider, 
  Heading,
  Accordion, 
  AccordionItem,
  Button,
  Stack,
  Image
} from '@chakra-ui/react'

const EventSecion = () => {
  const [isOpen , setIsOpen ] = useState('false')
  const handleViewMore = () => {
    setIsOpen(!isOpen)
    console.log(isOpen);
  }

  return (
    <Box>
      <DatePicker/>
      <Card mt='1rem'>
        <Heading p='1rem' fontSize='17px'>Upcoming Events</Heading>
        <Divider border='#eee'/>
        <Box>
          <Accordion allowMultiple>
            <AccordionItem>
              <Flex px='1rem' py='.5rem' justifyContent='space-between' alignItems='center'>
                <Text fontSize='14px' color='#363B47'>How to make your first million</Text>
                <Button bg='none' _hover='none' color='#363B47' fontSize='12px' onClick={() => handleViewMore()}>View {isOpen ? 'Less':'More'} <Box display='flex' gap='1rem' transform={ isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}><Image src='/assets/icons/arrow-up.svg' alt='arrow-up'/></Box></Button>
              </Flex>
              <Stack px='1rem' py='.5rem'>
                <Box display='flex' fontSize='12px' alignItems='center' gap='.5rem'><Image w='20px' color='#363B47' src='/assets/icons/bluebook.svg' alt='book'/>Wed, Nov. 14 2023</Box> 
                <Box display='flex' fontSize='12px' alignItems='center' gap='.5rem'><Image w='20px' color='#363B47' src='/assets/icons/BlueClock.svg' alt='clock'/>10:00pm - 12:00pm</Box> 
              </Stack>
              <Flex p='1rem' gap='1rem' display={ isOpen ? 'flex' : 'none' }  alignItems='center'>
                <Button bg='#F0F3FF' fontWeight='thin' border='1px' size='sm' fontSize='14px' color='brand.primary' borderColor='brand.primary'>Reschedule</Button>
                <Button bg='none' fontWeight='thin'border='1px' color='#FF3E3E' borderColor='#FF3E3E' size='sm' onClick={() => handleViewMore()}>Cancel</Button>
              </Flex>
            </AccordionItem>
          </Accordion>
        </Box>
      </Card>
    </Box>
  )
}

export default EventSecion