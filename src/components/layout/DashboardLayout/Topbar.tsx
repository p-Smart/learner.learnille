import {
  HStack,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
  Image,
  Button,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useGlobalStore from "@/stores";
import { MdMenu, MdOutlineAddchart, MdOutlineClose } from "react-icons/md";
import { LuLink, LuLogOut } from "react-icons/lu";
import SearchBox from "./SearchBox";
import { APP_URLS } from "@/utils/constants";

function Topbar() {
  const showMobileSidebar = useGlobalStore((state) => state.showMobileSidebar);
  const setGlobalState = useGlobalStore((state) => state.setGlobalState);
  return (
    <HStack
      filter={showMobileSidebar ? "blur(2px)" : "unset"}
      pointerEvents={showMobileSidebar ? "none" : "auto"}
      justifyContent="space-between"
      alignItems="center"
      pos="fixed"
      boxShadow="base"
      p="15px 20px"
      rounded="8px"
      bg="white"
      w={{ base: "calc(100% - 40px)", lg: "calc(100% - 230px - 50px)" }}
      ml={{ base: "0", lg: 20 + 220 + "px" }}
      zIndex="9"
      maxW="calc(2000px - 230px - 50px)"
    >
      <Flex alignItems="center" gap="10px">
        <IconButton
          variant="ghost"
          aria-label="media-menu-icon"
          fontSize={28}
          display={{ base: "inline-flex", lg: "none" }}
          color="primary.main"
          _hover={{
            bgColor: "whiteAlpha.900",
          }}
          onClick={() => {
            if (showMobileSidebar) {
              setGlobalState("showMobileSidebar", false);
              return;
            }
            setGlobalState("showMobileSidebar", true);
          }}
        >
          {showMobileSidebar ? <MdOutlineClose /> : <MdMenu />}
        </IconButton>
        <Stack gap="0" display={{ base: "none", md: "block" }}>
          <Text color="primary.main" fontWeight="700" fontSize="1.2rem">
            Hi, John
          </Text>
          <Text color="#656565" fontSize=".9rem">
            Lets learn something new today
          </Text>
        </Stack>
      </Flex>

      <SearchBox containerProps={{ display: { base: "none", lg: "flex" } }} />

      <Flex gap="30px">
        <Flex gap="20px">
          <IconButton
            aria-label="messages"
            variant="primary-light"
            fontSize="22px"
            as={Link}
            to="/chat"
          >
            <AiOutlineMessage />
          </IconButton>
          <IconButton
            aria-label="notifications"
            variant="primary-light"
            fontSize="22px"
            as={Link}
            to="/notifications"
          >
            <IoNotificationsOutline />
          </IconButton>
        </Flex>

        <Menu autoSelect={false}>
          <MenuButton>
            <Flex alignItems="center" gap="5px">
              <Image
                src="/assets/images/avatars/avatar02.svg"
                w="40px"
                h="40px"
                borderRadius="50%"
              />
              <IoIosArrowDown size="22" />
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/settings" icon={<LuLink size="18" />}>
              Account Settings
            </MenuItem>
            <MenuItem
              as={Link}
              to={`${APP_URLS.AUTH}/logout`}
              icon={<LuLogOut size="18" />}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
}

export default Topbar;
