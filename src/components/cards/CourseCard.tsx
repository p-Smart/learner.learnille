import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { GoStarFill } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import TextIcon from "./TextIcon";
import { Link } from "react-router-dom";

export interface ICourseCard extends StackProps {
  title: string;
  category: string;
  price: string;
  original_price: string;
  students: string;
  reviews: string;
  ratings: string;
  image: string;
  buy_route: string;
  details_route: string;
}

const CourseCard: FC<ICourseCard> = ({
  title,
  category,
  price,
  original_price,
  ratings,
  reviews,
  students,
  image,
  buy_route,
  details_route,
  ...stackProps
}) => {
  return (
    <Stack
      h="600px"
      maxW="100%"
      w={{ xs: "280px", sm: "350px" }}
      bgColor="white"
      borderRadius="10px"
      p="15px"
      gap="15px"
      cursor="pointer"
      transition="all 0.2s ease-in-out"
      _hover={{ filter: "brightness(97%)" }}
      _active={{ transform: "scale(0.94)" }}
      userSelect="none"
      {...stackProps}
    >
      <Box h="50%" w="100%" borderRadius="5px" overflow="hidden">
        <Box as="img" src={image} w="100%" h="100%" objectFit="cover" />
      </Box>

      <Flex alignItems="center" justifyContent="space-between">
        <Text
          p="5px"
          fontSize=".8rem"
          textTransform="uppercase"
          color="primary.main"
          fontWeight="600"
          borderRadius="5px 8px"
          bgColor="#F0F3FF"
        >
          {category}
        </Text>
      </Flex>

      <Flex justifyContent="space-between">
        <Text maxW="85%" fontSize="1.1rem" fontWeight="700">
          {title}
        </Text>
      </Flex>

      <Flex alignItems="center" gap="5px" justifyContent="space-between">
        <Flex gap="5px" alignItems="center">
          <Box as={GoStarFill} color="warning" />
          <Text fontWeight="600">{ratings}</Text>
          <Text>({reviews})</Text>
        </Flex>
        <TextIcon
          text={
            <>
              <Text fontWeight="600">{students}</Text>
              <Text color="blackAlpha.700">students</Text>
            </>
          }
          Icon={LuUserRound}
          iconColor="primary.main"
        />
      </Flex>

      <Divider borderColor="blackAlpha.300" borderWidth="1px" />

      <Flex alignItems="center" justifyContent="space-between">
        <Text>
          <Box as="span" fontWeight="600">
            {price}
          </Box>
          &nbsp; &nbsp;
          <Box as="span" color="blackAlpha.500" textDecor="line-through">
            {original_price}
          </Box>
        </Text>

        <IconButton
          aria-label="more-button"
          variant="unstyled"
          fontSize="24px"
          minW={0}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <IoIosMore />
        </IconButton>
      </Flex>

      <Button as={Link} to={buy_route}>
        Buy Course
      </Button>
      <Button variant="outline" as={Link} to={details_route}>
        See Details
      </Button>
    </Stack>
  );
};

export default CourseCard;
