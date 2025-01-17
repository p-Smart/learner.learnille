import {
  Button,
  Checkbox,
  Collapse,
  Divider,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import IconText from "../IconText";
import { PiFolderOpen, PiPlayCircle } from "react-icons/pi";
import { LuClock3 } from "react-icons/lu";
import SubSection, { ISubSection } from "./SubSection";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export interface ISection {
  id: string | number;
  title: string;
  price: string;
  old_price: string;
  count: number;
  subSections: ISubSection[];
  duration: {
    h: number;
    m: number;
  };
  lastItem?: boolean;
}

const Section: FC<ISection> = ({
  count,
  subSections,
  duration,
  title,
  price,
  old_price,
  id,
  lastItem,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Stack px={{ base: "10px", lg: "20px" }}>
        <Flex
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          flexWrap="wrap"
        >
          <Button
            variant="link"
            leftIcon={
              open ? (
                <MdKeyboardArrowDown size={28} />
              ) : (
                <MdKeyboardArrowUp size={28} />
              )
            }
            onClick={() => {
              if (open) {
                setOpen(false);
                return;
              }
              setOpen(true);
            }}
          >
            <Text fontSize="1.2rem">
              <b>Section {String(count).padStart(2, "0")}:</b>&nbsp;{title}
            </Text>
          </Button>
        </Flex>
        {open && <Divider mt="10px" />}
      </Stack>
      <Collapse in={open}>
        <Flex
          p={{ base: "10px", lg: "20px" }}
          gap="10px"
          alignItems="center"
          flexWrap="wrap"
        >
          <IconText
            Icon={PiFolderOpen}
            text={`${subSections.length} Sub sections`}
          />
          <IconText
            Icon={PiPlayCircle}
            text={`${subSections.reduce(
              (acc, { lectures }) => acc + lectures.length,
              0
            )} lectures`}
          />
          <IconText
            Icon={LuClock3}
            text={`${duration.h}h ${String(duration.m).padStart(2, "0")}m`}
          />
        </Flex>
      </Collapse>
      {!lastItem && <Divider />}
      <Collapse in={open}>
        {subSections.map((subsection, k) => (
          <SubSection key={k} {...subsection} />
        ))}
      </Collapse>
    </Stack>
  );
};

export default Section;
