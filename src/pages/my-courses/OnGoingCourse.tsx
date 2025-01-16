import { Grid, GridItem } from "@chakra-ui/react";
import CourseProgressCard from "@/components/cards/CourseProgressCard";

const OnGoing = () => {
  const ongoingCourses = [
    {
      id: "1",
      title: "The Complete Web Development Bootcamp",
      desc: "167. What You'll Need to Get Started - Se...",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      percentage: 15,
      resume_route: "/my-courses/1",
    },
    {
      id: "2",
      title: "Digital Mastery: UX/UI Design, Blockchain...",
      desc: "64. Best Color practice for UI/UX Designers.",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      percentage: 52,
      resume_route: "/my-courses/2",
    },
    {
      id: "3",
      title: "Data-Driven Decisions: Mastering Data...",
      desc: "196. Tools and Techniques for Data-Driven...",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      percentage: 85,
      resume_route: "/my-courses/3",
    },
    {
      id: "4",
      title: "Learn how to design Figma Component...",
      desc: "6. Component vs Variants",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      percentage: 4,
      resume_route: "/my-courses/4",
    },
    {
      id: "5",
      title: "The Complete Web Development Bootcamp",
      desc: "167. What You'll Need to Get Started - Se...",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      percentage: 15,
      resume_route: "/my-courses/5",
    },
    {
      id: "6",
      title: "Complete guide to AI Image Generative...",
      desc: "1.1 Best AI Models to generate Images",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      percentage: 15,
      resume_route: "/my-courses/6",
    },
  ];

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(260px, 1fr))" gap="10px">
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
  );
};

export default OnGoing;
