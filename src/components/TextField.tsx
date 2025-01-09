import {
  IconButton,
  Input,
  InputGroup,
  InputGroupProps,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export interface ITextField extends InputProps {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  containerProps?: InputGroupProps;
}

const TextField: FC<ITextField> = ({
  startAdornment,
  endAdornment,
  containerProps,
  type,
  ...inputProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Prevent invalid input for positiveOnly or type="number"
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const invalidKeys = ["e", "E", "+", "-"];
    if (type === "number" && (invalidKeys.includes(e.key) || e.key === " ")) {
      e.preventDefault();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "number" && e.target.value) {
      // Remove any non-numeric or negative values
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
  };

  return (
    <InputGroup
      transition="ease 0.1s"
      size="md"
      border="1px solid"
      borderColor="blackAlpha.200"
      _focusWithin={{
        borderColor: "primary.main",
        borderWidth: "2px",
      }}
      borderRadius="8px"
      padding="10px"
      w="100%"
      bgColor="white"
      {...containerProps}
    >
      {startAdornment}
      <Input
        ml="10px"
        borderRadius="0"
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        {...inputProps}
      />
      {type === "password" && (
        <InputRightElement>
          <IconButton
            variant="unstyled"
            aria-label={showPassword ? "Hide password" : "Show password"}
            icon={showPassword ? <FiEyeOff size="18" /> : <FiEye size="18" />}
            onClick={togglePasswordVisibility}
          />
        </InputRightElement>
      )}
      {endAdornment}
    </InputGroup>
  );
};

export default TextField;
