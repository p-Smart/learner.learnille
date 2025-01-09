import { Flex } from "@chakra-ui/react";
import Messages from "./Messages";
import ChatInterface from "./ChatInterface";
import useChatStore from "@/stores/chat";
import DashboardLayout from "@/layout/DashboardLayout";

const Chat = () => {
  const [screen] = useChatStore((state) => [state.screen]);

  return (
    <DashboardLayout>
      <Flex w="100%" h="calc(100vh - 130px)" gap="10px">
        <Messages
          display={{
            base: screen === "messages" ? "flex" : "none",
            lg: "flex",
          }}
        />
        <ChatInterface
          display={{ base: screen === "chat-ui" ? "flex" : "none", lg: "flex" }}
        />
      </Flex>
    </DashboardLayout>
  );
};

export default Chat;
