import { Box, Button, Collapse, Flex, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { LuCalendar, LuClock } from "react-icons/lu";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";

interface IEvent {
  title: string;
  start: Date;
  end: Date;
}

const Event: React.FC<IEvent> = ({ title, start, end }) => {
  const [expand, setExpand] = useState(false);

  return (
    <Stack py="20px" borderBottom="2px solid" borderColor="gray.200">
      <Flex justifyContent="space-between" gap="20px">
        <Text fontWeight="600">{title}</Text>
        <Button
          variant="link"
          color="gray.600"
          fontWeight="700"
          rightIcon={
            expand ? (
              <MdKeyboardArrowUp size="20" />
            ) : (
              <MdKeyboardArrowDown size="20" />
            )
          }
          onClick={() => {
            if (!expand) {
              setExpand(true);
              return;
            }
            setExpand(false);
          }}
        >
          View {expand ? "less" : "more"}
        </Button>
      </Flex>
      <Flex alignItems="center">
        <Box as={LuCalendar} color="primary.main" size="20" />
        <Text ml="10px">
          {start.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </Text>
      </Flex>
      <Flex alignItems="center">
        <Box as={LuClock} color="primary.main" size="20" />
        <Text ml="10px">
          {`${start.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })} - ${end.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}`}
        </Text>
      </Flex>
      <Collapse in={expand}>
        <Flex gap="20px">
          <Button
            variant="outline"
            color="primary.main"
            borderColor="primary.main"
            bgColor="#F0F3FF"
            // as={Link}
            // to="/call"
          >
            Reschedule
          </Button>
        </Flex>
      </Collapse>
    </Stack>
  );
};

export default Event;
