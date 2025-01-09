import { Flex, Box, Avatar, Text, Stack } from "@chakra-ui/react";

interface ChatMessageProps {
  message: string;
  isSender?: boolean;
  name: string;
  role?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isSender,
  name,
  role,
}) => {
  const renderNameWithRole = () => (
    <>
      {isSender && role && (
        <Text as="sup" color="#4E5566" fontStyle="italic">
          {role}&nbsp;
        </Text>
      )}
      {name}
      {!isSender && role && (
        <Text as="sup" color="#4E5566" fontStyle="italic">
          &nbsp;{role}
        </Text>
      )}
    </>
  );

  return (
    <Flex justify={isSender ? "flex-end" : "flex-start"} mb="1rem">
      <Stack maxW="70%">
        <Flex
          align="center"
          gap="10px"
          mb="5px"
          ml={isSender ? "auto" : "unset"}
          mr={!isSender ? "auto" : "unset"}
          flexDir={isSender ? "row-reverse" : "row"}
        >
          <Avatar w="30px" h="30px" />
          <Text fontWeight="600" fontSize=".9rem">
            {renderNameWithRole()}
          </Text>
        </Flex>
        <Box
          bg={isSender ? "primary.main" : "#F0F3FF"}
          color={isSender ? "white" : "#222021"}
          rounded="lg"
          p="0.8rem"
          fontSize="14px"
        >
          {message}
        </Box>
      </Stack>
    </Flex>
  );
};

export default ChatMessage;
