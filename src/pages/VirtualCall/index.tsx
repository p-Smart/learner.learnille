import {
  Box,
  ButtonGroup,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoMic, IoVideocam } from "react-icons/io5";
import { MdCallEnd } from "react-icons/md";
import LiveChat from "./LiveChat";
import { BiCalendarMinus } from "react-icons/bi";
import ProgressLevelBar from "@/components/ProgressLevelBar";
import { LuClock3 } from "react-icons/lu";
import Event from "@/components/Event";
import DashboardLayout from "@/layout/DashboardLayout";

const VirtualCall = () => {
  const events = [
    {
      id: 1,
      title: "Next session",
      start: new Date(2024, 0, 4, 22, 0),
      end: new Date(2024, 0, 4, 24, 0),
    },
    {
      id: 2,
      title: "Next session",
      start: new Date(2024, 0, 6, 18, 0),
      end: new Date(2024, 0, 6, 19, 30),
    },
    {
      id: 3,
      title: "Next session",
      start: new Date(2024, 0, 7, 15, 0),
      end: new Date(2024, 0, 7, 16, 0),
    },
  ];

  return (
    <DashboardLayout>
      <Flex gap="20px" py="20px" flexDir={{ base: "column", xl: "row" }}>
        <Stack flex="1" gap="20px">
          <Text variant="h6">UX/UI Design Consultation Meeting</Text>
          <Box
            w="100%"
            h="535px"
            borderRadius="10px"
            overflow="hidden"
            position="relative"
          >
            <Image
              src="/assets/images/dummy/86524da45d46a4bc940ee46e4cbcd25b.png"
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <ButtonGroup
              gap="20px"
              pos="absolute"
              bottom="100px"
              left="50%"
              transform="translate(-50%, 50%)"
              sx={{
                "& > button": {
                  bgColor: "white",
                  color: "black",
                  fontSize: "20px",
                  _hover: {
                    bgColor: "whiteAlpha.900",
                  },
                },
              }}
            >
              <IconButton aria-label="mic" icon={<IoMic />} />
              <IconButton aria-label="call-end" icon={<MdCallEnd />} />
              <IconButton aria-label="video-on-off" icon={<IoVideocam />} />
              <IconButton
                aria-label="leave-call"
                icon={<FaArrowRightFromBracket />}
              />
            </ButtonGroup>

            {/* You */}
            <Box
              w="200px"
              h="200px"
              borderRadius="10px"
              overflow="hidden"
              position="absolute"
              top={{ base: "20px", md: "50px" }}
              right={{ base: "20px", md: "50px" }}
            >
              <Text variant="h6" pos="absolute" top="20px" left="20px">
                You
              </Text>
              <Image
                src="/assets/images/dummy/33c38eb0f5203152b05f9416e7cb0016.png"
                w="100%"
                h="100%"
                objectFit="cover"
              />
              <ButtonGroup
                gap="20px"
                pos="absolute"
                bottom="30px"
                left="50%"
                transform="translate(-50%, 50%)"
                sx={{
                  "& > button": {
                    bgColor: "white",
                    color: "black",
                    fontSize: "20px",
                    _hover: {
                      bgColor: "whiteAlpha.900",
                    },
                  },
                }}
              >
                <IconButton aria-label="call-end" icon={<MdCallEnd />} />
                <IconButton aria-label="video-on-off" icon={<IoVideocam />} />
                <IconButton aria-label="mic" icon={<IoMic />} />
              </ButtonGroup>
            </Box>
          </Box>
          <Stack gap="10px" p="30px">
            <Text fontSize="1.2rem" fontWeight="600">
              Meeting Notes
            </Text>
            <Text lineHeight="22px">
              Learn from industry experts who have hands-on experience in design
              and development. Learn from industry experts who have hands-on
              experience in design and development. Learn from industry experts
              who have hands-on experience in design and development. Learn from
              industry experts who have hands-on experience in design and
              development. Learn from industry experts who have hands-on
              experience in design and development.
            </Text>
          </Stack>
        </Stack>

        <Stack gap="20px">
          <Box w="400px" maxW="100%" h="500px" maxH="calc(100vh - 130px)">
            <LiveChat />
          </Box>
          <Stack
            gap="20px"
            p="20px"
            bgColor="white"
            borderRadius="10px"
            shadow="sm"
          >
            <Text variant="h6">Consultation Details</Text>
            <Flex justifyContent="space-between" gap="20px" alignItems="center">
              <Text fontWeight="700" color="primary.main">
                2/5 Session Completed
              </Text>
              <Box as={BiCalendarMinus} size="24" color="primary.main" />
            </Flex>
            <ProgressLevelBar currentLevel={2} total={5} fillPrevious />
          </Stack>
          <Flex
            alignItems="center"
            gap="20px"
            flexWrap="wrap"
            justifyContent="space-between"
            px="20px"
          >
            <Stack>
              <Text variant="h6">Ongoing</Text>
              <Flex color="gray.500" alignItems="center" gap="10px">
                <Box as={LuClock3} size="20" />
                <Text>2 hours</Text>
              </Flex>
            </Stack>
            <CircularProgress
              value={40}
              color="primary.main"
              trackColor="#C7D0FD"
              thickness="10px"
              size="100px"
              sx={{
                "& svg > circle": {
                  strokeLinecap: "round",
                },
              }}
            >
              <CircularProgressLabel fontWeight="600" fontSize=".9rem">
                {40}%
              </CircularProgressLabel>
            </CircularProgress>
          </Flex>
          <Stack p="20px" bgColor="white" borderRadius="lg">
            {events.map((event, idx) => (
              <Event
                key={idx + event.title}
                title={event.title}
                start={event.start}
                end={event.end}
              />
            ))}
          </Stack>
        </Stack>
      </Flex>
    </DashboardLayout>
  );
};

export default VirtualCall;
