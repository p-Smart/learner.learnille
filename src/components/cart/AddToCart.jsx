import React from 'react'
import { 
  Box, 
  Button,  
  Card, 
  Stack, 
  Text, 
  Flex,
  Divider,
  Image
} from '@chakra-ui/react'
import ASSETS from '../../assets'
import { useNavigate } from 'react-router-dom'

const AddToCart = () => {
const navigate = useNavigate()
  const handleNavigation = () => {
    navigate('marketplace/cart')
  }

  return (
    <Card  flexGrow={1}>
      <Box>
        <Flex p='1rem' mt='.5rem' justifyContent='space-between'>
          <Flex gap='5px'>
            <Text fontWeight='bold' fontSize='14px'>$14.00</Text>
            <Text as='s' fontSize='14px' color='#A1A5B3'>$26.00</Text>
          </Flex>
          <Text bg='brand.lightPrimary' borderRadius='2px' px='5px' color='brand.primary' fontWeight='bold' fontSize='14px'>56% Off</Text>
        </Flex>
        <Flex p='1rem' alignItems='center' gap='4px'>
          <Image src={ASSETS.redclock} alt='icons'/>
          <Text color='#FF3E3E' fontSize='12px'>2days left at this price</Text>
        </Flex>
        <Divider />
        <Stack p='1rem' mt='.5rem'>
            <Flex alignItems='center' justifyContent='space-between'>
                <Box display='flex' alignItems='center' justifyContent='center' gap='4px'>
                   <Image src={ASSETS.greyclock} w='22px' alt='icons'/>
                   <Text color='brand.grey.700' fontWeight='bold' fontSize='14px'>Course duration</Text>
                </Box>
                <Text color='brand.grey.400' fontSize='12px'>6 month</Text>
            </Flex>
            <Flex alignItems='center' mt='.5rem' justifyContent='space-between'>
                <Box display='flex' alignItems='center' justifyContent='center' gap='4px'>
                   <Image src={ASSETS.barchart} w='22px' alt='icons'/>
                   <Text color='brand.grey.700' fontWeight='bold' fontSize='14px'>Courses Level</Text>
                </Box>
                <Text color='brand.grey.400' fontSize='12px'>Beginner and Intermediate</Text>
            </Flex>
            <Flex alignItems='center' mt='.5rem' justifyContent='space-between'>
                <Box display='flex' alignItems='center' justifyContent='center' gap='4px'>
                   <Image src={ASSETS.greyusers} w='22px' alt='users'/>
                   <Text color='brand.grey.700' fontWeight='bold' fontSize='14px'>Student Enrolled</Text>
                </Box>
                <Text color='brand.grey.400' fontSize='12px'>2,309,894</Text>
            </Flex>
            <Flex alignItems='center' mt='.5rem' justifyContent='space-between'>
                <Box display='flex' alignItems='center' justifyContent='center' gap='4px'>
                   <Image src={ASSETS.Notebook} w='22px' alt=''/>
                   <Text color='brand.grey.700' fontWeight='bold' fontSize='14px'>Language</Text>
                </Box>
                <Text color='brand.grey.400' fontSize='12px'>Mandarin</Text>
            </Flex>
            <Flex alignItems='center' mt='.5rem' justifyContent='space-between'>
                <Box display='flex' alignItems='center' justifyContent='center' gap='4px'>
                   <Image src={ASSETS.Notepad} w='22px' alt='icons'/>
                   <Text color='brand.grey.700' fontWeight='bold' fontSize='14px'>Subtittle Language</Text>
                </Box>
                <Text color='brand.grey.400' fontSize='12px'>english</Text>
            </Flex>
        </Stack>
        <Divider />  
        <Flex direction='column' p='1rem' gap='.5rem'>
            <Box display='flex' flexDirection='column' gap='7px'>
                <Button onClick={() => handleNavigation()} variant='solid' size='sm' bg='brand.primary' color='brand.white'>
                    Add to Cart
                </Button>
                <Box 
                    as='button' 
                    height='30px'
                    lineHeight='1.2'
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    px='8px'
                    borderRadius='7px'
                    fontSize='14px'
                    fontWeight='semibold'
                    bg='brand.lightPrimary'
                    color='brand.primary'
                >
                    Buy Now
                </Box>
            </Box>
            <Flex gap='.5rem'>
                <Button 
                   fontWeight='light'
                   w='full' 
                   bg='none' border='1px' 
                   borderColor='#E8EAEE' 
                   variant='solid' 
                   size='sm' 
                   color='brand.grey.400'
                >
                    Add to WishList
                </Button>
                <Button 
                   fontWeight='light'
                   w='full' 
                   bg='none' border='1px' 
                   borderColor='#E8EAEE' 
                   variant='solid' 
                   size='sm' 
                   color='brand.grey.400'
                >
                    Gift Course
                </Button>
            </Flex>
            <Box>
                <Text display='flex' gap='5px' color='brand.grey.400' fontSize='12px'><Text fontWeight='bold'>Note:</Text> all course have 30-days money-back guarantee</Text>
            </Box>
        </Flex>
        <Divider />  
        <Stack p='1rem' mt='.5rem'>
            <Text fontWeight='bold' py='.5rem'>This consultation includes:</Text>
            <Flex alignItems='center' mt='.5rem' justifyContent='space-between'>
                <Box display='flex' alignItems='center' justifyContent='center' gap='4px'>
                   <Image src={ASSETS.blueclock} w='22px' alt='icons'/>
                   <Text color='brand.grey.400' fontSize='12px'>Lifetime access</Text>
                </Box>
            </Flex>
            <Flex alignItems='center' justifyContent='space-between'>
                <Box display='flex' alignItems='center' justifyContent='center' gap='4px'>
                   <Image src={ASSETS.Dollar} w='22px' alt='icons'/>
                   <Text color='brand.grey.400' fontSize='12px'>30-days money-back guarantee</Text>
                </Box>
            </Flex>
            <Flex alignItems='center' mt='.5rem' justifyContent='space-between'>
                <Box display='flex' alignItems='center' justifyContent='center' gap='4px'>
                   <Image src={ASSETS.bluebook} w='22px' alt='icons'/>
                   <Text color='brand.grey.400' fontSize='12px'>Free exercises file & downloadable resources</Text>
                </Box>
            </Flex>
            <Flex alignItems='center' mt='.5rem' justifyContent='space-between'>
                <Box display='flex' alignItems='center' justifyContent='center' gap='4px'>
                   <Image src={ASSETS.bluetrophy} w='22px' alt='users'/>
                   <Text color='brand.grey.400' fontSize='12px'>Shareable certificate of completion</Text>
                </Box>
            </Flex>
            <Flex alignItems='center' mt='.5rem' justifyContent='space-between'>
                <Box display='flex' alignItems='center' justifyContent='center' gap='4px'>
                   <Image src={ASSETS.NotePadBlue} w='22px' alt='icon'/>
                   <Text color='brand.grey.400' fontSize='12px'>English subtitles</Text>
                </Box>
            </Flex>
            <Flex alignItems='center' mt='.5rem' justifyContent='space-between'>
                <Box display='flex' alignItems='center' justifyContent='center' gap='4px'>
                   <Image src={ASSETS.blueStack} w='22px' alt='icons'/>
                   <Text color='brand.grey.400' fontSize='12px'>100% online course</Text>
                </Box>
            </Flex>
        </Stack>
        <Divider />  
        <Flex direction='column' p='1rem' gap='.5rem'>
            <Text fontWeight='bold' py='.5rem'>Share this course:</Text>
            <Flex gap='.5rem'>
                <Button p='7px' borderRadius='5px' w='full' bg='#F5F7FA'>
                   <Image src={ASSETS.copy} alt='copy'/>
                   <Text color='brand.grey.400' fontWeight='thin' fontSize='12px'>Copy</Text>
                </Button>
                <Button p='7px' borderRadius='5px' bg='#F5F7FA'>
                   <Image w='20px' src={ASSETS.facebook} alt='icon'/>
                </Button>
                <Button p='7px' borderRadius='5px' bg='#F5F7FA'>
                   <Image w='20px' src={ASSETS.twitterx} alt='icon'/>
                </Button>
                <Button p='7px' borderRadius='5px' bg='#F5F7FA'>
                   <Image src={ASSETS.envelop} alt='icon'/>
                </Button>
                <Button p='7px' borderRadius='5px' bg='#F5F7FA'>
                   <Image src={ASSETS.whatsapp} alt='icon'/>
                </Button>
            </Flex>
        </Flex>
      </Box>
    </Card>
  )
}

export default AddToCart