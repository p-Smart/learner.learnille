import DashboardLayout from "../../layout/DashboardLayout";
import CoursePageLayout from "../../layout/CoursePageLayout";
import BarChartUtils from "../../components/chart/BarChart";
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

  return (
    <DashboardLayout>
      <CoursePageLayout>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap="1rem"
          mb="1rem"
        ></Flex>
        <Flex direction={{ base: "column", md: "row" }} gap="1rem">
          <Flex direction="column" gap="1rem" flex="1">
            <Flex
              h="92px"
              alignItems="center"
              gap="1rem"
              bg="brand.white"
              rounded="lg"
              p="1rem"
            >
              <Box
                bg="#E1F2FF"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="lg"
                h="48px"
                w="48px"
              >
                <Image src="/assets/images/CheckSquareOffset.svg" w="24px" />
              </Box>
              <Box>
                <Text fontSize="14px" color="#363B47">
                  Completed Course
                </Text>
                <Text fontSize="20px" fontWeight="bold" color="#222021">
                  3
                </Text>
              </Box>
            </Flex>
            <Flex
              h="92px"
              alignItems="center"
              gap="1rem"
              bg="brand.white"
              rounded="lg"
              p="1rem"
            >
              <Box
                bg="#EFEEFF"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="lg"
                h="48px"
                w="48px"
              >
                <Image src="/assets/images/Users.svg" w="24px" />
              </Box>
              <Box>
                <Text fontSize="14px" color="#363B47">
                  Ongoing Consultation
                </Text>
                <Text fontSize="20px" fontWeight="bold" color="#222021">
                  2
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex direction="column" gap="1rem" flex="1">
            <Flex
              h="92px"
              alignItems="center"
              gap="1rem"
              bg="brand.white"
              rounded="lg"
              p="1rem"
            >
              <Box
                bg="#FFF1FE"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="lg"
                h="48px"
                w="48px"
              >
                <Image src="/assets/images/Trophy.svg" w="24px" />
              </Box>
              <Box>
                <Text fontSize="14px" color="#363B47">
                  Total Hours Used
                </Text>
                <Text fontSize="20px" fontWeight="bold" color="#222021">
                  1045
                </Text>
              </Box>
            </Flex>
            <Flex
              h="92px"
              alignItems="center"
              gap="1rem"
              bg="brand.white"
              rounded="lg"
              p="1rem"
            >
              <Box
                bg="#E1F7E3"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="lg"
                h="48px"
                w="48px"
              >
                <Image src="/assets/images/Crown.svg" w="24px" />
              </Box>
              <Box>
                <Text fontSize="14px" color="#363B47">
                  Finished Consultation
                </Text>
                <Text fontSize="20px" fontWeight="bold" color="#222021">
                  1
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex direction="column" gap="1rem" flex="1">
            <Flex
              h="92px"
              alignItems="center"
              gap="1rem"
              bg="brand.white"
              rounded="lg"
              p="1rem"
            >
              <Box
                bg="#E1F7E3"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="lg"
                h="48px"
                w="48px"
              >
                <Image src="/assets/images/Crown.svg" w="24px" />
              </Box>
              <Box>
                <Text fontSize="14px" color="#363B47">
                  Ongoing Course
                </Text>
                <Text fontSize="20px" fontWeight="bold" color="#222021">
                  3
                </Text>
              </Box>
            </Flex>
            <Flex
              h="92px"
              alignItems="center"
              gap="1rem"
              bg="brand.white"
              rounded="lg"
              p="1rem"
            >
              <Box
                bg="#FFF0F0"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="lg"
                h="48px"
                w="48px"
              >
                <Image src="/assets/icons/RCreditCard.svg" w="24px" />
              </Box>
              <Box>
                <Text fontSize="14px" color="#363B47">
                  Total Revenue Spent
                </Text>
                <Text fontSize="20px" fontWeight="bold" color="#222021">
                  $23,800.00
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </CoursePageLayout>
    </DashboardLayout>
  );
};

export default Overview;
