import MainLayout from "../../components/layout/MainLayout";
import ChatLayout from "../../components/layout/ChatLayout";
import {
  Stack,
  Divider,
  Flex,
  Box,
  Avatar,
  AvatarBadge,
  Heading,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import ASSETS from "../../../public/assets";

const Chat = () => {
  return (
    <MainLayout>
      <ChatLayout>
        <Stack bg="brand.white" rounded="lg" mb="3rem">
          <Flex alignItems="center" justifyContent="space-between" p=".5rem">
            <Box>
              <Box display="flex" gap="6px" alignItems="center">
                <Avatar>
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
                <Box>
                  <Heading fontSize="12px" color="#222021">
                    James Oshoala
                  </Heading>
                  <Text fontSize="12px" color="#222021" mt="5px">
                    Online
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box>
              <InputGroup
                display={["none", "none", "block", "block"]}
                w={["200px", "200px", "350px", "350px"]}
                mx="1rem"
              >
                <Input
                  focusBorderColor="brand.primary"
                  placeholder="Search.."
                />
                <InputRightElement>
                  <Image src={ASSETS.icon} alt="search" />
                </InputRightElement>
              </InputGroup>
            </Box>
          </Flex>
          <Divider />
          <Box px=".5rem" position="relative" overflowY="auto" h="100vh">
            <Flex justifyContent="center" p=".5rem">
              <Text bg="#F5F7FA" color="#8C94A3" fontSize="12px">
                Today
              </Text>
            </Flex>
            <Box position="absolute" bottom="0">
              <Box mt=".7rem" maxW="60%" float="left">
                <Box>
                  <Box mb=".4rem" display="flex" gap="6px" alignItems="center">
                    <Avatar w="20px" h="20px"></Avatar>
                    <Box>
                      <Heading fontSize="12px" color="#222021">
                        James Oshoala
                      </Heading>
                    </Box>
                  </Box>
                </Box>
                <Box
                  bg="#F0F3FF"
                  color="#222021"
                  rounded="lg"
                  p=".5rem"
                  fontSize="12px"
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </Box>
              </Box>
              <Box mt=".7rem" maxW="60%" float="left">
                <Box>
                  <Box mb=".4rem" display="flex" gap="6px" alignItems="center">
                    <Avatar w="20px" h="20px"></Avatar>
                    <Box>
                      <Heading fontSize="12px" color="#222021">
                        James Oshoala
                      </Heading>
                    </Box>
                  </Box>
                </Box>
                <Box
                  bg="#F0F3FF"
                  color="#222021"
                  rounded="lg"
                  p=".5rem"
                  fontSize="12px"
                >
                  Hello Makanju Oluwafemi Emmanuel is here again, please let me
                  know how you are doing
                </Box>
              </Box>
              <Box mt=".7rem" maxW="60%" float="right" mr=".5rem">
                <Box>
                  <Box
                    display="flex"
                    justifyContent="end"
                    mb=".4rem"
                    gap="6px"
                    alignItems="center"
                  >
                    <Avatar w="20px" h="20px"></Avatar>
                    <Heading fontSize="12px" color="#222021">
                      James Oshoala
                    </Heading>
                  </Box>
                </Box>
                <Box
                  mt="5px"
                  bg="brand.primary"
                  color="brand.white"
                  rounded="lg"
                  p=".5rem"
                  fontSize="12px"
                >
                  Hello Makanju Oluwafemi Emmanuel is here again, please let me
                  know how you are doing
                </Box>
                <Box
                  mt="5px"
                  bg="brand.primary"
                  color="brand.white"
                  rounded="lg"
                  p=".5rem"
                  fontSize="12px"
                >
                  Hello Makanju Oluwafemi Emmanuel is here again, please let me
                  know how you are doing
                </Box>
              </Box>
            </Box>
          </Box>
          <Box w="full">
            <Divider />
            <Flex p=".5rem" mt="1rem" gap=".5rem">
              <Box
                border="1px"
                w="100%"
                rounded="lg"
                borderColor="#E8EAEE"
                bg="#fff"
                display="flex"
              >
                <Input
                  style={{ boxShadow: "none" }}
                  border="none"
                  placeholder="Type your message"
                />
              </Box>
              <Flex>
                <Box
                  cursor="pointer"
                  bg="brand.primary"
                  borderRightRadius="7px"
                  h="40px"
                  w="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="brand.white"
                >
                  🡪
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Stack>
      </ChatLayout>
    </MainLayout>
  );
};

export default Chat;
