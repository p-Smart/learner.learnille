import { Button, Divider, Flex, Stack } from "@chakra-ui/react";
import Notification from "./Notification";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardLayout from "@/layout/DashboardLayout";

const notifications = [
  {
    title: "“ATS” left a review",
    type: "review",
    content:
      "Many individual fail to come to the reality that it isn't enough just to be knowledge with random knowledge but having a mentor take you by hand is something eve...",
    dateTime: "Jul. 17, 2022 | 19 : 50 AM",
  },
  {
    title: "How do I sell a sculpture that I made?",
    type: "alert",
    content:
      "Many individual fail to come to the reality that it isn't enough just to be knowledge with random knowledge but having a mentor take you by hand is something eve...",
    dateTime: "Jul. 17, 2022 | 19 : 50 AM",
  },
  {
    title: "“ATS” left a review",
    type: "review",
    content:
      "Many individual fail to come to the reality that it isn't enough just to be knowledge with random knowledge but having a mentor take you by hand is something eve...",
    dateTime: "Jul. 17, 2022 | 19 : 50 AM",
  },
  {
    title: "How do I sell a sculpture that I made?",
    type: "alert",
    content:
      "Many individual fail to come to the reality that it isn't enough just to be knowledge with random knowledge but having a mentor take you by hand is something eve...",
    dateTime: "Jul. 17, 2022 | 19 : 50 AM",
  },
  {
    title: "“ATS” left a review",
    type: "review",
    content:
      "Many individual fail to come to the reality that it isn't enough just to be knowledge with random knowledge but having a mentor take you by hand is something eve...",
    dateTime: "Jul. 17, 2022 | 19 : 50 AM",
  },
  {
    title: "How do I sell a sculpture that I made?",
    type: "alert",
    content:
      "Many individual fail to come to the reality that it isn't enough just to be knowledge with random knowledge but having a mentor take you by hand is something eve...",
    dateTime: "Jul. 17, 2022 | 19 : 50 AM",
  },
];

const Notifications = () => {
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
          {notifications.map((notification, idx) => (
            <React.Fragment key={idx + notification.title}>
              <Notification {...notification} />
              {notifications.length !== idx + 1 ? <Divider /> : null}
            </React.Fragment>
          ))}
        </Stack>
      </Stack>
    </DashboardLayout>
  );
};

export default Notifications;
