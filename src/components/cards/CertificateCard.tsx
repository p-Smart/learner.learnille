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

export interface ICertificateCard extends StackProps {
  title: string;
  download_route: string;
  view_route: string;
  image: string;
}

const CertificateCard: FC<ICertificateCard> = ({
  title,
  download_route,
  view_route,
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
        <Button as={Link} to={download_route}>
          Download Certificate
        </Button>
        <Button
          variant="primary-light"
          as={Link}
          to={view_route}
          color="gray.800"
        >
          View Certificate
        </Button>
      </Stack>
    </Stack>
  );
};

export default CertificateCard;
