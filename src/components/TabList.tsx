import {
  Box,
  IconButton,
  TabList as ChakraTabList,
  TabListProps,
  Tab,
} from "@chakra-ui/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRef, useState, useEffect } from "react";

interface ITabList extends TabListProps {}

const TabList = ({ children, ...props }) => {
  const tabListRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  // Check if left or right scroll is possible
  const checkScroll = () => {
    const container = tabListRef.current;
    if (container) {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }
  };

  // Initialize and add resize listener
  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  return (
    <Box position="relative" overflow="hidden">
      {showLeftButton && (
        <IconButton
          variant="unstyle"
          aria-label="scroll left"
          icon={<MdKeyboardArrowLeft size="24" />}
          position="absolute"
          left="0"
          top="0"
          h="calc(100% - 5px)"
          zIndex="1"
          bg="white"
          onClick={() => {
            tabListRef.current.scrollLeft -= 100;
            checkScroll();
          }}
        />
      )}

      <ChakraTabList
        ref={tabListRef}
        overflowX="auto"
        scrollBehavior="smooth"
        pr="30px"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        onScroll={checkScroll}
        {...props}
      >
        {children}
        {/* <Tab></Tab> */}
      </ChakraTabList>

      {showRightButton && (
        <IconButton
          variant="unstyle"
          aria-label="scroll right"
          icon={<MdKeyboardArrowRight size="24" />}
          position="absolute"
          right="0"
          top="0"
          h="calc(100% - 5px)"
          zIndex="1"
          bg="white"
          onClick={() => {
            tabListRef.current.scrollLeft += 100;
            checkScroll();
          }}
        />
      )}
    </Box>
  );
};

export default TabList;
