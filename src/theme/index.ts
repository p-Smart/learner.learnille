import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import palette from "./palette";
import Button from "./components/button";
import Input from "./components/input";
import Text from "./components/text";

const theme = extendTheme({
  colors: palette,
  breakpoints: {
    base: "0px",
    sm: "450px",
    md: "625px",
    lg: "991px",
    xl: "1200px",
    "2xl": "1440px",
  },
  fonts: {
    body: "Proxima Nova",
    heading: "Proxima Nova",
    mono: "Proxima Nova",
  },
  components: {
    Text,
    Button: Button as any,
    Input,
    Divider: {
      baseStyle: {
        borderColor: "blackAlpha.300",
      },
    },
    PinInput: {
      defaultProps: {
        focusBorderColor: "primary.main",
        size: "lg",
      },
    },
    TextArea: {
      variant: "flushed",
    },
  },
} as ThemeConfig);

export default theme;
