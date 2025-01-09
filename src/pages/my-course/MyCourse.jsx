import React from "react";
import MainLayout from "../../layout/DashboardLayout";
import CoursePageLayout from "../../layout/CoursePageLayout.jsx";
import TabsView from "../../components/utility/Tabs.jsx";
import Completed from "./part/tab/Completed.jsx";
import OnGoing from "./part/tab/OnGoingCourse.jsx";

const tabOptions = ["Ongoing course", "Completed course"];

const tabView = [<OnGoing key="ongoing" />, <Completed key="completed" />];

const MyCourse = () => {
  return (
    <MainLayout>
      <CoursePageLayout>
        <TabsView tab={tabOptions} view={tabView} />
      </CoursePageLayout>
    </MainLayout>
  );
};

export default MyCourse;
