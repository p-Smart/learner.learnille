import { Box, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FC } from "react";

interface ILogo {
  variant?: "white" | "colored";
  size?: number;
  link?: string;
}

const Logo: FC<ILogo> = ({ variant, size = 1, link="/" }) => {
  const baseWidth = 718;
  const baseHeight = 172;

  const scaledWidth = baseWidth * size;
  const scaledHeight = baseHeight * size;

  return (
    <IconButton
      aria-label="logo"
      as={Link}
      to={link}
      variant="unstyled"
      minW={0}
      h={"unset"}
      flexShrink={0}
    >
      <Box
        as="img"
        src={
          variant === "white"
            ? "/assets/images/logos/Main logo white.png"
            : "/assets/images/logos/Main Logo 1.svg"
        }
        sx={{
          width: {
            base: scaledWidth / 7,
            sm: scaledWidth / 6.5,
            md: scaledWidth / 5.5,
          },
          height: {
            base: scaledHeight / 7,
            sm: scaledHeight / 6.5,
            md: scaledHeight / 5.5,
          },
          objectFit: "contain",
        }}
      />
    </IconButton>
  );
};

export default Logo;
