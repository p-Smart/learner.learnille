import MainLayout from "../../../../layout/DashboardLayout";
import ConsultationWrapper from "../../../../layout/ConsultationWrapper";
import TabsView from "../../../../components/utility/Tabs";
import {
  Stack,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import CourseCard from "../../../../components/cards/CourseCard";
import Overview from "./part/Overview";
import Review from "./part/Review";
import Instructor from "./part/Instructor";
import Curriculum from "./part/Curriculum";

const tabOptions = ["Overview", "Curriculum", "Instructor", "Review"];

const OverviewPart = () => <Overview />;

const CurriculumPart = () => <Curriculum />;

const InstructorPart = () => <Instructor />;

const ReviewPart = () => <Review />;

const tabView = [
  <OverviewPart key="overview" />,
  <CurriculumPart key="Curriculum" />,
  <InstructorPart key="Instructor" />,
  <ReviewPart key="Review" />,
];

export const CourseDetails = () => {
  return (
    <MainLayout>
      <ConsultationWrapper>
        <Stack>
          <Flex direction="column" p="2rem" bg="brand.white">
            <Box py="1rem">
              <Heading fontSize="20px" color="brand.grey.700">
                How to make your first Million as a Front-End Developer
              </Heading>
              <Text py="1rem" fontSize="14px" color="brand.grey.400">
                Lorem ipsum dolor sit amet consectetur. Varius in convallis
                gravida sagittis faucibus est dignissim nunc diam. Et egestas
                vulputate sed aliquam
              </Text>
            </Box>
            <Box width="100%" height="400px">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=BK07WUEMvPk"
                width="100%"
                height="100%"
                controls
              />
            </Box>
          </Flex>
        </Stack>
        <TabsView tab={tabOptions} view={tabView} />
        <Box mb="3rem">
          <Text fontWeight="bold" py="1rem">
            Related Courses
          </Text>
          <Grid
            templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            gap="1rem"
          >
            <GridItem>
              <CourseCard />
            </GridItem>
            <GridItem>
              <CourseCard />
            </GridItem>
          </Grid>
        </Box>
      </ConsultationWrapper>
    </MainLayout>
  );
};

export default CourseDetails;
