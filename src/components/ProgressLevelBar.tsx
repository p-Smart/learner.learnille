import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";

interface IProgressLevelBar {
  currentLevel: number;
  total: number;
  fillPrevious?: boolean;
}

const ProgressLevelBar: FC<IProgressLevelBar> = ({
  total,
  currentLevel,
  fillPrevious,
}) => {
  return (
    <Flex w="100%" gap="10px">
      {Array.from({ length: total }).map((_, k) => (
        <Box
          key={k}
          flex="1"
          borderRadius="12px"
          h="6px"
          bgColor={
            (fillPrevious && k + 1 <= currentLevel) || currentLevel === k + 1
              ? "primary.main"
              : "gray.100"
          }
        />
      ))}
    </Flex>
  );
};

export default ProgressLevelBar;
