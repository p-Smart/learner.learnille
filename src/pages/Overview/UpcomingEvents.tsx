import Event from "@/components/Event";
import { Button, Stack, Text } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "How to make your first million",
      start: new Date(2024, 0, 4, 22, 0),
      end: new Date(2024, 0, 4, 24, 0),
    },
    {
      id: 2,
      title: "How to transition into tech",
      start: new Date(2024, 0, 6, 18, 0),
      end: new Date(2024, 0, 6, 19, 30),
    },
    {
      id: 3,
      title: "Getting started with AI",
      start: new Date(2024, 0, 7, 15, 0),
      end: new Date(2024, 0, 7, 16, 0),
    },
  ];

  return (
    <Stack bgColor="white" borderRadius="lg">
      <Text
        fontSize="1.2rem"
        fontWeight="600"
        borderBottom="1px solid"
        borderColor="gray.200"
        p="20px"
      >
        Upcoming Events
      </Text>
      <Stack p="20px">
        <Text color="gray.600" display="inline-flex" alignItems="center">
          No event available <MdKeyboardArrowDown size="20" />
        </Text>

        {events.map((event, idx) => (
          <Event
            key={idx + event.title}
            title={event.title}
            start={event.start}
            end={event.end}
          />
        ))}
      </Stack>
      <Button
        color="gray.600"
        rightIcon={<MdKeyboardArrowDown size="24" />}
        variant="link"
        mb="20px"
        mt="-10px"
      >
        More Events
      </Button>
    </Stack>
  );
};

export default UpcomingEvents;
