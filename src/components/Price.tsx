import { Text, TextProps } from "@chakra-ui/react";

interface IPrice extends TextProps {
  current: string;
  old: string;
  currentColor?: string;
}

const Price = ({ current, old, currentColor, ...rest }: IPrice) => {
  return (
    <Text as="span" {...rest}>
      <Text as="b" {...(currentColor && { color: currentColor })}>
        ${Number(current).toFixed(2)}
      </Text>
      &nbsp;
      <Text as="sub" color="blackAlpha.700" textDecor="line-through">
        ${Number(old).toFixed(2)}
      </Text>
    </Text>
  );
};

export default Price;
