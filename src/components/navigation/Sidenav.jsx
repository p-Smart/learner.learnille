import {
    Link,
    Box,
    List,
    ListItem,
    VStack,
    HStack,
    SkeletonCircle,
    Text,
    Image,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { routes } from "./route";
import ASSETS from "../../assets";

function Sidenav({ navState, setNavState }) {
    const width = navState ? "250px" : "0px";
    function isActive(path) {
      return window.location.href.includes(path);
    }
    return (
      <VStack
        justifyContent="space-between"
        w={[width, width, "250px", "250px"]}
        bg="brand.primary"
        h="96vh"
        position="fixed"
        transition="0.5s"
        overflowX="hidden"
        top={"20px"}
        bottom={"20px"}
        rounded="10px"
        color="white"
        whiteSpace="nowrap"
        zIndex={100}
      >
        <Box w="100%">
          <HStack
            alignItems="center"
            p="20px"
            pb="0"
            justifyContent="space-between"
          >
            <Box display={["block", "block", "none", "none"]}>
              <List>
                <ListItem
                  as={NavLink}
                  display="block"
                  to='/'
                  fontSize="14px"
                  pl="18px"
                  py="8px"
                >
                  <Image src={ASSETS.logo} alt='Logo'/>
                  Learnile
                </ListItem>
              </List>   
              <div onClick={() => setNavState(false)} />
            </Box>
          </HStack>
          <List pt="50px">
            {routes.map((route, index) => (
              <ListItem
                key={index}
                as={NavLink}
                display="flex"
                alignSelf='center'
                gap='1rem'
                to={route.path}
                fontSize="14px"
                pl="18px"
                py="8px"
                bg={isActive(route.path) && "#C7D0FD"}
                color={isActive(route.path) ? "#1D2026" : "white"}
                _hover={{ textDecoration:'none', background:'brand.secondary', color:'brand.grey.400'}}
              >
                <Image src={route.logo} alt={route.name}/>
                {route.name}
              </ListItem>
            ))}
          </List>
        </Box>
  
        <Box w="100%" mt='6rem'>
          <List spacing={2}>
            <ListItem
              as={Link}
              display="flex"
              alignSelf='center'
              gap='1rem'
              to="/settings"
              fontSize="14px"
              pl="18px"
              py="8px"
              bg={isActive("settings") && "#C7D0FD"}
              color={isActive("settings") ? "#1D2026" : "white"}
              _hover={{ textDecoration:'none', background:'brand.secondary', color:'brand.grey.400'}}
            >
              <Image src={ASSETS.link} alt='settings'/>
              Settings
            </ListItem>
            <ListItem
              as={Link}
              display="flex"
              alignSelf='center'
              gap='1rem'
              to="/support"
              fontSize="14px"
              pl="18px"
              py="8px"
              bg={isActive("support") && "#C7D0FD"}
              color={isActive("support") ? "#1D2026" : "white"}
              _hover={{ textDecoration:'none', background:'brand.secondary', color:'brand.grey.400'}}
            >
              <Image src={ASSETS.info} alt='support'/>
              Support
            </ListItem>
          </List>
          <VStack w="100%" p="20px">
           
            <HStack mt="10px" borderTop="1px solid white" pt="20px">
              <HStack>
                <SkeletonCircle bg="white" size="8" />
                <VStack spacing={0} alignItems="flex-start">
                  <Text as="h3" fontSize="12px">
                    John Doe
                  </Text>
                  <Text fontSize="12px" as="h4">
                    John@learnille.com.ng
                  </Text>
                </VStack>
              </HStack>
  
              <Image src={ASSETS.logout} alt='log-out'></Image>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    );
}
  
export default Sidenav;