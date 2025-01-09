import DashboardLayout from "@/layout/DashboardLayout";
import { Stack, Text } from "@chakra-ui/react";

function PageUnderConstruction() {
  return (
    <DashboardLayout>
      <Stack textAlign="center" m="auto">
        <Text variant="h2">404</Text>
        <Text textAlign="center" fontSize="2rem">
          Page Not Found
        </Text>
      </Stack>
    </DashboardLayout>
  );
}

export default PageUnderConstruction;
