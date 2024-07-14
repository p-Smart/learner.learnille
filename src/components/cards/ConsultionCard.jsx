import React from 'react'
import { 
  Box, 
  Button,  
  Card, 
  Heading, 
  Text, 
  Flex,
  Avatar, 
  Wrap,
  WrapItem,
  Divider,
  Image
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import ASSETS from '../../../public/assets'

const ConsultionCard = () => {
  const navigate = useNavigate()
  const redirect = () => {
    navigate('consultation/1')   
  }

  return (
      <Card p='.5rem' flexGrow={1}>
        <Box>
          <Image
              h='180px' w='100%'
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
          />
          <Flex mt='.5rem' justifyContent='space-between'>
            <Text bg='brand.lightPrimary' borderRadius='2px' px='5px' color='brand.primary' fontWeight='400' fontSize='10px'>HEALTH & FITNESS</Text>
            <Flex gap='5px'>
              <Text fontWeight='bold' fontSize='12px'>$14.00</Text>
              <Text as='s' fontSize='12px' color='#A1A5B3'>$26.00</Text>
            </Flex>
          </Flex>
          <Flex gap='1rem' mt='.5rem' justifyContent='space-between'>
            <Heading size='sm'>Living room Sofa for displaying users</Heading>
            <Box>
              <Image src={ASSETS.viewMore} alt='more-options'/>
            </Box>
          </Flex>
          <Flex m='1rem 0px' justifyContent='space-between'>
            <Flex gap='3px' alignItems='center'>
              <Image src={ASSETS.clock} alt='more-options'/>
              <Text fontWeight='bold' color='brand.grey.700' fontSize='12px'>4 hours</Text>
            </Flex>
            <Flex gap='3px' alignItems='center'>
              <Image src={ASSETS.singleUser} alt='more-options'/>
              <Text fontWeight='bold' color='brand.grey.700' fontSize='12px'>4 sessions</Text>
            </Flex>
            <Flex gap='3px' alignItems='center'>
              <Image src={ASSETS.userBar} alt='more-options'/>
              <Text fontSize='12px' fontWeight='bold' color='brand.grey.700'>Bi weekly</Text>
            </Flex>
          </Flex>
          <Divider />
          <Flex gap='1rem' mt='.5rem' mb='.5rem' justifyContent='space-between'>
            <Flex gap='1rem' alignItems='center'>
            <Wrap>
              <WrapItem>
                <Avatar bg='brand.primary' size='xs' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
              </WrapItem>
            </Wrap>
              <Text fontSize='12px' color='brand.grey.400'>Segun Adebayo</Text>
            </Flex>
            <Flex gap='2px' alignItems='center'>
              <Image src={ASSETS.star} alt='more-options'/>
              <Text fontWeight='bold' fontSize='12px'>5.0</Text>
              <Text fontSize='12px' color='#A1A5B3'>(3,579)</Text>
            </Flex>
          </Flex>
        </Box>
        <Box display='flex' flexDirection='column' gap='7px'>
            <Button variant='solid' size='sm' bg='brand.primary' color='brand.white'>
              Book
            </Button>
              <Box 
                as='button' 
                height='30px'
                lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                border='1px'
                px='8px'
                borderRadius='7px'
                fontSize='14px'
                fontWeight='semibold'
                bg='brand.white'
                borderColor='brand.primary'
                color='brand.primary'
                onClick={() => redirect()}
              >
                See Details
              </Box>
        </Box>
      </Card>
  )
}

export default ConsultionCard