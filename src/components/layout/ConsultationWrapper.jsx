import { Flex,Box } from "@chakra-ui/react"
import AddToCart from "../cart/AddToCart"

const ConsultationWrapper = (props) => {
   return (
      <Flex direction={{base:'column', md:'row' }} mt='1rem' gap='.5rem'>
         <Box w={{base:'100%'}}>{props.children}</Box>
         <Box w={{base:'100%', lg: '500px'}}>
            <AddToCart/>
         </Box>
      </Flex>
   )
}

export default ConsultationWrapper