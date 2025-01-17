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
import { PiClock, PiFile, PiPlayCircle, PiPlayFill } from "react-icons/pi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export interface ILecture {
  title: string;
  sizeDuration: string;
  type: "video" | "doc" | any;
}

export interface ISubSection {
  id: string | number;
  title: string;
  lectures: ILecture[];
  duration: {
    h: number;
    m: number;
  };
}

const SubSection: FC<ISubSection> = ({ title, lectures, duration }) => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Flex
        w="100%"
        p={{ base: "10px", lg: "20px" }}
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
        flexWrap="wrap"
      >
        <Button
          variant="link"
          color="primary.main"
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
          <Text fontSize="1.1rem" fontWeight="600">
            {title}
          </Text>
        </Button>

        <Flex
          gap="10px"
          alignItems="center"
          flexWrap="wrap"
          sx={{
            "& .icon": { fontSize: "24px" },
            "& .text": { color: "blackAlpha.800" },
          }}
        >
          <IconText Icon={PiPlayCircle} text={`${lectures.length} lectures`} />
          <IconText
            Icon={PiClock}
            text={`${duration.h}hrs ${String(duration.m).padStart(2, "0")}m`}
          />
        </Flex>
      </Flex>
      <Divider />
      <Collapse in={open}>
        <Stack p={{ base: "10px", lg: "20px" }} gap="20px">
          {lectures.map((lecture, k) => (
            <Flex
              key={k}
              alignItems="center"
              justifyContent="space-between"
              gap="30px"
            >
              <IconText
                gap="10px"
                text={lecture.title}
                Icon={
                  <Checkbox
                    sx={{
                      "& .chakra-checkbox__control[data-checked]": {
                        bg: "primary.main",
                        borderColor: "primary.main",
                      },
                      "& .chakra-checkbox__control": {
                        borderColor: "primary.main",
                      },
                    }}
                  />
                }
                sx={{
                  "& .icon": { color: "black" },
                  "& .text": { color: "blackAlpha.800" },
                }}
              />

              <IconText
                gap="10px"
                text={
                  <Text color="blackAlpha.700">{lecture.sizeDuration}</Text>
                }
                Icon={lecture.type === "video" ? PiPlayFill : PiFile}
                sx={{
                  "& .icon": { color: "black" },
                }}
              />
            </Flex>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default SubSection;
