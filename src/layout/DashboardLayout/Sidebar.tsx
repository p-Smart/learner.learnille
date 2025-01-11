import { Box, VStack, Divider, Stack } from "@chakra-ui/react";
import { MdOutlineContactSupport, MdSettings } from "react-icons/md";
import { BiSignal4 } from "react-icons/bi";
import {
  PiChats,
  PiGraduationCap,
  PiPrinter,
  PiStackDuotone,
} from "react-icons/pi";
import useGlobalStore from "@/stores";
import { useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import Logo from "@/components/Logo";
import NavItem from "./nav-item";
import NavUser from "./NavUser";
import { IoDocumentOutline } from "react-icons/io5";

const navItemObj = [
  { pathName: "Overview", iconAs: BiSignal4, path: "/overview" },
  {
    pathName: "My Consultations",
    iconAs: PiStackDuotone,
    path: "/consultations",
  },
  { pathName: "My Courses", iconAs: IoDocumentOutline, path: "/my-courses" },
  { pathName: "Chat", iconAs: PiChats, path: "/chat" },
  {
    pathName: "My Certificate",
    iconAs: PiGraduationCap,
    path: "/my-certificate",
  },
  {
    pathName: "Purchase History",
    iconAs: PiPrinter,
    path: "/purchase-history",
  },
];

const navItemS = [
  { pathName: "Settings", iconAs: MdSettings, path: "/settings" },
  { pathName: "Support", iconAs: MdOutlineContactSupport, path: "" },
];

function Sidebar() {
  const showMobileSidebar = useGlobalStore((state) => state.showMobileSidebar);
  const setGlobalState = useGlobalStore((state) => state.setGlobalState);
  const sidebarRef = useRef(null);

  useClickOutside({
    ref: [sidebarRef],
    handler: () => setGlobalState("showMobileSidebar", false),
  });

  const isActive = (path: string) => {
    if (window.location.href.includes(path) && path !== "") {
      return true;
    } else {
      false;
    }
  };

  return (
    <VStack
      ref={sidebarRef}
      justifyContent="space-between"
      w="230px"
      bgColor="primary.main"
      pb="20px"
      position="fixed"
      transition="0.5s"
      overflowX="hidden"
      rounded="10px"
      color="white"
      whiteSpace="nowrap"
      zIndex="10"
      h="750px"
      maxH="calc(100vh - 40px)"
      left={{ base: showMobileSidebar ? "0" : "-230px", lg: "unset" }}
    >
      <Box w="100%" display="flex" flexDirection="column" h="100%">
        <Box p="20px">
          <Logo variant="white" size={0.8} link="/overview" />
        </Box>

        <Stack flex="1" justifyContent="space-between" gap="50px" mt="20px">
          <Stack gap="0">
            {navItemObj.map((item, i) => (
              <NavItem
                key={i}
                pathName={item.pathName}
                isActive={isActive(item.path)}
                iconAs={item.iconAs}
                path={item.path}
              />
            ))}
          </Stack>

          <Stack gap="0">
            {navItemS.map((item, i) => (
              <NavItem
                key={i}
                pathName={item.pathName}
                isActive={isActive(item.path)}
                iconAs={item.iconAs}
                path={item.path}
              />
            ))}
          </Stack>
        </Stack>

        <Box mt={"3rem"}>
          <Divider borderColor="white" my="20px" />

          <NavUser />
        </Box>
      </Box>
    </VStack>
  );
}

export default Sidebar;
