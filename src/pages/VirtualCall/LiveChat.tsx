import { Box, Divider, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import ChatMessage from "../Chat/ChatMessage";
import { useEffect, useRef } from "react";
import TextField from "@/components/TextField";
import { BsFillSendFill } from "react-icons/bs";

const messages = [
  {
    text: "Hi, This is Joseph Kehinde",
    isSender: false,
    name: "Joseph Kehinde",
  },
  {
    text: "Hi, This is Joseph Kehinde",
    isSender: false,
    name: "Joseph Kehinde",
  },
  {
    text: `Hi, This is Joseph Kehinde Hi, This is Joseph Kehinde Hi, This is Joseph Kehinde Hi, This is Joseph Kehinde Hi, This is Joseph Kehinde Hi, This is Joseph KehindeHi, This is Joseph Kehinde Hi, This is Joseph Kehinde Hi, This is Joseph Kehinde`,
    isSender: true,
    name: "You",
  },
  {
    text: "Yes",
    isSender: false,
    name: "Joseph Kehinde",
  },
  {
    text: `How cab the  buty hdvjdvm nskcps
hxjxp] uyt yrjr egrng yhd dhijvm ufhddsm isis
hjoxdNDVV nsdjchsjc jfsNOfse ffudfghef uosgufen
udhfsdf`,
    isSender: false,
    name: "Joseph Kehinde",
  },
  { text: "Yes, I'm doing well! How about you?", isSender: true, name: "You" },
  { text: "Let's catch up later in the evening.", isSender: true, name: "You" },
  {
    text: "Hi, This is Joseph Kehinde",
    isSender: false,
    name: "Joseph Kehinde",
  },
  {
    text: "Hi, This is Joseph Kehinde",
    isSender: false,
    name: "Joseph Kehinde",
  },
];

const LiveChat = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Stack
      gap="20px"
      p="20px"
      w="100%"
      h="100%"
      bgColor="white"
      borderRadius="10px"
      shadow="sm"
    >
      <Text variant="h6">Live chat (40)</Text>
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
          />
        ))}
        <div ref={messagesEndRef} />
      </Box>
      <TextField
        placeholder="Write a Message here"
        containerProps={{ bgColor: "primary.main", borderRadius: "5px" }}
        color="white"
        _placeholder={{ color: "white" }}
        endAdornment={
          <IconButton
            aria-label="send-message"
            px="15px"
            icon={<BsFillSendFill size="24" />}
          />
        }
      />
    </Stack>
  );
};

export default LiveChat;
