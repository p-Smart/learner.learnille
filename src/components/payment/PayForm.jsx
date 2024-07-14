import React from 'react'
import { 
    Checkbox,
    Button,
    Card, 
    Flex,
    Heading,
    Box,
    Text,
    Textarea,
    Image,
    Divider,
    Stack,
    InputLeftElement,
    Input,
    InputGroup
} from '@chakra-ui/react'
import FormInput from '../utility/FormInput'
import ASSETS from '../../../public/assets'

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
       <Card >
            <Heading pt='1rem' px='1rem' fontSize='16px'mb='1rem' fontWeight='bold'>Payment method:</Heading>
            <Box p='1rem' display='flex' flexDirection='column' gap='1rem'>
              <Flex gap='5rem' border='1px' rounded='lg' p='12px' borderColor='#E8EAEE'>
                  <Box display='flex' alignItems='center' gap='2rem'>   
                    <Image src={ASSETS.visa} alt=''/>
                    <Text fontWeight='600' fontSize='12px' color='brand.grey.400'>4598 **** ****</Text>
                  </Box>
                  <Box display={{base:'none', md:'flex'}} alignItems='center' gap='2rem'>   
                    <Text fontWeight='600' fontSize='12px' color='brand.grey.400'>04/25</Text>
                    <Text fontWeight='600'fontSize='12px' color='brand.grey.400'>Makanju Oluwafemi</Text>
                  </Box>
              </Flex>
              <Flex gap='5rem' border='1px' rounded='lg' p='12px' borderColor='#E8EAEE'>
                  <Box display='flex' alignItems='center' gap='2rem'>   
                    <Image src={ASSETS.paypal} alt='paypal' w='20px'/>
                    <Text fontSize='12px' color='brand.grey.400'>You will be redirected to the PayPal site after reviewing your order.</Text>
                  </Box>
              </Flex>
              <Flex justifyContent='space-between' border='1px' rounded='lg' p='10px' borderColor='#1C9729'>
                  <Box display='flex' alignItems='center' gap='2rem'>   
                    <Image src={ASSETS.redcard} alt='red-card' w='20px'/>
                    <Text fontWeight='600' fontSize='12px' color='brand.grey.400'>New Payment Cards</Text>
                  </Box>
                  <Box display='flex' alignItems='center' gap='2rem'> 
                    <Image src={ASSETS.circlecheck} alt='check'/>  
                  </Box>
              </Flex>
            </Box>
            <Divider/>
            <Box p='1.5rem' display='flex' flexDirection='column' gap='1.5rem'>
            <Box>
                <FormInput 
                    placeholder='Name on card'
                    label='Name'
                    type='text'
                    name='name'
                    errorMsg='Name field is required'
                />
            </Box>
            <Box>
            <Stack>
              <Text fontSize='12px'>Card Number</Text>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <Image src={ASSETS.bluepaycard} alt='bluepaycard'/>
                </InputLeftElement>
                <Input type='text' focusBorderColor='brand.primary' fontSize='12px' placeholder='Label' />
              </InputGroup>
            </Stack>
            </Box>
            <Box display='flex' gap='1rem'>
                <FormInput 
                    placeholder='MM/YY'
                    label='MM/YY'
                    type='text'
                    name='expiry_date'
                    errorMsg='Expiry date is required'
                />
                <FormInput 
                    placeholder='Security Code'
                    label='CVV'
                    type='password'
                    name='cvv'
                    errorMsg='Name field is required'
                />
            </Box>
            <Box display='flex' justifyContent='space-between' gap='1rem'>
                <Button fontSize='14px'>Cancel</Button>
                <Flex>
                  <Button fontSize='14px' color='brand.primary'>Save</Button>
                  <Box bg='brand.primary' borderRightRadius='7px' h='40px' w='40px' display='flex' alignItems='center' justifyContent='center' color='brand.white'>🡪</Box>
                </Flex>
            </Box>
            <Checkbox defaultChecked><Text fontSize='12px'>Remember this card, save it on my card list</Text></Checkbox>
            </Box>
       </Card>
    </Flex>
  )
}

export default PayForm