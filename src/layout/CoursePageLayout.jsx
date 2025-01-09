import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import EventSecion from "../components/event/EventSecion";

const CoursePageLayout = (props) => {
  return (
    <Flex direction={{ base: "column", md: "row" }} mt="1rem" gap="1rem">
      <Box w={{ base: "100%" }}>{props.children}</Box>
      <Box w={{ base: "100%", lg: "100%", xl: "500px" }}>
        <EventSecion />
      </Box>
    </Flex>
  );
};

export default CoursePageLayout;
