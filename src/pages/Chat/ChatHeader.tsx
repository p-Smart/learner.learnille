import TextField from "@/components/TextField";
import useChatStore from "@/stores/chat";
import {
  Flex,
  Box,
  Avatar,
  AvatarBadge,
  Heading,
  Text,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { IoMdMore } from "react-icons/io";
import { IoArrowBack, IoSearch } from "react-icons/io5";

const ChatHeader: React.FC = () => {
  const [setChatState] = useChatStore((state) => [state.setChatState]);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      p="1rem"
      bg="white"
      flexWrap="wrap"
      gap="20px"
    >
      <Flex alignItems="center" gap="10px">
        <IconButton
          aria-label="back-btn"
          variant="unstyle"
          minW="0"
          icon={<IoArrowBack size="24" />}
          onClick={() => {
            setChatState("screen", "messages");
          }}
          display={{ base: "inline-flex", lg: "none" }}
        />
        <Avatar>
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
        <Box>
          <Heading fontSize="1.1rem" fontWeight="700" color="#222021">
            James Kanayon
          </Heading>
          <Text fontSize="12px" color="#666" mt="3px">
            Online
          </Text>
        </Box>
      </Flex>
      <Flex gap="20px" alignItems="center" w="100%" maxW="450px">
        <TextField
          placeholder="Search..."
          _placeholder={{
            color: "blackAlpha.800",
          }}
          containerProps={{
            borderRadius: "5px",
            p: "10px",
            borderColor: "blackAlpha.300",
            // maxW: "310px",
            // maxW: "100%",
          }}
          endAdornment={<Box as={IoSearch} color="gray.800" size="24" />}
        />
        <Menu autoSelect={false}>
          <MenuButton as={Box} cursor="pointer" ml="auto">
            <IconButton
              aria-label="more-button"
              variant="unstyled"
              fontSize="24px"
              minW={0}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <IoMdMore />
            </IconButton>
          </MenuButton>
          <MenuList>
            <MenuItem>View Consultation Details</MenuItem>
            <MenuItem>Report</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default ChatHeader;
