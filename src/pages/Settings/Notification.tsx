import { HStack, Stack, Text, VStack } from "@chakra-ui/react";
import CustomCheckbox from "@/components/CustomCheckbox";
import ButtonArrow from "@/components/ButtonArrow";

export default function SettingsNotification() {
  return (
    <Stack
      w={"100%"}
      bg={"#ffffff"}
      p={"20px"}
      rounded={"md"}
      mt={"10px"}
      spacing={4}
    >
      <HStack>
        <Text variant="h6">Notification</Text>
      </HStack>

      <VStack w={"100%"} alignItems={"start"} spacing={4}>
        <CustomCheckbox text="I want to know who view my consultation package." />
        <CustomCheckbox text="I want to know who write a review for me." />
        <CustomCheckbox text="I want to know who commented/reply a review." />
        <CustomCheckbox text="I want to receive email notification for every order" />
      </VStack>

      <ButtonArrow ml="auto" my="20px">
        Save Change
      </ButtonArrow>
    </Stack>
  );
}
