import { HStack, VStack, Box } from "@chakra-ui/react";
import Sidenav from "../navigation/Sidenav";
import Topnav from "../navigation/Topnav";
import { useState } from "react";

function MainLayout({ children }) {
  const [navState, setNavState] = useState(false);
  return (
    <HStack
      alignItems="flex-start"
      padding="20px 10px"
      bg="#F6F8FF"
      spacing={0}
    >
      <Sidenav navState={navState} setNavState={setNavState} />
      <VStack ml={["0px", "0px", "250px", "250px"]} minH="100vh" w="100%">
        <Box w="100%" p="0px 10px">
          <Topnav navState={navState} setNavState={setNavState} />
          {children}
        </Box>
      </VStack>
    </HStack>
  );
}

export default MainLayout;