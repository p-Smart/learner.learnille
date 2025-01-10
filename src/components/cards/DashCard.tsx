import { HStack, Box, VStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DashCardProps {
  iconbg: string;
  iconcolor: string;
  icon: ReactNode;
  title: string;
  value: string | number;
  width?: string;
}

function DashCard({
  iconbg,
  iconcolor,
  icon,
  title,
  value,
  width,
}: DashCardProps) {
  return (
    <HStack rounded="md" bg="white" h="80px" p="10px 20px" w={width}>
      <Box rounded="sm" p="10px" fontSize="25px" bg={iconbg} color={iconcolor}>
        {icon}
      </Box>
      <VStack ml="10px" spacing={0} alignItems="flex-start">
        <Text as="h3" fontSize="14px" fontWeight="400">
          {title}
        </Text>
        <Text mt="3px" as="h3" fontSize="18px" fontWeight="700">
          {value}
        </Text>
      </VStack>
    </HStack>
  );
}

export default DashCard;
