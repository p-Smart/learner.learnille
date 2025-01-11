import { Box, Button, ButtonProps, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { IoMdArrowForward } from "react-icons/io";

interface IButtonArrow extends ButtonProps {
  variant?: "normal" | "dark";
  [key: string]: any;
}

const ButtonArrow: FC<IButtonArrow> = ({ variant = "normal", ...props }) => {
  return (
    <Button
      variant="primary-light"
      pr="0"
      overflow="hidden"
      rightIcon={
        <Flex
          alignItems="center"
          justifyContent="center"
          w="40px"
          h="50px"
          bgColor="primary.main"
        >
          <Box as={IoMdArrowForward} size="20" color="white" />
        </Flex>
      }
      {...(variant === "dark" && {
        color: "black",
        bgColor: "gray.300",
        rightIcon: (
          <Flex
            alignItems="center"
            justifyContent="center"
            w="40px"
            h="50px"
            bgColor="gray.600"
          >
            <Box as={IoMdArrowForward} size="20" color="white" />
          </Flex>
        ),
      })}
      {...props}
    />
  );
};

export default ButtonArrow;
