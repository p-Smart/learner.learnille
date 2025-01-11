import ProgressLevelBar from "@/components/ProgressLevelBar";
import { Box, Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { FiCalendar } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { PiCalendarMinusBold } from "react-icons/pi";

interface Activity {
  title: string;
  completedSessions: number;
  totalSessions: number;
  date: string;
  time: string;
}

const Activity: React.FC<Activity> = ({
  time,
  title,
  completedSessions,
  date,
  totalSessions,
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
            as={IoNotificationsOutline}
            fontSize={{ base: "18", md: "20" }}
            m="auto"
            color="primary.main"
          />
        </Stack>
        <Stack w="100%">
          <Text fontSize="1.1rem">
            <b>{title}</b>
          </Text>
          <HStack justifyContent="space-between">
            <Text
              color="primary.main"
              fontWeight="700"
            >{`${completedSessions}/${totalSessions} Sessions Completed`}</Text>
            <Box
              as={PiCalendarMinusBold}
              color="primary.main"
              fontSize={{ base: "24", md: "28" }}
            />
          </HStack>
          <ProgressLevelBar
            currentLevel={completedSessions}
            total={totalSessions}
            fillPrevious
          />
          <HStack fontSize=".9rem" gap="10px" color="gray.800" flexWrap="wrap">
            <HStack>
              <Box as={FiCalendar} color="primary.main" />
              <Text>{date}</Text>
            </HStack>
            <HStack>
              <Box as={LuClock3} color="primary.main" />
              <Text>{time}</Text>
            </HStack>
          </HStack>
        </Stack>
      </Flex>
      <Flex gap="20px" ml="auto" flexWrap="wrap">
        <Button variant="outline" borderColor="gray.200" color="black">
          Skip
        </Button>
        <Button>Join Now</Button>
      </Flex>
    </Stack>
  );
};

export default Activity;
