import { HStack, Stack } from "@chakra-ui/react";
import useGlobalStore from "@/stores";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const showMobileSidebar = useGlobalStore((state) => state.showMobileSidebar);
  return (
    <HStack
      alignItems="flex-start"
      p="20px"
      bgColor="#f5f8ff"
      w="100%"
      position="relative"
      minH="100vh"
      gap="0"
      maxW="2000px"
      mx="auto"
    >
      <Sidebar />
      <Topbar />
      <Stack
        filter={showMobileSidebar ? "blur(2px)" : "unset"}
        pointerEvents={showMobileSidebar ? "none" : "auto"}
        mt={{ base: "70px", md: "80px" }}
        pl={{ lg: "240px" }}
        pt="10px"
        w="100%"
        minH="calc(100vh - 126px)"
      >
        {children}
      </Stack>
    </HStack>
  );
}

export default DashboardLayout;
