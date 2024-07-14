import {
    HStack,
    Text,
    InputGroup,
    InputRightElement,
    Input,
    Flex,
    IconButton,
    Image,
    Menu,
    MenuButton,
    Button,
    MenuItem,
    MenuList,
    Box,
} from "@chakra-ui/react";
import ASSETS from "../../../public/assets";

  function Topnav({ navState, setNavState }) {
    return (
      <HStack
        justifyContent="space-between"
        h="80px"
        p="0px 15px"
        rounded="8px"
        bg="white"
        w="100%"
      >
        <HStack>
          <Box mr="10px" display={["block", "block", "none", "none"]}>
            <div onClick={() => setNavState(true)} >open</div>
          </Box>
          <Flex direction='column'>
            <Text as="h1" fontSize="20px" color='brand.primary' fontWeight="600">
              Hello, John
            </Text>
            <Text as="h2" color='brand.gey.400' fontSize='12px'>
              Lets learn something new today
            </Text>
          </Flex>
        </HStack>
        <InputGroup
          display={["none", "none", "block", "block"]}
          w={["200px", "200px", "350px", "350px"]}
        >
          <Input focusBorderColor="brand.primary" placeholder="Search.." />
          <InputRightElement>
            <Image src={ASSETS.icon} alt='search'/>
          </InputRightElement>
        </InputGroup>
  
        <HStack>
          <Button
            variant="solid"
            background='brand.primary'
            color='brand.white'
            leftIcon=''
          >
            Create
          </Button>
          <IconButton
            aria-label="Messages"
            icon={ASSETS.vector}
            fontSize="20px"
            bg="#F0F3FF"
            color="brand.lightPrimary"
            display={["none", "none", "flex", "flex"]}
          />
          <IconButton
            variant="solid"
            mr="40px"
            aria-label="Notification"
            icon={ASSETS.bell}
            fontSize="20px"
            bg="#F0F3FF"
            color="blue.500"
            display={["none", "none", "flex", "flex"]}
          />
  
          <Box mr="10px" display={["block", "block", "none", "none"]}>
            S logo
          </Box>
          <Menu isLazy>
            <MenuButton>
              <HStack>
                <Image
                  src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
                  width={["40px", "40px", "60px", "60px"]}
                  rounded="50%"
                  height={["40px", "40px", "60px", "60px"]}
                />{" "}
              </HStack>
            </MenuButton>
            <MenuList>
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 2</MenuItem>
              <MenuItem>Option 3</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    );
  }
  
  export default Topnav;