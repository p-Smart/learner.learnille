import { Button, Divider, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Activity from "./Activity";
import DashboardLayout from "@/layout/DashboardLayout";

const activities = [
  {
    title: "How to land your first gig as a developer",
    completedSessions: 2,
    totalSessions: 5,
    date: "Wed, Nov. 14 2023",
    time: "10:00pm - 12:00pm",
  },
  {
    title: "How to land your first gig as a developer",
    completedSessions: 2,
    totalSessions: 5,
    date: "Wed, Nov. 14 2023",
    time: "10:00pm - 12:00pm",
  },

  {
    title: "How to land your first gig as a developer",
    completedSessions: 2,
    totalSessions: 5,
    date: "Wed, Nov. 14 2023",
    time: "10:00pm - 12:00pm",
  },

  {
    title: "How to land your first gig as a developer",
    completedSessions: 2,
    totalSessions: 5,
    date: "Wed, Nov. 14 2023",
    time: "10:00pm - 12:00pm",
  },
];

const Activities = () => {
  const location = useLocation();
  const tabs = [
    {
      title: "Notification",
      route: "/notifications",
    },
    {
      title: "Activity",
      route: "/notifications/activity",
    },
  ];

  return (
    <DashboardLayout>
      <Stack bgColor="white" shadow="sm" rounded="lg" p="20px">
        <Flex mx="auto" gap="20px">
          {tabs.map((tab, idx) => (
            <Button
              py={{ base: "15px", md: "25px" }}
              px={{ base: "20px", md: "30px" }}
              variant="outline"
              key={idx + tab.title}
              as={Link}
              to={tab.route}
              {...(location.pathname !== tab.route && {
                border: "none",
                color: "black",
              })}
            >
              {tab.title}
            </Button>
          ))}
        </Flex>

        <Stack mt="20px">
          {activities.map((activity, idx) => (
            <React.Fragment key={idx + activity.title}>
              <Activity {...activity} />
              {activities.length !== idx + 1 ? <Divider /> : null}
            </React.Fragment>
          ))}
        </Stack>
      </Stack>
    </DashboardLayout>
  );
};

export default Activities;
