import {
  Box,
  Button,
  Progress,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

export interface ICourseCompletedCard extends StackProps {
  title: string;
  certificate_route: string;
  watch_route: string;
  image: string;
}

const CourseCompletedCard: FC<ICourseCompletedCard> = ({
  title,
  certificate_route,
  watch_route,
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
        <Text fontWeight="600" textAlign="center" color="primary.main" w="100%">
          100% Completed
        </Text>
        <Progress
          value={100}
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

      <Text w="100%" fontWeight="600" textAlign="center">
        {title}
      </Text>

      <Stack gap="20px">
        <Button as={Link} to={certificate_route}>
          View Certificate
        </Button>
        <Button
          variant="primary-light"
          as={Link}
          to={watch_route}
          color="gray.800"
        >
          Watch Again
        </Button>
      </Stack>
    </Stack>
  );
};

export default CourseCompletedCard;
