import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ButtonArrow from "@/components/ButtonArrow";
import useSetObjectState from "@/hooks/useSetObjectState";
import InputWrapper from "@/components/InputWrapper";
import TextField from "@/components/TextField";

export default function SettingsChangePassword() {
  const onSubmit = () => {};

  const initialData = {
    old_pass: "",
    new_pass: "",
    confirm_new_pass: "",
  };
  const [data, setData] = useState(initialData);
  const setDatum = useSetObjectState(setData);

  return (
    <Box
      as="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      width="100%"
    >
      <Stack
        w={"100%"}
        bg={"#ffffff"}
        p={"20px"}
        rounded={"md"}
        mt={"10px"}
        spacing={4}
      >
        <HStack>
          <Text variant="h6">Change Password</Text>
        </HStack>
        <VStack w={"100%"} alignItems={"start"} spacing={{ base: 6, md: 4 }}>
          <InputWrapper title="Current Password">
            <TextField
              placeholder="Password"
              type="password"
              value={data.old_pass}
              onChange={(e) => setDatum("old_pass", e.target.value)}
            />
          </InputWrapper>
          <InputWrapper title="New Password">
            <TextField
              placeholder="Password"
              type="password"
              value={data.new_pass}
              onChange={(e) => setDatum("new_pass", e.target.value)}
            />
          </InputWrapper>
          <InputWrapper title="Confirm Password">
            <TextField
              placeholder="Password"
              type="password"
              value={data.confirm_new_pass}
              onChange={(e) => setDatum("confirm_new_pass", e.target.value)}
            />
          </InputWrapper>
        </VStack>

        <ButtonArrow ml="auto" my="20px">
          Save Change
        </ButtonArrow>
      </Stack>
    </Box>
  );
}
