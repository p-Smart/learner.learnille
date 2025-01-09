import React from "react";
import MainLayout from "../../components/layout/DashboardLayout";
import {
  Stack,
  Flex,
  Box,
  Text,
  Image,
  Button,
  Heading,
  Divider,
} from "@chakra-ui/react";

const PurchaseHistory = () => {
  return (
    <MainLayout>
      <Stack p="1rem">
        <Heading py="1rem" color="#363B47" fontSize="20px">
          Purchase History
        </Heading>
        <Box bg="brand.white">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            rounded="lg"
          >
            <Box>
              <Text fontSize="14px" fontWeight="bold">
                1st August, 2023 at 15:30 PM
              </Text>
              <Flex gap="1rem" py=".5rem">
                <Box display="flex" gap="4px" alignItems="center">
                  <Image
                    w="16px"
                    src="/assets/icons/byoutube.svg"
                    alt="people"
                  />
                  <Text fontSize="12px" color="#6E7485">
                    3 Courses
                  </Text>
                </Box>
                <Box display="flex" gap="4px" alignItems="center">
                  <Image
                    w="16px"
                    src="/assets/icons/CurrencyDollarSimple.svg"
                    alt="people"
                  />
                  <Text fontSize="12px" color="#6E7485">
                    $75.00 USD
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" gap="4px">
                  <Image
                    w="16px"
                    src="/assets/icons/BCreditCard.svg"
                    alt="people"
                  />
                  <Text fontSize="12px" color="#6E7485">
                    Credit Card
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Button fontSize="20px">↓</Button>
          </Flex>
          <Divider />
          <Flex
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            rounded="lg"
          >
            <Box
              alignItems="center"
              gap="1rem"
              mt="1rem"
              color="#E9EAF0"
              borderRight={{ base: "none", md: "1px" }}
            >
              <Flex mr="2rem">
                <Box display="flex" gap="1rem" p="1rem">
                  <Image
                    h="102px"
                    w="125px"
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                  />
                  <Flex direction="column" justifyContent="space-between">
                    <Flex gap="1rem" justifyContent="space-between">
                      <Heading fontSize="14px" color="#222021">
                        Living room Sofa for displaying users
                      </Heading>
                    </Flex>
                    <Flex alignItems="center" gap="1rem">
                      <Text fontSize="12px" color="#8C94A3">
                        Created by
                      </Text>
                      <Text fontSize="12px" color="#363B47">
                        Makanju &bull; Femi
                      </Text>
                    </Flex>
                    <Flex gap="1rem">
                      <Flex gap="2px" alignItems="center">
                        <Image
                          src="/assets/images/Star.svg"
                          alt="more-options"
                        />
                        <Text fontWeight="bold" color="#A1A5B3" fontSize="12px">
                          5.0
                        </Text>
                        <Text fontSize="12px" color="#A1A5B3">
                          (3,579 Reviews)
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
                <Flex gap="5px" alignItems="center">
                  <Text fontWeight="bold" fontSize="14px" color="brand.primary">
                    $14.00
                  </Text>
                  <Text as="s" fontSize="12px" color="#A1A5B3">
                    $26.00
                  </Text>
                </Flex>
              </Flex>
              <Flex>
                <Box display="flex" gap="1rem" p="1rem">
                  <Image
                    h="102px"
                    w="125px"
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                  />
                  <Flex direction="column" justifyContent="space-between">
                    <Flex gap="1rem" justifyContent="space-between">
                      <Heading fontSize="14px">
                        Living room Sofa for displaying users
                      </Heading>
                    </Flex>
                    <Flex alignItems="center" gap="1rem">
                      <Text fontSize="12px" color="#8C94A3">
                        Created by
                      </Text>
                      <Text fontSize="12px" color="#363B47">
                        Makanju &bull; Femi
                      </Text>
                    </Flex>
                    <Flex gap="1rem">
                      <Flex gap="2px" alignItems="center">
                        <Image
                          src="/assets/images/Star.svg"
                          alt="more-options"
                        />
                        <Text fontWeight="bold" fontSize="12px">
                          5.0
                        </Text>
                        <Text fontSize="12px" color="#A1A5B3">
                          (3,579 Reviews)
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
                <Flex gap="5px" alignItems="center">
                  <Text fontWeight="bold" fontSize="14px" color="brand.primary">
                    $14.00
                  </Text>
                  <Text as="s" fontSize="12px" color="#A1A5B3">
                    $26.00
                  </Text>
                </Flex>
              </Flex>
            </Box>

            <Box>
              <Box>
                <Text fontSize="18px" color="#222021">
                  1st August, 2023 at 15:30 PM
                </Text>
                <Flex>
                  <Box display="flex" gap="4px" alignItems="center">
                    <Image
                      w="16px"
                      src="/assets/icons/byoutube.svg"
                      alt="people"
                    />
                    <Text fontSize="14px" color="#6E7485">
                      3 Courses
                    </Text>
                  </Box>
                  <Box display="flex" gap="4px" alignItems="center">
                    <Image
                      w="16px"
                      src="/assets/icons/CurrencyDollarSimple.svg"
                      alt="people"
                    />
                    <Text fontSize="14px" color="#6E7485">
                      $75.00 USD
                    </Text>
                  </Box>
                  <Box display="flex" alignItems="center" gap="4px">
                    <Image
                      w="16px"
                      src="/assets/icons/BCreditCard.svg"
                      alt="people"
                    />
                    <Text fontSize="14px" color="#6E7485">
                      Credit Card
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </MainLayout>
  );
};

export default PurchaseHistory;
