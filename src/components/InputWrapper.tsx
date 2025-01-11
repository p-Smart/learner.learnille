import { Box, Stack, StackProps, Text } from "@chakra-ui/react";
import { FC, PropsWithChildren, ReactNode } from "react";

interface IInputWrapper extends Omit<StackProps, "title"> {
  title: string | ReactNode;
  subtitle?: string;
}

const InputWrapper: FC<IInputWrapper & PropsWithChildren> = ({
  title,
  subtitle,
  children,
  ...rest
}) => {
  return (
    <Stack gap="10px" w="100%" {...rest}>
      {typeof title === "string" ? (
        <Text fontWeight="600">
          {title}
          {subtitle ? (
            <>
              &nbsp;
              <Box
                as="sub"
                color="blackAlpha.900"
                fontSize=".9rem"
                fontWeight="400"
              >
                {subtitle}
              </Box>
            </>
          ) : null}
        </Text>
      ) : (
        title
      )}
      {children}
    </Stack>
  );
};

export default InputWrapper;
