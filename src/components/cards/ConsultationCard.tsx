import {
  Avatar,
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
import { IoMdMore } from "react-icons/io";
import { LuClock3, LuUserRound } from "react-icons/lu";
import { FiBarChart } from "react-icons/fi";
import TextIcon from "./TextIcon";
import { Link } from "react-router-dom";
import { APP_URLS } from "@/utils/constants";

export interface IConsultationCard extends StackProps {
  title: string;
  category: string;
  price: string;
  original_price: string;
  duration: string;
  sessions: string;
  interval: string;
  author: string;
  reviews: string;
  ratings: string;
  booking_route: string;
  details_route: string;
  image: string;
  author_avatar: string;
}

const ConsultationCard: FC<IConsultationCard> = ({
  title,
  category,
  price,
  original_price,
  author,
  booking_route,
  details_route,
  duration,
  interval,
  ratings,
  reviews,
  sessions,
  author_avatar,
  image,
  ...stackProps
}) => {
  return (
    <Stack
      h="650px"
      maxW="100%"
      w={{ base: "280px", sm: "350px" }}
      bgColor="white"
      borderRadius="10px"
      p="15px"
      gap="15px"
      {...stackProps}
    >
      <Box h="50%" w="100%" borderRadius="5px" overflow="hidden">
        <Box as="img" src={image} w="100%" h="100%" objectFit="cover" />
      </Box>

      <Flex alignItems="center" justifyContent="space-between">
        <CategoryBadge category={category} />
        <Text>
          <Box as="span" fontWeight="600">
            {price}
          </Box>
          &nbsp; &nbsp;
          <Box as="span" color="blackAlpha.500" textDecor="line-through">
            {original_price}
          </Box>
        </Text>
      </Flex>

      <Flex justifyContent="space-between">
        <Text maxW="85%" fontSize="1.1rem" fontWeight="700">
          {title}
        </Text>
        <IconButton
          aria-label="more-button"
          variant="unstyled"
          fontSize="24px"
          minW={0}
        >
          <IoMdMore />
        </IconButton>
      </Flex>

      <Flex
        alignItems="center"
        gap="5px"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <TextIcon text={duration} Icon={LuClock3} iconColor="success" />
        <TextIcon text={sessions} Icon={LuUserRound} iconColor="primary.main" />
        <TextIcon text={interval} Icon={FiBarChart} iconColor="error" />
      </Flex>

      <Divider borderColor="blackAlpha.300" borderWidth="1px" />

      <Flex alignItems="center" justifyContent="space-between">
        <Flex
          alignItems="center"
          gap="10px"
          as={Link}
          to={APP_URLS.PUBLIC + "/consultant/xyz"}
        >
          <Avatar src={author_avatar} />
          <Text>{author}</Text>
        </Flex>

        <Flex gap="5px" alignItems="center">
          <Box as={GoStarFill} color="warning" />
          <Text fontWeight="600">{ratings}</Text>
          <Text>({reviews})</Text>
        </Flex>
      </Flex>

      <Button as={booking_route && Link} to={APP_URLS.PUBLIC + booking_route}>
        Book
      </Button>
      <Button
        variant="outline"
        as={details_route && Link}
        to={APP_URLS.PUBLIC + details_route}
      >
        See Details
      </Button>
    </Stack>
  );
};

export default ConsultationCard;

export const CategoryBadge = ({ category }: { category: string }) => {
  return (
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
  );
};
