import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { IoIosStar } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

interface Notification {
  type: "alert" | "review" | any;
  dateTime: string;
  title: string;
  content: string;
}

const Notification: React.FC<Notification> = ({
  type,
  content,
  dateTime,
  title,
}) => {
  return (
    <Stack gap="10px">
      <Flex alignItems="center" gap="20px">
        <Stack
          w={{ base: "36px", md: "48px" }}
          h={{ base: "36px", md: "48px" }}
          borderRadius="50%"
          bgColor="#E8EDFB"
          flexShrink="0"
        >
          <Box
            as={type === "review" ? IoIosStar : IoNotificationsOutline}
            fontSize={{ base: "18", md: "20" }}
            m="auto"
            color="primary.main"
          />
        </Stack>
        <Stack>
          <Text fontSize="1.1rem">
            <b>{title}</b>
          </Text>
          <Text>{content}</Text>
        </Stack>
      </Flex>
      <Text ml="auto" color="#1667DF" fontWeight="600">
        {dateTime}
      </Text>
    </Stack>
  );
};

export default Notification;
