import { useState } from "react";
import { Checkbox, Text } from "@chakra-ui/react";

export default function CustomCheckbox({
  text,
  defaultChecked = false,
}: {
  text: string;
  defaultChecked?: boolean;
}) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Checkbox
      size="md"
      colorScheme="blue"
      w="100%"
      isChecked={isChecked}
      onChange={handleCheckboxChange}
      value={isChecked ? "checked" : "unchecked"}
      sx={{
        "& .chakra-checkbox__control[data-checked]": {
          bg: "primary.main",
          borderColor: "primary.main",
          borderWidth: "1px",
        },
        "& .chakra-checkbox__control": {
          borderColor: "primary.main",
          borderWidth: "1px",
        },
      }}
    >
      <Text color={isChecked ? "#000000" : "gray.500"}>{text}</Text>
    </Checkbox>
  );
}
