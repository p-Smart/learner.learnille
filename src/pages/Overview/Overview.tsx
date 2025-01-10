import DashboardLayout from "../../layout/DashboardLayout";
import CoursePageLayout from "../../layout/CoursePageLayout";
import {
  Grid,
  GridItem,
  Heading,
  Flex,
  Box,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import MyCourseCard from "../../components/cards/MyCourseCard";
import { PiCrownSimple, PiTrophy } from "react-icons/pi";
import DashCard from "@/components/cards/DashCard";
import { BsPeople } from "react-icons/bs";
import Calendar from "@/components/Calendar";
import UpcomingEvents from "./UpcomingEvents";
import OverviewChart from "./OverviewChart";

const Overview = () => {
  const overviewDashCards = [
    {
      icon: <BsPeople />,
      title: "Ongoing Consultation",
      value: "3",
      iconbg: "#EFEEFF",
      iconcolor: "#1D006D",
      width: "100%",
    },
    {
      icon: <PiCrownSimple />,
      title: "Ongoing Course",
      value: "240",
      iconbg: "#E1F7E3",
      iconcolor: "#23BD33",
      width: "100%",
    },
    {
      icon: <PiTrophy />,
      title: "Total Hours Used",
      value: "1,045",
      iconbg: "#FFF1FE",
      iconcolor: "#FE19CB",
      width: "100%",
    },
  ];

  return (
    <DashboardLayout>
      <Stack gap="0" display={{ base: "block", md: "none" }} my="10px">
        <Text color="primary.main" fontWeight="700" fontSize="1.2rem">
          Hi, John
        </Text>
        <Text color="#656565" fontSize=".9rem">
          Lets learn something new today
        </Text>
      </Stack>
      <Flex gap="10px" flexDir={{ base: "column", xl: "row" }} w="100%">
        <Stack flex="1" w={{ base: "100%", xl: "600px" }}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={2}
            w={"100%"}
          >
            {overviewDashCards.map((item, i) => (
              <GridItem key={i}>
                <DashCard
                  title={item.title}
                  value={item.value}
                  icon={item.icon}
                  iconbg={item.iconbg}
                  iconcolor={item.iconcolor}
                  width={item.width}
                />
              </GridItem>
            ))}
          </Grid>
          <Heading pt="1rem" fontSize="16px" color="#1D2026">
            Continue from where you stop!
          </Heading>
          <Grid
            templateColumns="repeat(auto-fit, minmax(234px, 1fr))"
            gap=".5rem"
          >
            <GridItem>
              <MyCourseCard />
            </GridItem>
            <GridItem>
              <MyCourseCard />
            </GridItem>
            <GridItem>
              <MyCourseCard />
            </GridItem>
            <GridItem>
              <MyCourseCard />
            </GridItem>
          </Grid>
          <OverviewChart />
        </Stack>
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

export default Overview;
