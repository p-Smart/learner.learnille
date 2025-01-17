import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { IconType } from "react-icons";

interface IIconText extends FlexProps {
  Icon: IconType | ReactNode;
  text: string | ReactNode;
}

const IconText: FC<IIconText> = ({ text, Icon, ...rest }) => {
  return (
    <Flex gap="5px" alignItems="center" {...rest}>
      {typeof Icon === "function" ? (
        <Box className="icon" fontSize="1rem" as={Icon} color="primary.main" />
      ) : (
        Icon
      )}
      {typeof text === "function" ? (
        text
      ) : (
        <Text as="span" className="text">
          {text}
        </Text>
      )}
    </Flex>
  );
};

export default IconText;
