import { Box, Text, Stack, StackProps } from "@chakra-ui/react";
import MessageItem from "./MessageItem";
import { IoSearch } from "react-icons/io5";
import TextField from "@/components/TextField";

const messages = [
  {
    name: "James Kanayon",
    message: "You can update your Figma...",
    unreadCount: 5,
  },
  {
    name: "Olumide Adebayo",
    message: "Let's catch up this weekend!",
    unreadCount: 2,
  },
  {
    name: "Michael Adeyemi",
    message: "I'll send the docs later.",
    unreadCount: 0,
  },
  {
    name: "Mariam Yusuf",
    message: "Meeting rescheduled to 3pm.",
    unreadCount: 9,
  },

  {
    name: "Chinedu Obi",
    message: "Have you seen the proposal?",
    unreadCount: 0,
  },
  {
    name: "James Kanayon",
    message: "You can update your Figma...",
    unreadCount: 5,
  },
  {
    name: "Olumide Adebayo",
    message: "Let's catch up this weekend!",
    unreadCount: 2,
  },
  {
    name: "Michael Adeyemi",
    message: "I'll send the docs later.",
    unreadCount: 0,
  },
  {
    name: "Mariam Yusuf",
    message: "Meeting rescheduled to 3pm.",
    unreadCount: 9,
  },
  {
    name: "Chinedu Obi",
    message: "Have you seen the proposal?",
    unreadCount: 0,
  },
  {
    name: "James Kanayon",
    message: "You can update your Figma...",
    unreadCount: 5,
  },
  {
    name: "Olumide Adebayo",
    message: "Let's catch up this weekend!",
    unreadCount: 2,
  },
  {
    name: "Michael Adeyemi",
    message: "I'll send the docs later.",
    unreadCount: 0,
  },
  {
    name: "Mariam Yusuf",
    message: "Meeting rescheduled to 3pm.",
    unreadCount: 9,
  },
  {
    name: "Chinedu Obi",
    message: "Have you seen the proposal?",
    unreadCount: 0,
  },
  {
    name: "James Kanayon",
    message: "You can update your Figma...",
    unreadCount: 5,
  },
  {
    name: "Olumide Adebayo",
    message: "Let's catch up this weekend!",
    unreadCount: 2,
  },
  {
    name: "Michael Adeyemi",
    message: "I'll send the docs later.",
    unreadCount: 0,
  },
  {
    name: "Mariam Yusuf",
    message: "Meeting rescheduled to 3pm.",
    unreadCount: 9,
  },
  {
    name: "Chinedu Obi",
    message: "Have you seen the proposal?",
    unreadCount: 0,
  },
  {
    name: "James Kanayon",
    message: "You can update your Figma...",
    unreadCount: 5,
  },
  {
    name: "Olumide Adebayo",
    message: "Let's catch up this weekend!",
    unreadCount: 2,
  },
  {
    name: "Michael Adeyemi",
    message: "I'll send the docs later.",
    unreadCount: 0,
  },
  {
    name: "Mariam Yusuf",
    message: "Meeting rescheduled to 3pm.",
    unreadCount: 9,
  },
  {
    name: "Chinedu Obi",
    message: "Have you seen the proposal?",
    unreadCount: 0,
  },
  {
    name: "James Kanayon",
    message: "You can update your Figma...",
    unreadCount: 5,
  },
  {
    name: "Olumide Adebayo",
    message: "Let's catch up this weekend!",
    unreadCount: 2,
  },
  {
    name: "Michael Adeyemi",
    message: "I'll send the docs later.",
    unreadCount: 0,
  },
  {
    name: "Mariam Yusuf",
    message: "Meeting rescheduled to 3pm.",
    unreadCount: 9,
  },
  {
    name: "Chinedu Obi",
    message: "Have you seen the proposal?",
    unreadCount: 0,
  },
];

const Messages: React.FC<StackProps> = ({ ...props }) => {
  return (
    <Stack
      w={{ base: "100%", lg: "700px" }}
      maxW="100%"
      h="100%"
      bg="white"
      shadow="sm"
      rounded="lg"
      overflow="hidden"
      {...props}
    >
      <Box p="1.2rem" borderBottom="1px solid #E8EAEE">
        <Text fontSize="1.1rem" fontWeight="700" color="#222021">
          Messages
        </Text>
      </Box>

      <Box p="1rem">
        <TextField
          placeholder="Search..."
          _placeholder={{
            color: "blackAlpha.800",
          }}
          containerProps={{
            borderRadius: "5px",
            p: "10px",
            borderColor: "blackAlpha.300",
          }}
          endAdornment={<Box as={IoSearch} color="gray.800" size="20" />}
        />
      </Box>

      <Stack flex="1" overflowY="auto" gap="0.5rem">
        {messages.map((msg, index) => (
          <MessageItem
            key={index}
            name={msg.name}
            message={msg.message}
            unreadCount={msg.unreadCount}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Messages;
