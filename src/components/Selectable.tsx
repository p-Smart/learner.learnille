import { Button, ButtonProps, Text } from "@chakra-ui/react";
import { FC } from "react";

interface ISelectable extends ButtonProps {
  label: string;
  value: string;
  selected: boolean;
  set: (val: string) => void;
}

const Selectable: FC<ISelectable> = ({
  label,
  value,
  selected,
  set,
  ...props
}) => {
  return (
    <Button
      variant="unstyle"
      borderRadius="10px"
      border="1px solid"
      borderColor={selected ? "primary.main" : "gray.100"}
      bgColor={selected ? "#F0F3FF" : "white"}
      minW="150px"
      fontWeight="400"
      onClick={() => set(value)}
      {...props}
    >
      <Text
        m="auto"
        textAlign="center"
        color={selected ? "primary.main" : "gray.500"}
      >
        {label}
      </Text>
    </Button>
  );
};

export default Selectable;
