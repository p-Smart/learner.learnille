import TextIcon from "@/components/cards/TextIcon";
import Price from "@/components/Price";
import { numberWithCommas } from "@/utils/functions";
import {
  Button,
  Heading,
  Text,
  Flex,
  Avatar,
  Wrap,
  WrapItem,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FiBarChart } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";
import { LuClock3, LuUserRound } from "react-icons/lu";
import { Link } from "react-router-dom";

const CompletedConsultations = () => {
  return (
    <TableContainer
      bgColor="white"
      shadow="sm"
      flex="1"
      border="1px solid rgb(0,0,0,.1)"
      borderRadius="5px"
      sx={{
        "& th": {
          fontSize: ".9rem",
          color: "gray.800",
        },
        "& th, td": {
          p: "20px",
        },
      }}
    >
      <Table>
        <Thead>
          <Tr>
            <Th>CONSULTATION</Th>
            <Th aria-label="consultation details" />
            <Th>PRICES/ACTION</Th>
          </Tr>
        </Thead>
        <Tbody>
          <CompletedConsultation
            id="2"
            title="Innovating with AI: Exploring Opportunities and Challenges with James Parker"
            image="/assets/images/dummy/e1d8bf5827bd57bc0f055ee16ad7ed7c.jpeg"
            price={{ current: "37", old: "49" }}
            duration="4 hour"
            sessions="4 sessions"
            interval="Bi weekly"
            author={{
              name: "Kevin Gilbert",
              image: "/assets/images/avatars/avatar-1.svg",
            }}
            ratings={5.0}
            reviews={3579}
          />
          <CompletedConsultation
            id="2"
            title="Innovating with AI: Exploring Opportunities and Challenges with James Parker"
            image="/assets/images/dummy/e1d8bf5827bd57bc0f055ee16ad7ed7c.jpeg"
            price={{ current: "37", old: "49" }}
            duration="4 hour"
            sessions="4 sessions"
            interval="Bi weekly"
            author={{
              name: "Kevin Gilbert",
              image: "/assets/images/avatars/avatar-1.svg",
            }}
            ratings={5.0}
            reviews={3579}
          />
          <CompletedConsultation
            id="3"
            title="Innovating with AI: Exploring Opportunities and Challenges with James Parker"
            image="/assets/images/dummy/e1d8bf5827bd57bc0f055ee16ad7ed7c.jpeg"
            price={{ current: "37", old: "49" }}
            duration="4 hour"
            sessions="4 sessions"
            interval="Bi weekly"
            author={{
              name: "Kevin Gilbert",
              image: "/assets/images/avatars/avatar-1.svg",
            }}
            ratings={5.0}
            reviews={3579}
          />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

interface CompletedConsultation {
  id: string;
  image: string;
  title: string;
  duration: string;
  sessions: string;
  interval: string;
  author: {
    name: string;
    image: string;
  };
  reviews: number;
  ratings: number;
  price: {
    old: string;
    current: string;
  };
}

const CompletedConsultation: React.FC<CompletedConsultation> = ({
  id,
  image,
  title,
  ratings,
  reviews,
  price,
  author,
  duration,
  interval,
  sessions,
}) => {
  return (
    <Tr color="gray.500">
      <Td>
        <Box w="125px" h="112px" borderRadius="5px" overflow="hidden">
          <Image w="100%" h="100%" objectFit="cover" src={image} />
        </Box>
      </Td>
      <Td>
        <Stack gap="20px" w="300px">
          <Text fontWeight="700" whiteSpace="break-spaces">
            {title}
          </Text>

          <Flex
            alignItems="center"
            gap="5px"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <TextIcon text={duration} Icon={LuClock3} iconColor="success" />
            <TextIcon
              text={sessions}
              Icon={LuUserRound}
              iconColor="primary.main"
            />
            <TextIcon text={interval} Icon={FiBarChart} iconColor="error" />
          </Flex>

          <Flex alignItems="center" gap="50px">
            <Flex alignItems="center" gap="10px">
              <Avatar size="base" src={author.image} />
              <Text>{author.name}</Text>
            </Flex>

            <Flex gap="5px" alignItems="center">
              <Box as={GoStarFill} color="warning" />
              <Text fontWeight="600">{ratings.toFixed(1)}</Text>
              <Text>({numberWithCommas(reviews)})</Text>
            </Flex>
          </Flex>
        </Stack>
      </Td>
      <Td>
        <VStack>
          <Price
            fontSize="1.2rem"
            currentColor="primary.main"
            current={price.current}
            old={price.old}
          />
          <HStack gap="10px" w="400px">
            <Button variant="primary-light" flex="1" fontSize=".9rem">
              Repurchase
            </Button>
            <Button
              fontSize=".9rem"
              variant="outline"
              color="black"
              borderColor="gray.200"
              flex="1"
              as={Link}
              to="/chat"
            >
              Send Message
            </Button>
          </HStack>
        </VStack>
      </Td>
    </Tr>
  );
};

export default CompletedConsultations;
