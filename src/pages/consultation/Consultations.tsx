import DashboardLayout from "@/layout/DashboardLayout";
import {
  Box,
  Flex,
  Stack,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import TabList from "@/components/TabList";
import OnGoingConsultations from "./OnGoingConsultations";
import CompletedConsultations from "./CompletedConsultations";

const Consultations = () => {
  const tips = [
    {
      tipTitle: "#1 Tip for a successful meeting",
      title: "How to Prepare for your Next Meeting",
      content:
        "Plan ahead! Prepare the questions and topics you do like to discuss. Get a stable network connection, convenient space free from any form of distraction.",
    },
    {
      tipTitle: "#1 Tip for a successful meeting",
      title: "How to Prepare for your Next Meeting",
      content:
        "Plan ahead! Prepare the questions and topics you do like to discuss. Get a stable network connection, convenient space free from any form of distraction.",
    },
    {
      tipTitle: "#1 Tip for a successful meeting",
      title: "How to Prepare for your Next Meeting",
      content:
        "Plan ahead! Prepare the questions and topics you do like to discuss. Get a stable network connection, convenient space free from any form of distraction.",
    },
    {
      tipTitle: "#1 Tip for a successful meeting",
      title: "How to Prepare for your Next Meeting",
      content:
        "Plan ahead! Prepare the questions and topics you do like to discuss. Get a stable network connection, convenient space free from any form of distraction.",
    },
  ];

  const tabs = [
    {
      title: "Ongoing Consultation",
      count: 4,
    },
    {
      title: "Completed Consultation",
      count: 2,
    },
  ];

  return (
    <DashboardLayout>
      <Flex direction={{ base: "column", xl: "row" }} mt="1rem" gap="1rem">
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
                <OnGoingConsultations key="ongoing" />
              </TabPanel>
              <TabPanel>
                <CompletedConsultations key="completed" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Stack
          gap="1rem"
          w={{ base: "100%", lg: "400px" }}
          mb="3rem"
          flexShrink="0"
        >
          {tips.map((tip, idx) => (
            <Flex
              key={tip.title + idx}
              direction="column"
              p="1rem"
              rounded="lg"
              border="1px"
              color="#C7D0FD"
              _hover={{ shadow: "0px 2px 7px rgba(0 , 0 , 0 , .1)" }}
            >
              <Text color="#363B47" fontWeight="700" fontSize=".9rem">
                {tip.tipTitle}
              </Text>
              <Text color="brand.primary" py=".5rem" variant="h6">
                {tip.title}
              </Text>
              <Text color="#42404C" fontSize=".9rem">
                {tip.content}
              </Text>
            </Flex>
          ))}
        </Stack>
      </Flex>
    </DashboardLayout>
  );
};

export default Consultations;
