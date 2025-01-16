import { Grid, GridItem } from "@chakra-ui/react";
import CourseCompletedCard from "@/components/cards/CourseCompletedCard";

const Completed = () => {
  const completedCourses = [
    {
      id: "1",
      title: "Hands-On Guide to Penetration Testing and Ethical Hacking",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      certificate_route: "",
      watch_route: "/my-courses/1",
    },
    {
      id: "2",
      title: "Cloud Security Essentials: Protecting Data in the Cloud",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      certificate_route: "",
      watch_route: "/my-courses/2",
    },
    {
      id: "3",
      title: "Introduction to Data Cleaning and Visualization with Python",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      certificate_route: "",
      watch_route: "/my-courses/3",
    },
    {
      id: "4",
      title: "Smart Contracts in Action: Building Your First Ethereum Contract",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      certificate_route: "",
      watch_route: "/my-courses/4",
    },
    {
      id: "5",
      title: "Automating Business Processes with Python: A Beginner's Guide",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      certificate_route: "",
      watch_route: "/my-courses/5",
    },
    {
      id: "6",
      title:
        "From Static to Dynamic: Adding Interactivity with JavaScript and APIs",
      image: "/assets/images/dummy/033199e62b8a0e0bf7f5be031dce6660.jpeg",
      certificate_route: "",
      watch_route: "/my-courses/6",
    },
  ];

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(260px, 1fr))" gap="10px">
      {completedCourses.map((course, idx) => (
        <GridItem key={course.id + idx}>
          <CourseCompletedCard
            title={course.title}
            image={course.image}
            certificate_route={course.certificate_route}
            watch_route={course.watch_route}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Completed;
