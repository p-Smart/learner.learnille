import { Box, Stack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const moveUpDown = keyframes`
  0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
  25% { transform: translateY(-10px) scale(1.1) rotate(10deg); }
  50% { transform: translateY(0) scale(1) rotate(0deg); }
  75% { transform: translateY(10px) scale(0.9) rotate(-10deg); }
`;

const LogoLoader = ({ show }: { show: boolean }) => {
  return (
    <Stack
      position="fixed"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      display={show ? "flex" : "none"}
      zIndex={999}
      bg="gray.50"
    >
      <Box animation={`${moveUpDown} 2s infinite ease-in-out`}>
        <Box
          as="img"
          src="/assets/images/logos/Main icon.png"
          objectFit="contain"
          sx={{
            width: {
              base: 132 / 2.3,
              sm: 132 / 2,
              md: 132 / 1.6,
              lg: 132 / 1.3,
            },
            height: {
              base: 172 / 2.3,
              sm: 172 / 2,
              md: 172 / 1.6,
              lg: 172 / 1.3,
            },
          }}
        />
      </Box>
    </Stack>
  );
};

export default LogoLoader;
