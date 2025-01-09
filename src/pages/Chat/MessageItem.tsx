import useChatStore from "@/stores/chat";
import {
  Flex,
  Box,
  Avatar,
  AvatarBadge,
  Heading,
  Text,
} from "@chakra-ui/react";

interface MessageItemProps {
  name: string;
  message: string;
  unreadCount: number;
}

const MessageItem: React.FC<MessageItemProps> = ({
  name,
  message,
  unreadCount,
}) => {
  const [setChatState] = useChatStore((state) => [state.setChatState]);

  return (
    <Flex
      px="1rem"
      py=".8rem"
      justifyContent="space-between"
      align="center"
      _hover={{ background: "#F0F3FF", cursor: "pointer" }}
      rounded="lg"
      onClick={() => {
        setChatState("screen", "chat-ui");
      }}
    >
      <Flex gap="12px" alignItems="center">
        <Avatar size="md">
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
        <Box>
          <Heading fontSize="14px" color="#222021" fontWeight="semibold">
            {name}
          </Heading>
          <Text fontSize="13px" color="#666" mt="3px" noOfLines={1}>
            {message}
          </Text>
        </Box>
      </Flex>
      {unreadCount > 0 && (
        <Text
          fontSize="11px"
          rounded="full"
          px="8px"
          py="4px"
          bg="primary.main"
          color="white"
          fontWeight="bold"
        >
          {unreadCount > 99 ? "99+" : unreadCount}
        </Text>
      )}
    </Flex>
  );
};

export default MessageItem;
