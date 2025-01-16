import {
  Box,
  Flex,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import CompletedCourses from "./Completed";
import OnGoingCourses from "./OnGoingCourse";
import DashboardLayout from "@/layout/DashboardLayout";
import Calendar from "@/components/Calendar";
import UpcomingEvents from "../Overview/UpcomingEvents";

const MyCourse = () => {
  const tabs = [
    {
      title: "Ongoing Courses",
      count: 6,
    },
    {
      title: "Completed Courses",
      count: 6,
    },
  ];

  return (
    <DashboardLayout>
      <Flex gap="10px" flexDir={{ base: "column", xl: "row" }} w="100%">
        <Box w={{ base: "100%", xl: "500px" }} flex="1">
          <Tabs
          // index={currentIndex}
          >
            <TabList bgColor="white" borderTopRadius="10px">
              {tabs.map((item, idx) => (
                <Tab
                  key={idx + item.title}
                  id={item.title}
                  px="20px"
                  my="0px"
                  py="20px"
                  gap="10px"
                  flex="1"
                  whiteSpace="nowrap"
                  sx={{
                    "&[aria-selected=true]": {
                      borderBottomColor: "primary.main",
                    },
                    "&[aria-selected=true] .title": {
                      color: "primary.main",
                      fontWeight: "700",
                    },
                    "&[aria-selected=true] .count": {
                      bgColor: "primary.main",
                    },
                  }}
                  onClick={() => {}}
                >
                  <Text className="title">{item.title}</Text>
                  <Text
                    className="count"
                    w="20px"
                    h="20px"
                    fontSize=".9rem"
                    bgColor="gray.300"
                    borderRadius="50%"
                    fontWeight="700"
                    color="white"
                  >
                    {item.count}
                  </Text>
                </Tab>
              ))}
            </TabList>

            <TabPanels
              bgColor="#f5f8ff"
              borderBottomRadius="10px"
              sx={{
                "& > [role=tabpanel]": {
                  p: 0,
                  pt: "10px",
                },
              }}
            >
              <TabPanel>
                <OnGoingCourses key="ongoing" />
              </TabPanel>
              <TabPanel>
                <CompletedCourses key="completed" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Stack w={{ base: "100%", xl: "380px" }} maxW="100%">
          <Stack>
            <Text variant="h6">Calendar</Text>
            <Stack bgColor="white" borderRadius="lg" mb="auto">
              <Calendar />
            </Stack>
          </Stack>
          <UpcomingEvents />
        </Stack>
      </Flex>
    </DashboardLayout>
  );
};

export default MyCourse;
