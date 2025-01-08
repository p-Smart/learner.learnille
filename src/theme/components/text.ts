import { ThemeOverride } from "@chakra-ui/react";

const Text = {
  baseStyle: {},
  variants: {
    h1: {
      fontWeight: "700",
      fontSize: "56px",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: "700",
      fontSize: { base: "28px", md: "32px", lg: "40px", xl: "48px" },
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: "700",
      fontSize: { base: "26px", md: "30px", lg: "36px", xl: "40px" },
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: "700",
      fontSize: { base: "26px", md: "28px", lg: "32px" },
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: "700",
      fontSize: { base: "20px", md: "24px" },
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: 1.2,
    },
  },
} satisfies ThemeOverride["components"]["Text"];

export default Text;
