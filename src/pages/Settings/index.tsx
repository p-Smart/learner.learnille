import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import useSetObjectState from "@/hooks/useSetObjectState";
import ButtonArrow from "@/components/ButtonArrow";
import TextField from "@/components/TextField";
import InputWrapper from "@/components/InputWrapper";
import SettingsChangePassword from "./ChangePassword";
import SettingsNotification from "./Notification";
import DashboardLayout from "@/layout/DashboardLayout";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { APP_URLS } from "@/utils/constants";
import useFileSrc from "@/hooks/useFileSrc";
import Selectable from "@/components/Selectable";

export default function Settings() {
  const initialData = {
    fname: "",
    lname: "",
    skills: [],
    objectives: [],
    profileImageFile: null,
  };

  const [data, setData] = useState(initialData);
  const setDatum = useSetObjectState(setData);

  const { src: profileImage, onFileChange: onProfileImageFileChange } =
    useFileSrc({
      file: data.profileImageFile,
      setFile: (file) => setDatum("profileImageFile", file),
    });

  const skillsList = [
    "Product Design",
    "Corel Draw",
    "UI/UX",
    "Forex Trading",
    "Brand Design",
    "Coding",
    "Photography",
    "Love Message",
    "Marketing",
    "Cooking",
  ];
  const objectivesList = [
    "Understand User-Centered Design",
    "Develop Problem-Solving Skills",
    "Understand Market and Business Aspects",
    "Learn Material and Manufacturing Knowledge",
    "Enhance Aesthetic Sensibility",
    "Master Design Tools and Techniques",
  ];

  const onSubmit = () => {};

  return (
    <DashboardLayout>
      <Stack w={"100%"} pr={{ base: "0px", lg: "170px" }}>
        <HStack
          py="20px"
          px={{ base: "20px", lg: "30px" }}
          gap="20px"
          justifyContent="space-between"
          bgColor="white"
          rounded="md"
        >
          <Flex gap="20px" alignItems="center">
            <Box
              as="label"
              pos="relative"
              w="70px"
              h="70px"
              htmlFor="profile-image"
            >
              <Image
                src={
                  profileImage ||
                  "/assets/images/dummy/fb143adb20a5a02eb1c2fab6f275b0cc.png"
                }
                w="inherit"
                h="inherit"
                objectFit="cover"
                borderRadius="50%"
                border="3px solid"
                borderColor="secondary.main"
                flexShrink="0"
              />
              <input
                type="file"
                id="profile-image"
                onChange={onProfileImageFileChange}
                style={{ display: "none" }}
              />
              <IconButton
                variant="unstyle"
                icon={<FiEdit3 size="22" />}
                size=""
                aria-label="change-profile-image"
                pos="absolute"
                bottom="0px"
                right="-10px"
                pointerEvents="none"
              />
            </Box>
            <Text fontSize="1.1rem">
              <b>Catherine Blessing</b>
            </Text>
          </Flex>
          <ButtonArrow as={Link} to={APP_URLS.PUBLIC + "/tutor"}>
            Become an Instructor
          </ButtonArrow>
        </HStack>
        <Box
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          width="100%"
          height="100%"
        >
          <Stack
            w="100%"
            bgColor="white"
            alignItems={{ base: "center", md: "start" }}
            p="20px"
            rounded="md"
          >
            <Flex
              w={"100%"}
              display={{ base: "block", md: "none" }}
              mb={"1rem"}
            >
              <Text variant="h6">Account Settings</Text>
            </Flex>
            <Flex
              w={"100%"}
              flexDirection={{ base: "column-reverse", md: "row" }}
              gap={{ base: 6, md: 4 }}
              alignItems={"start"}
            >
              <Stack w={"100%"} alignItems={"start"} spacing={6}>
                <Flex display={{ base: "none", md: "block" }}>
                  <Text variant="h6">Account Settings</Text>
                </Flex>

                <Stack w="100%" alignItems="start" gap="20px">
                  <Flex
                    w={"100%"}
                    gap={{ base: "24px", md: "16px" }}
                    flexDirection={["column", "column", "row", "row"]}
                  >
                    <InputWrapper title="First name">
                      <TextField
                        placeholder="Enter your first name"
                        value={data.fname}
                        onChange={(e) => setDatum("fname", e.target.value)}
                      />
                    </InputWrapper>
                    <InputWrapper title="Last name">
                      <TextField
                        placeholder="Enter your last name"
                        value={data.lname}
                        onChange={(e) => setDatum("lname", e.target.value)}
                      />
                    </InputWrapper>
                  </Flex>

                  <InputWrapper title="What skill interest you?">
                    <HStack gap="10px" flexWrap="wrap">
                      {skillsList.map((item, idx) => (
                        <Selectable
                          key={idx + item}
                          label={item}
                          value={item}
                          selected={data.skills.includes(item)}
                          set={(val) => {
                            setDatum(
                              "skills",
                              data.skills.includes(val)
                                ? data.skills.filter((skill) => skill !== val)
                                : [...data.skills, val]
                            );
                          }}
                        />
                      ))}
                    </HStack>
                  </InputWrapper>

                  <InputWrapper title="What are your objectives?">
                    <HStack gap="10px" flexWrap="wrap">
                      {objectivesList.map((item, idx) => (
                        <Selectable
                          key={idx + item}
                          label={item}
                          value={item}
                          selected={data.objectives.includes(item)}
                          set={(val) => {
                            setDatum(
                              "objectives",
                              data.objectives.includes(val)
                                ? data.objectives.filter(
                                    (objective) => objective !== val
                                  )
                                : [...data.objectives, val]
                            );
                          }}
                        />
                      ))}
                    </HStack>
                  </InputWrapper>
                </Stack>
              </Stack>
            </Flex>

            <ButtonArrow ml="auto" my="20px">
              Save Change
            </ButtonArrow>
          </Stack>
        </Box>

        <Grid
          w={"100%"}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={"10px"}
        >
          <GridItem>
            <SettingsChangePassword />
          </GridItem>
          <GridItem>
            <SettingsNotification />
          </GridItem>
        </Grid>
      </Stack>
    </DashboardLayout>
  );
}
