import React from 'react'
import { 
    Card, 
    Flex,
    Heading,
    Box,
    Text,
    Textarea,
    Image,
} from '@chakra-ui/react'
import FormInput from '../utility/FormInput'

const PayForm = () => {
  const handleInputData= () => {
     console.log('hello')
  }

  return (
    <Flex gap='1rem' direction='column'> 
       <Card p='1rem'>
          <Heading fontSize='16px'mb='1rem' fontWeight='bold'>Gift Courses</Heading>
            <Box>
                <FormInput 
                    placeholder='Enter your email address here'
                    label='Recepient’s full name'
                    type='text'
                    name='fullname'
                    errorMsg='Full name field is required'
                    inputData={handleInputData}
                />
            </Box>
            <Box mt='1rem'>
                <FormInput 
                    placeholder='Enter your email address here'
                    label='Recepient’s email'
                    type='email'
                    name='email'
                    errorMsg='Email field is required'
                    inputData={handleInputData}
                />
            </Box>
            <Box mt='1rem'>
               <Text fontSize='12px' mb='8px'>Additional message</Text>
                <Textarea
                    focusBorderColor="brand.primary" 
                    placeholder='Add your personal message here... '
                    size='sm'
                />
            </Box>
       </Card>
       <Card p='1rem'>
            <Heading fontSize='16px'mb='1rem' fontWeight='bold'>Payment method:</Heading>
            <Box display='flex' flexDirection='column' gap='1rem'>
              <Flex gap='5rem' border='1px' rounded='lg' p='10px' borderColor='#E8EAEE'>
                  <Box display='flex' alignItems='center' gap='2rem'>   
                    <Image src='' alt=''/>
                    <Text fontWeight='600' fontSize='12px' color='brand.grey.400'>4598 **** ****</Text>
                  </Box>
                  <Box display='flex' alignItems='center' gap='2rem'>   
                    <Text fontWeight='600' fontSize='12px' color='brand.grey.400'>04/25</Text>
                    <Text fontWeight='600'fontSize='12px' color='brand.grey.400'>Makanju Oluwafemi</Text>
                  </Box>
              </Flex>
              <Flex gap='5rem' border='1px' rounded='lg' p='10px' borderColor='#E8EAEE'>
                  <Box display='flex' alignItems='center' gap='2rem'>   
                    <Image src='' alt=''/>
                    <Text fontSize='12px' color='brand.grey.400'>You will be redirected to the PayPal site after reviewing your order.</Text>
                  </Box>
              </Flex>
              <Flex justifyContent='space-between' border='1px' rounded='lg' p='10px' borderColor='#1C9729'>
                  <Box display='flex' alignItems='center' gap='2rem'>   
                    <Image src='' alt=''/>
                    <Text fontWeight='600' fontSize='12px' color='brand.grey.400'>New Payment Cards</Text>
                  </Box>
                  <Box display='flex' alignItems='center' gap='2rem'> 
                    <Image src='' alt=''/>  
                  </Box>
              </Flex>
            </Box>
       </Card>
    </Flex>
  )
}

export default PayForm