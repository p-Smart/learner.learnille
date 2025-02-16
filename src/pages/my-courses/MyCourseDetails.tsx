import MainLayout from "../../layout/DashboardLayout";
import TabsView from "../../components/utility/Tabs";
import Comment from "./Comment";

import {
  Stack,
  Button,
  Flex,
  Box,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import Section from "@/components/Curriculum/Section";

const tabOptions = ["Description", "Lesson Note", "Attached File", "Comments"];

const Description = () => (
  <Box>
    <Heading fontSize="20px" py="1rem" color="#222021">
      Lecture Description
    </Heading>
    <Text fontSize="14px" color="#4E5566" mb="2rem">
      Lorem ipsum dolor sit amet consectetur. Venenatis scelerisque urna et
      lectus amet orci ac nibh enim. Lorem urna dolor pellentesque facilisi erat
      aliquet gravida. Sed enim nisl viverra molestie egestas venenatis
      fermentum. Lacus sollicitudin tellus mi suspendisse. Venenatis cras nisl
      eu sapien lacus donec condimentum morbi id. Etiam facilisi habitant
      suspendisse at leo viverra amet et feugiat. Fames eu imperdiet integer
      proin arcu. Ut dignissim est enim venenatis odio dictum sed dolor. Morbi
      vel ut vitae neque nec id et faucibus. Facilisi ipsum aliquam nibh
      ullamcorper lorem nisi. Eget volutpat nec praesent tellus. Nulla in nulla
      sed sed eget urna laoreet egestas lectus. Tempus aliquet blandit egestas
      quis tristique odio ut id. Quam aliquam lectus amet vitae elit in risus.
      Commodo mattis platea diam tellus orci. Amet maecenas morbi vel quam
      congue aliquam tincidunt
    </Text>
  </Box>
);

const LessonNote = () => (
  <Box>
    <Flex justifyContent="space-between">
      <Heading fontSize="20px" py="1rem" color="#222021">
        Lecture Note
      </Heading>
      <Button bg="none" color="brand.primary" fontSize="12px" fontWeight="thin">
        <Image src="/assets/icons/DownloadSimple.svg" mr="4px" alt="download" />
        DownLoad Notes
      </Button>
    </Flex>
    <Text fontSize="14px" color="#4E5566" mb="2rem">
      Lorem ipsum dolor sit amet consectetur. Venenatis scelerisque urna et
      lectus amet orci ac nibh enim. Lorem urna dolor pellentesque facilisi erat
      aliquet gravida. Sed enim nisl viverra molestie egestas venenatis
      fermentum. Lacus sollicitudin tellus mi suspendisse. Venenatis cras nisl
      eu sapien lacus donec condimentum morbi id. Etiam facilisi habitant
      suspendisse at leo viverra amet et feugiat. Fames eu imperdiet integer
      proin arcu. Ut dignissim est enim venenatis odio dictum sed dolor. Morbi
      vel ut vitae neque nec id et faucibus. Facilisi ipsum aliquam nibh
      ullamcorper lorem nisi. Eget volutpat nec praesent tellus. Nulla in nulla
      sed sed eget urna laoreet egestas lectus. Tempus aliquet blandit egestas
      quis tristique odio ut id. Quam aliquam lectus amet vitae elit in risus.
      Commodo mattis platea diam tellus orci. Amet maecenas morbi vel quam
      congue aliquam tincidunt
    </Text>
  </Box>
);

const Attached = () => (
  <Stack>
    <Box mb="4rem">
      <Box>
        <Text py=".5rem" fontSize="14px">
          Attached Files (01)
        </Text>
        <Flex
          bg="brand.white"
          alignItems="center"
          justifyContent="space-between"
          rounded="lg"
          p="1rem"
        >
          <Box display="flex" gap="1rem" alignItems="center">
            <Image src="/assets/icons/FileText.svg" />
            <Flex direction="column">
              <Text color="#222021" as="span" fontSize="14px" fontWeight="bold">
                Donec id diam et lacus pharet.pdf
              </Text>
              <Text as="span" fontSize="12px">
                12 MB
              </Text>
            </Flex>
          </Box>
          <Box>
            <Button
              bg="brand.primary"
              h="42px"
              fontSize="12px"
              color="brand.white"
            >
              Download File
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Text py=".5rem" fontSize="14px">
          Attached Files (01)
        </Text>
        <Flex
          bg="brand.white"
          justifyContent="space-between"
          alignItems="center"
          rounded="lg"
          p="1rem"
        >
          <Box display="flex" gap="1rem" alignItems="center">
            <Image src="/assets/icons/FileText.svg" />
            <Flex direction="column">
              <Text color="#222021" as="span" fontSize="14px" fontWeight="bold">
                Donec id diam et lacus pharet.pdf
              </Text>
              <Text as="span" fontSize="12px">
                12 MB
              </Text>
            </Flex>
          </Box>
          <Box>
            <Button
              bg="brand.primary"
              h="42px"
              fontSize="12px"
              color="brand.white"
            >
              Download File
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  </Stack>
);

const Comments = () => (
  <Box>
    <Heading fontSize="20px" py="1.5rem" color="#222021">
      Comments (154)
    </Heading>
    <Comment />
    <Comment />
    <Comment />
  </Box>
);

const tabView = [
  <Description key="desc" />,
  <LessonNote key="lesson" />,
  <Attached key="attached" />,
  <Comments key="comment" />,
];

export const MyCourseDetails = () => {
  let subSection = {
    title: "Getting Started with graphics design",
    lectures: [
      {
        title: `What's is Webflow?`,
        type: "video",
        sizeDuration: "07:31",
      },
      {
        title: `What's is Webflow?`,
        type: "video",
        sizeDuration: "07:31",
      },
      {
        title: `Webflow Terms & Conditions`,
        type: "doc",
        sizeDuration: "5.3 MB",
      },
      {
        title: `What's is Webflow?`,
        type: "video",
        sizeDuration: "07:31",
      },
      {
        title: `What's is Webflow?`,
        type: "video",
        sizeDuration: "07:31",
      },
    ],
    duration: {
      h: 4,
      m: 50,
    },
  };
  let section = {
    title: "Introduction to UX Writing",
    price: "14",
    old_price: "26",
    duration: { h: 19, m: 27 },
    subSections: Array.from({ length: 3 }).map((_, id) => ({
      ...subSection,
      id,
    })),
  };
  let sections = Array.from({ length: 5 }).map((_, id) => ({ ...section, id }));

  return (
    <MainLayout>
      <Flex gap="10px" flexDir={{ base: "column", xl: "row" }}>
        <Stack flex="1">
          <Box width="100%" height="400px">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=BK07WUEMvPk"
              width="100%"
              height="100%"
              controls
            />
          </Box>
          <TabsView tab={tabOptions} view={tabView} />
        </Stack>
        <Stack w={{ base: "100%", xl: "500px" }} maxW="100%">
          <Stack
            bgColor="white"
            border="none"
            p={{ base: "20px 0", md: "30px 0" }}
            borderRadius="12px"
          >
            {sections.map((section, k) => (
              <Section
                key={k + section.id}
                count={k + 1}
                {...section}
                lastItem={k === sections.length - 1}
              />
            ))}
          </Stack>
        </Stack>
      </Flex>
    </MainLayout>
  );
};

export default MyCourseDetails;
