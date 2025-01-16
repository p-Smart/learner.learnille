import { Stack, Divider, Text, Grid, GridItem } from "@chakra-ui/react";
import CertificateCard from "@/components/cards/CertificateCard";
import DashboardLayout from "@/layout/DashboardLayout";

const MyCerificate = () => {
  const certificates = [
    {
      id: "1",
      title: "Hands-On Guide to Penetration Testing and Ethical Hacking",
      image: "/assets/images/dummy/d4c35c161690c3664c30be8291911686.png",
      download_route: "",
      view_route: "",
    },
    {
      id: "2",
      title: "Cloud Security Essentials: Protecting Data in the Cloud",
      image: "/assets/images/dummy/d4c35c161690c3664c30be8291911686.png",
      download_route: "",
      view_route: "",
    },
    {
      id: "3",
      title: "Introduction to Data Cleaning and Visualization with Python",
      image: "/assets/images/dummy/d4c35c161690c3664c30be8291911686.png",
      download_route: "",
      view_route: "",
    },
    {
      id: "4",
      title: "Smart Contracts in Action: Building Your First Ethereum Contract",
      image: "/assets/images/dummy/d4c35c161690c3664c30be8291911686.png",
      download_route: "",
      view_route: "",
    },
  ];

  return (
    <DashboardLayout>
      <Stack bgColor="white">
        <Stack px="20px" pt="20px">
          <Text fontSize="1.2rem" fontWeight="600">
            My certificates
          </Text>
        </Stack>
        <Divider my="20px" />
        <Grid
          templateColumns="repeat(auto-fit, minmax(260px, 1fr))"
          gap="10px"
          px="20px"
          pb="20px"
        >
          {certificates.map((certificate, idx) => (
            <GridItem key={certificate.id + idx}>
              <CertificateCard
                title={certificate.title}
                image={certificate.image}
                download_route={certificate.download_route}
                view_route={certificate.view_route}
              />
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </DashboardLayout>
  );
};

export default MyCerificate;
