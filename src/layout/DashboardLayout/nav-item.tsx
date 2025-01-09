import { Box, Button, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import useGlobalStore from "@/stores";
import { btnAction } from "@/utils/buttons";

interface NavItemProps {
  pathName: string;
  isActive: boolean | undefined;
  iconAs: IconType;
  path: string;
  onClick?: () => void | undefined;
}

export default function NavItem({
  pathName,
  isActive,
  iconAs,
  path,
  onClick,
}: NavItemProps) {
  const setGlobalState = useGlobalStore((state) => state.setGlobalState);

  return (
    <Button
      variant="link"
      {...btnAction(path, () => {
        setGlobalState("showMobileSidebar", false);
        onClick && onClick();
      })}
      pl="20px"
      my="0px"
      py="10px"
      bg={isActive ? "#C7D0FD" : "primary.main"}
      color={isActive ? "#1D2026" : "white"}
      _hover={{ bg: "#C7D0FD", color: "#1D2026" }}
      alignItems="center"
      justifyContent="flex-start"
      gap="10px"
      borderRadius="none"
    >
      <Box as={iconAs} color="inherit" />
      <Text>{pathName}</Text>
    </Button>
  );
}
