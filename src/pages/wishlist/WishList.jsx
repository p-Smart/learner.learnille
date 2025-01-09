import MainLayout from "@/layout/DashboardLayout";
import TabsView from "@/components/utility/Tabs.jsx";
import CourseWishList from "./part/CourseWishList.jsx";
import ConsultationWishlist from "./part/ConsultationWishlist.jsx";

const tabOptions = ["Consultation Wishlist", "Course Wishlist"];

const tabView = [
  <ConsultationWishlist key="consultation" />,
  <CourseWishList key="course" />,
];

const WishList = () => {
  return (
    <MainLayout>
      <TabsView tab={tabOptions} view={tabView} />
    </MainLayout>
  );
};

export default WishList;
