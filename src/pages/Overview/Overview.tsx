import DashboardLayout from "../../layout/DashboardLayout";
import {
  Grid,
  GridItem,
  Heading,
  Flex,
  Box,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperButton from "@/components/swiper/SwiperButton";
import { PiCrownSimple, PiTrophy } from "react-icons/pi";
import DashCard from "@/components/cards/DashCard";
import { BsPeople } from "react-icons/bs";
import Calendar from "@/components/Calendar";
import UpcomingEvents from "./UpcomingEvents";
import OverviewChart from "./OverviewChart";
import CourseProgressCard from "@/components/cards/CourseProgressCard";
import ConsultationCard from "@/components/cards/ConsultationCard";

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

  const ongoingCourses = [
    {
      id: "1",
      title: "The Complete Web Development Bootcamp",
      desc: "167. What You'll Need to Get Started - Se...",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      percentage: 15,
      resume_route: "",
    },
    {
      id: "2",
      title: "Digital Mastery: UX/UI Design, Blockchain...",
      desc: "64. Best Color practice for UI/UX Designers.",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      percentage: 52,
      resume_route: "",
    },
    {
      id: "3",
      title: "Data-Driven Decisions: Mastering Data...",
      desc: "196. Tools and Techniques for Data-Driven...",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      percentage: 85,
      resume_route: "",
    },
    {
      id: "4",
      title: "Learn how to design Figma Component...",
      desc: "6. Component vs Variants",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      percentage: 4,
      resume_route: "",
    },
    {
      id: "5",
      title: "The Complete Web Development Bootcamp",
      desc: "167. What You'll Need to Get Started - Se...",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      percentage: 15,
      resume_route: "",
    },
    {
      id: "6",
      title: "Complete guide to AI Image Generative...",
      desc: "1.1 Best AI Models to generate Images",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      percentage: 15,
      resume_route: "",
    },
  ];

  const consultation = {
    category: "Self improvement",
    price: "$14.00",
    original_price: "$26.00",
    title: "How to increase your productivity as an Agile manager",
    duration: "4 hour",
    sessions: "2 sessions",
    interval: "Bi weekly",
    author: "Julian P.",
    ratings: "4.6",
    reviews: "30",
    booking_route: "/consultations/xyz",
    details_route: "/consultations/xyz",
    image: "/assets/images/dummy/a557d4d8a7aa58d80095bcd1bb514746.png",
    author_avatar: "/assets/images/avatars/avatar-03.svg",
  };
  const consultations = [
    consultation,
    consultation,
    consultation,
    consultation,
    consultation,
    consultation,
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
          <Heading pt="20px" fontSize="1rem" color="gray.900">
            Continue from where you stop!
          </Heading>
          <Grid
            templateColumns="repeat(auto-fit, minmax(234px, 1fr))"
            gap="10px"
          >
            {ongoingCourses.map((course, idx) => (
              <GridItem key={course.id + idx}>
                <CourseProgressCard
                  title={course.title}
                  desc={course.desc}
                  image={course.image}
                  percentage={course.percentage}
                  resume_route={course.resume_route}
                />
              </GridItem>
            ))}
          </Grid>

          <OverviewChart />

          <Stack pt="20px">
            <Heading fontSize="1rem" color="gray.900">
              You may like!
            </Heading>
            <Text color="gray.800">
              Stay ahead of the curve and achieve success with strategic
              guidance.
            </Text>
            <Box w="100%">
              <Swiper
                spaceBetween={20}
                slidesPerView="auto"
                style={{ position: "relative", paddingBottom: "80px" }}
              >
                {consultations.map((consultation, k) => (
                  <SwiperSlide
                    style={{
                      width: "auto",
                    }}
                    key={k}
                  >
                    <ConsultationCard {...consultation} />
                  </SwiperSlide>
                ))}
                <Flex
                  gap="20px"
                  position="absolute"
                  left="50%"
                  bottom="10px"
                  transform="translateX(-50%)"
                >
                  <SwiperButton prev />
                  <SwiperButton next />
                </Flex>
              </Swiper>
            </Box>
          </Stack>
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
