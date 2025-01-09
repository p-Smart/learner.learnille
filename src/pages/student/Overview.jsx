import MainLayout from "../../components/layout/DashboardLayout";
import CoursePageLayout from "../../components/layout/CoursePageLayout";
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
import PieChartUtils from "../../components/chart/PieChart";

const Overview = () => {
  return (
    <MainLayout>
      <CoursePageLayout>
        <Stack gap="0" display={{ base: "block", md: "none" }} my="10px">
          <Text color="primary.main" fontWeight="700" fontSize="1.2rem">
            Hi, John
          </Text>
          <Text color="#656565" fontSize=".9rem">
            Lets learn something new today
          </Text>
        </Stack>
        <Flex direction={{ base: "column", md: "row" }} gap="1rem" mb="1rem">
          <Box h="100%" bg="brand.white" flex="2" rounded="lg" p="1rem">
            <BarChartUtils />
          </Box>
          <Box flex="1" bg="brand.white" rounded="lg" p="1rem">
            <PieChartUtils />
          </Box>
        </Flex>
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
      </CoursePageLayout>
    </MainLayout>
  );
};

export default Overview;
