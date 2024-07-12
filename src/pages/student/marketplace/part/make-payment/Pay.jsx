import React from 'react'
import CartLayout from '../../../../../components/layout/CartLayout'
import MainLayout from '../../../../../components/layout/MainLayout'
import { 
    Heading, 
    Box,
    Grid,
    GridItem, 
    Card
} from '@chakra-ui/react'
import ConsultionCard from '../../../../../components/cards/ConsultionCard'
import PayForm from '../../../../../components/payment/PayForm'


const Pay = () => {
  return (
    <MainLayout>
        <CartLayout>
           <PayForm />
           <Box mt='1rem'>
              <Heading py='1rem' fontSize='20px'>People also checked</Heading>
              <Grid  templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
                    <GridItem>
                       <ConsultionCard />
                    </GridItem>
                    <GridItem>
                       <ConsultionCard />
                    </GridItem>
                </Grid>
           </Box>
        </CartLayout>
    </MainLayout>
  )
}

export default Pay