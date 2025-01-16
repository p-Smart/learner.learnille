import {
  Stack,
  Flex,
  Text,
  Box,
  Button,
  Divider,
  Avatar,
  HStack,
  ButtonGroup,
  Collapse,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";

const OnGoingConsultations = () => {
  const consultations = [
    {
      id: "01",
      title:
        "Navigating Digital Transformation: Strategies for Business Success",
      consultant: {
        name: "Sarah Mitchell",
        profession: "Lead Developer at Pencill.ng",
        image: "https://bit.ly/sage-adebayo",
        about:
          "Highly motivated and detail-driven data analysis developer with a passion for turning complex data into actionable insights. With 10+ years of experience in data analysis, development, and consultation, I help businesses and organizations make informed decisions and drive growth. My expertise includes python, java, C++, and I'm dedicated to delivering personalized solutions that meet each client's unique needs.",
      },
      date: "Wed, Nov. 14 2023",
      time: "10:00pm - 12:00pm",
      lastBooked: "27th November 2023 10:00pm WAT",
    },
    {
      id: "02",
      title:
        "Navigating Digital Transformation: Strategies for Business Success",
      consultant: {
        name: "Sarah Mitchell",
        profession: "Lead Developer at Pencill.ng",
        image: "https://bit.ly/sage-adebayo",
        about:
          "Highly motivated and detail-driven data analysis developer with a passion for turning complex data into actionable insights. With 10+ years of experience in data analysis, development, and consultation, I help businesses and organizations make informed decisions and drive growth. My expertise includes python, java, C++, and I'm dedicated to delivering personalized solutions that meet each client's unique needs.",
      },
      date: "Wed, Nov. 14 2023",
      time: "10:00pm - 12:00pm",
      lastBooked: "27th November 2023 10:00pm WAT",
    },
    {
      id: "03",
      title:
        "Navigating Digital Transformation: Strategies for Business Success",
      consultant: {
        name: "Sarah Mitchell",
        profession: "Lead Developer at Pencill.ng",
        image: "https://bit.ly/sage-adebayo",
        about:
          "Highly motivated and detail-driven data analysis developer with a passion for turning complex data into actionable insights. With 10+ years of experience in data analysis, development, and consultation, I help businesses and organizations make informed decisions and drive growth. My expertise includes python, java, C++, and I'm dedicated to delivering personalized solutions that meet each client's unique needs.",
      },
      date: "Wed, Nov. 14 2023",
      time: "10:00pm - 12:00pm",
      lastBooked: "27th November 2023 10:00pm WAT",
    },
  ];

  return (
    <Stack gap="10px">
      {consultations.map((consultation, idx) => (
        <OngoingConsultation key={consultation.title + idx} {...consultation} />
      ))}
    </Stack>
  );
};

interface OngoingConsultation {
  id: string;
  title: string;
  consultant: {
    name: string;
    profession: string;
    image: string;
    about: string;
  };
  date: string;
  time: string;
  lastBooked?: string;
}

const OngoingConsultation: React.FC<OngoingConsultation> = ({
  consultant,
  date,
  id,
  time,
  title,
  lastBooked,
}) => {
  const [expand, setExpand] = useState(false);

  const Buttons = (
    <Flex
      gap="5px"
      flexWrap="wrap"
      sx={{
        "& button": {
          fontSize: ".9rem",
        },
      }}
    >
      <Button as={Link} to="/call">
        Join meeting
      </Button>
      <Button
        variant="outline"
        borderColor="rgb(0,0,0,.4)"
        color="black"
        as={Link}
        to="/chat"
      >
        Send message
      </Button>
      <Button variant="outline" borderColor="rgb(0,0,0,.4)" color="black">
        Reschedule
      </Button>
    </Flex>
  );

  return (
    <Stack
      borderRadius="10px"
      border="1px solid"
      borderColor={expand ? "#C7D0FD" : "transparent"}
      bgColor="white"
      py="20px"
    >
      <Flex px="20px" gap="20px" justifyContent="space-between" flexWrap="wrap">
        <Stack gap="20px" w="650px" maxW="100%">
          <Text fontWeight={expand ? "700" : "400"}>
            {title} with{" "}
            <Text as="span" color="primary.main" fontWeight="700">
              {consultant.name}
            </Text>
          </Text>
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
          {!expand ? Buttons : null}
        </Stack>
        <Button
          mb="auto"
          variant="link"
          color="gray.600"
          fontWeight="700"
          fontSize=".9rem"
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
          {!expand ? "More details" : "View less"}
        </Button>
      </Flex>
      {expand ? <Divider my="10px" borderColor="gray.500" /> : null}
      <Collapse in={expand}>
        <>
          <Stack px="20px" gap="10px">
            <Text fontWeight="600">Consultant:</Text>
            <HStack>
              <Avatar name="Segun Adebayo" src={consultant.image} size="md" />
              <Stack ml="10px" gap="0">
                <Text fontWeight="700">{consultant.name}</Text>
                <Text fontSize=".9rem">{consultant.profession}</Text>
              </Stack>
            </HStack>
            <Stack>
              <Text fontWeight="700">About</Text>
              <Text>{consultant.about}</Text>
            </Stack>
            <Text my="10px" textDecor="underline" fontSize=".9rem">
              Booked on {lastBooked}.
            </Text>
            {expand ? Buttons : null}
          </Stack>
        </>
      </Collapse>
    </Stack>
  );
};

export default OnGoingConsultations;
