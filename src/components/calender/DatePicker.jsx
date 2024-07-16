import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { Box, Text, Divider } from '@chakra-ui/react';
import './Calender.css'

const DatePicker = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Box bg='brand.white' p='.5rem'>
      <Calendar
        onChange={onChange} 
        value={value} 
      />
      <Divider mt='1.5rem'/>
      <Text textAlign='center' p='1rem' color='brand.primary' fontWeight='bold'>3 events</Text>
    </Box>
  );
}

export default DatePicker;