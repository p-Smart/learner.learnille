import React, { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import {
  Stack,
  Flex,
  Box,
  Text,
  Divider,
  IconButton,
  HStack,
  Collapse,
} from "@chakra-ui/react";
import { GoArrowDown, GoArrowUp, GoStarFill } from "react-icons/go";
import { VscCreditCard } from "react-icons/vsc";
import { PiCurrencyDollarSimple, PiPlayCircle } from "react-icons/pi";
import Price from "@/components/Price";

const PurchaseHistory = () => {
  const item = {
    date: "1st August, 2023 at 15:30 PM",
    total_price: "75.00",
    payment_method: "Credit Card",
    cc_details: {
      name: "Kevin Gilbert",
      card_no: "4142 **** **** ****",
      mmyy: "04/24",
    },
    courses: [
      {
        title: "The Ultimate Graphics D.. Course - Beginner to Advanced",
        by: "Larry King • John Dope",
        image: "/assets/images/dummy/e1d8bf5827bd57bc0f055ee16ad7ed7c.jpeg",
        price: "37.00",
        original_price: "49.00",
        ratings: "4.6",
        reviews: "444",
      },
      {
        title: "The Ultimate Graphics D.. Course - Beginner to Advanced",
        by: "Larry King • John Dope",
        image: "/assets/images/dummy/e1d8bf5827bd57bc0f055ee16ad7ed7c.jpeg",
        price: "37.00",
        original_price: "49.00",
        ratings: "4.6",
        reviews: "444",
      },
      {
        title: "The Ultimate Graphics D.. Course - Beginner to Advanced",
        by: "Larry King • John Dope",
        image: "/assets/images/dummy/e1d8bf5827bd57bc0f055ee16ad7ed7c.jpeg",
        price: "37.00",
        original_price: "49.00",
        ratings: "4.6",
        reviews: "444",
      },
    ],
    consultations: [
      {
        title: "Overcoming Temptation",
        by: "Michael Scofield",
        image: "/assets/images/dummy/e1d8bf5827bd57bc0f055ee16ad7ed7c.jpeg",
        price: "59.00",
        original_price: "77.00",
        ratings: "3.5",
        reviews: "121",
      },
    ],
  };
  const history = [item, item, item, item];
  return (
    <DashboardLayout>
      <Stack>
        <Stack px="20px" pt="20px">
          <Text fontSize="1.2rem" fontWeight="600">
            Purchase History
          </Text>
        </Stack>
      </Stack>

      <Stack>
        {history.map((item, idx) => (
          <PurchaseItem key={item.date + idx} {...item} />
        ))}
      </Stack>
    </DashboardLayout>
  );
};

export default PurchaseHistory;

interface PurchaseItem {
  date: string;
  total_price: string;
  payment_method: string;
  cc_details: {
    name: string;
    card_no: string;
    mmyy: string;
  };
  courses?: {
    title: string;
    by: string;
    image: string;
    price: string;
    original_price: string;
    ratings: string;
    reviews: string;
  }[];
  consultations?: {
    title: string;
    by: string;
    image: string;
    price: string;
    original_price: string;
    ratings: string;
    reviews: string;
  }[];
}

const PurchaseItem: React.FC<PurchaseItem> = ({
  date,
  cc_details,
  payment_method,
  total_price,
  consultations,
  courses,
}) => {
  const [expand, setExpand] = useState(false);

  return (
    <Stack
      bgColor="white"
      {...(expand && {
        border: "1px solid",
        borderColor: "gray.200",
        shadow: "sm",
      })}
    >
      <Flex justifyContent="space-between" p="20px">
        <Stack>
          <Text fontWeight="600" color={expand ? "primary.main" : "black"}>
            {date}
          </Text>
          <HStack gap="20px" flexWrap="wrap">
            {courses.length ? (
              <HStack>
                <Box color="primary.main" as={PiPlayCircle} size="24" />
                <Text color="gray.600">{`${courses.length} Courses`}</Text>
              </HStack>
            ) : null}
            {consultations.length ? (
              <HStack>
                <Box color="primary.main" as={PiPlayCircle} size="24" />
                <Text color="gray.600">{`${consultations.length} Consultations`}</Text>
              </HStack>
            ) : null}
            <HStack>
              <Box color="primary.main" as={PiCurrencyDollarSimple} size="24" />
              <Text color="gray.600">{`${total_price} USD`}</Text>
            </HStack>
            <HStack>
              <Box color="primary.main" as={VscCreditCard} size="24" />
              <Text color="gray.600">{`${payment_method}`}</Text>
            </HStack>
          </HStack>
        </Stack>
        <IconButton
          onClick={() => {
            if (expand) {
              setExpand(false);
              return;
            }
            setExpand(true);
          }}
          icon={expand ? <GoArrowUp size="20" /> : <GoArrowDown size="20" />}
          aria-label="expand/collapse"
          bgColor={expand ? "primary.main" : "gray.100"}
          color={expand ? "white" : "black"}
          _hover={{
            bgColor: expand ? "primary.main" : "gray.200",
          }}
        />
      </Flex>
      {expand ? <Divider mb="20px" /> : null}

      <Collapse in={expand}>
        <Flex
          pb="20px"
          flex="1"
          flexDir={{ base: "column", lg: "row" }}
          gap="20px"
        >
          <Stack gap="20px" px="20px">
            {courses.length ? (
              <>
                <Text fontWeight="600">Courses</Text>
                {courses.map(
                  (
                    {
                      image,
                      original_price,
                      price,
                      ratings,
                      reviews,
                      title,
                      by,
                    },
                    idx
                  ) => (
                    <HStack
                      key={idx + title}
                      w="100%"
                      gap="10px"
                      alignItems={{ base: "unset", sm: "center" }}
                      flexDir={{ base: "column", sm: "row" }}
                    >
                      <Box
                        as="img"
                        src={image}
                        w="125px"
                        h="95px"
                        objectFit="cover"
                        borderRadius="5px"
                      />
                      <Stack gap="10px" w="280px" maxW="100%">
                        <Text variant="h6">{title}</Text>
                        <Text fontSize=".9rem">
                          <Text as="span" color="gray.600">
                            Created by
                          </Text>
                          &nbsp;
                          <b>{by}</b>
                        </Text>

                        <HStack gap="5px">
                          <Box as={GoStarFill} color="primary.main" />
                          <Text fontWeight="600">{ratings}</Text>
                          <Text color="gray.600">({reviews} Reviews)</Text>
                        </HStack>
                      </Stack>
                      <Price
                        current={price}
                        old={original_price}
                        currentColor="primary.main"
                      />
                    </HStack>
                  )
                )}
              </>
            ) : null}

            {consultations.length ? (
              <>
                <Text fontWeight="600" mt="20px">
                  Consultations
                </Text>
                {consultations.map(
                  (
                    {
                      image,
                      original_price,
                      price,
                      ratings,
                      reviews,
                      title,
                      by,
                    },
                    idx
                  ) => (
                    <HStack
                      key={idx + title}
                      w="100%"
                      gap="10px"
                      alignItems={{ base: "unset", sm: "center" }}
                      flexDir={{ base: "column", sm: "row" }}
                    >
                      <Box
                        as="img"
                        src={image}
                        w="125px"
                        h="95px"
                        objectFit="cover"
                        borderRadius="5px"
                      />
                      <Stack gap="10px" w="280px" maxW="100%">
                        <Text variant="h6">{title}</Text>
                        <Text fontSize=".9rem">
                          <Text as="span" color="gray.600">
                            Created by
                          </Text>
                          &nbsp;
                          <b>{by}</b>
                        </Text>

                        <HStack gap="5px">
                          <Box as={GoStarFill} color="primary.main" />
                          <Text fontWeight="600">{ratings}</Text>
                          <Text color="gray.600">({reviews} Reviews)</Text>
                        </HStack>
                      </Stack>
                      <Price
                        current={price}
                        old={original_price}
                        currentColor="primary.main"
                      />
                    </HStack>
                  )
                )}
              </>
            ) : null}
          </Stack>

          <Stack
            ml="auto"
            w="400px"
            maxW="100%"
            borderLeft="1px solid rgb(0,0,0,.16)"
            px="20px"
            justifyContent="center"
          >
            <Text fontSize="1.1rem" fontWeight="500">
              {date}
            </Text>
            <HStack gap="20px" flexWrap="wrap">
              <HStack>
                <Box color="primary.main" as={PiPlayCircle} size="24" />
                <Text color="gray.600">{`${courses.length} Courses`}</Text>
              </HStack>
              <HStack>
                <Box
                  color="primary.main"
                  as={PiCurrencyDollarSimple}
                  size="24"
                />
                <Text color="gray.600">{`${total_price} USD`}</Text>
              </HStack>
              <HStack>
                <Box color="primary.main" as={VscCreditCard} size="24" />
                <Text color="gray.600">{`${payment_method}`}</Text>
              </HStack>
            </HStack>

            <HStack
              justifyContent="space-between"
              gap="50px"
              fontWeight="600"
              mt="20px"
            >
              <HStack gap="50px">
                <Text>{cc_details.name}</Text>
                <Text>{cc_details.card_no}</Text>
              </HStack>
              <Text>{cc_details.mmyy}</Text>
            </HStack>
          </Stack>
        </Flex>
      </Collapse>
    </Stack>
  );
};
