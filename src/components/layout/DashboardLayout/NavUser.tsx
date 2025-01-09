import { Avatar, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { LuLogOut } from "react-icons/lu";

export default function NavUser() {
  return (
    <Flex
      justifyContent="space-between"
      px="20px"
      gap="20px"
      alignItems="center"
    >
      <Flex alignItems={"center"} gap="10px">
        <Image
          src="/assets/images/avatars/avatar02.svg"
          w="40px"
          h="40px"
          borderRadius="50%"
        />
        <Box isTruncated>
          <Text fontSize=".9rem" fontWeight="600">
            John Doe
          </Text>
          <Text fontSize=".8rem">john@learnille.com.ng</Text>
        </Box>
      </Flex>

      <Button
        variant="link"
        color="white"
        _focus={{ color: "whiteAlpha.800" }}
        minW="0"
        flexShrink="0"
      >
        <LuLogOut />
      </Button>
    </Flex>
  );
}
