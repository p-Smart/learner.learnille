import {
  Flex,
  Box,
  Divider,
  Text,
  Stack,
  IconButton,
  StackProps,
} from "@chakra-ui/react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import { BsFillSendFill } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import TextField from "@/components/TextField";
import { useEffect, useRef } from "react";

const messages = [
  {
    text: "It is a long established fact that a reader will be distracted...",
    isSender: false,
    name: "James Kanayon",
  },
  {
    text: "Hello, just checking in to see how you're doing...",
    isSender: false,
    name: "James Kanayon",
  },
  { text: "Yes, I'm doing well! How about you?", isSender: true, name: "You" },
  { text: "Let's catch up later in the evening.", isSender: true, name: "You" },
  {
    text: "It is a long established fact that a reader will be distracted...",
    isSender: false,
    name: "James Kanayon",
  },
  {
    text: "Hello, just checking in to see how you're doing...",
    isSender: false,
    name: "James Kanayon",
  },
  { text: "Yes, I'm doing well! How about you?", isSender: true, name: "You" },
  { text: "Let's catch up later in the evening.", isSender: true, name: "You" },
  {
    text: "It is a long established fact that a reader will be distracted...",
    isSender: false,
    name: "James Kanayon",
  },
  {
    text: "Hello, just checking in to see how you're doing...",
    isSender: false,
    name: "James Kanayon",
  },
  { text: "Yes, I'm doing well! How about you?", isSender: true, name: "You" },
  { text: "Let's catch up later in the evening.", isSender: true, name: "You" },
  {
    text: "It is a long established fact that a reader will be distracted...",
    isSender: false,
    name: "James Kanayon",
  },
  {
    text: "Hello, just checking in to see how you're doing...",
    isSender: false,
    name: "James Kanayon",
  },
  { text: "Yes, I'm doing well! How about you?", isSender: true, name: "You" },
  { text: "Let's catch up later in the evening.", isSender: true, name: "You" },
  {
    text: "It is a long established fact that a reader will be distracted...",
    isSender: false,
    name: "James Kanayon",
  },
  {
    text: "Hello, just checking in to see how you're doing...",
    isSender: false,
    name: "James Kanayon",
  },
  { text: "Yes, I'm doing well! How about you?", isSender: true, name: "You" },
  { text: "Let's catch up later in the evening.", isSender: true, name: "You" },
  {
    text: "It is a long established fact that a reader will be distracted...",
    isSender: false,
    name: "James Kanayon",
  },
  {
    text: "Hello, just checking in to see how you're doing...",
    isSender: false,
    name: "James Kanayon",
    role: "Moderator",
  },
  { text: "Yes, I'm doing well! How about you?", isSender: true, name: "You" },
  { text: "Let's catch up later in the evening.", isSender: true, name: "You" },
];

const ChatInterface: React.FC<StackProps> = ({ ...props }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Stack
      h="100%"
      w="100%"
      bg="white"
      rounded="lg"
      shadow="sm"
      overflow="hidden"
      {...props}
    >
      <ChatHeader />
      <Divider />

      <Box ref={containerRef} flex="1" overflowY="auto" px="1rem" py="1rem">
        <Flex justifyContent="center" mb="1rem">
          <Text
            bg="#F5F7FA"
            color="#8C94A3"
            fontSize="12px"
            px="10px"
            py="5px"
            rounded="full"
          >
            Today
          </Text>
        </Flex>
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.text}
            isSender={msg.isSender}
            name={msg.name}
            role={msg.role}
          />
        ))}
        <div ref={messagesEndRef} /> {/* Invisible div to scroll to */}
      </Box>

      <Flex
        p="1rem"
        gap="10px"
        bg="white"
        borderTop="1px solid #E8EAEE"
        alignItems="center"
      >
        <TextField
          placeholder="Type your message"
          containerProps={{ bgColor: "#E8EAEE", borderRadius: "5px" }}
          endAdornment={
            <IconButton
              aria-label="attach-file"
              variant="link"
              icon={<ImAttachment size="22" />}
            />
          }
        />
        <IconButton
          aria-label="send-message"
          px="15px"
          icon={<BsFillSendFill size="24" />}
        />
      </Flex>
    </Stack>
  );
};

export default ChatInterface;
