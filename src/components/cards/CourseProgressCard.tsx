import {
  Box,
  Button,
  Divider,
  HStack,
  Progress,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

export interface ICourseProgressCard extends StackProps {
  title: string;
  desc: string;
  percentage: number;
  resume_route: string;
  image: string;
}

const CourseProgressCard: FC<ICourseProgressCard> = ({
  title,
  desc,
  percentage,
  resume_route,
  image,
  ...stackProps
}) => {
  return (
    <Stack
      h="400px"
      maxW="100%"
      w="450px"
      bgColor="white"
      borderRadius="10px"
      p="15px"
      gap="15px"
      userSelect="none"
      {...stackProps}
    >
      <Box
        h="50%"
        w="100%"
        borderRadius="5px"
        overflow="hidden"
        position="relative"
      >
        <Box as="img" src={image} w="100%" h="100%" objectFit="cover" />
      </Box>

      <Stack>
        <HStack fontWeight="600" justifyContent="space-between" fontSize=".9rem">
          <Text>Ongoing Course</Text>
          <Text color="primary.main">{`${percentage}% Completed`}</Text>
        </HStack>
        <Progress
          value={percentage}
          h="5px"
           borderRadius="3px"
          sx={{
            "& > div": {
              bgColor: "primary.main", // Progress bar color
            },
            bgColor: "#B7BAC7", // Track color
          }}
        />
      </Stack>

      <Text w="100%" isTruncated fontWeight="600">
        {title}
      </Text>

      <Text color="gray.600" w="100%" isTruncated>
        {desc}
      </Text>

      <Divider borderColor="blackAlpha.300" borderWidth="1px" />

      <Button variant="primary-light" as={Link} to={resume_route}>
        Resume Course
      </Button>
    </Stack>
  );
};

export default CourseProgressCard;
