import Chat from "../pages/Chat/Chat";
import Consultation from "../pages/consultion/Consultation";
import ConsultationDetails from "../pages/consultion/part/Details";
import MyCerificate from "../pages/MyCerificate";
import MyCourse from "../pages/my-course/MyCourse";
import PurchaseHistory from "../pages/PurchaseHistory";
import MKTConsultDetails from "../pages/marketplace/part/consultaion/Details";
import MarketPlacePage from "../pages/marketplace/MarketPlacePage";
import CourseDetails from "../pages/marketplace/part/courses/CourseDetails";
import MarketPlaceCart from "../pages/marketplace/part/cart/MarketPlaceCart";
import WishList from "../pages/wishlist/WishList";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Pay from "../pages/marketplace/part/make-payment/Pay";
import MyCourseDetails from "../pages/my-course/MyCourseDetails";
import Overview from "../pages/Overview";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/overview" />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/consultations" element={<Consultation />} />
      <Route path="/consultations/:id" element={<ConsultationDetails />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/marketplace" element={<MarketPlacePage />} />
      <Route
        path="/marketplace/consultation/:id"
        element={<MKTConsultDetails />}
      />
      <Route path="/marketplace/course/:id" element={<CourseDetails />} />
      <Route path="/cart" element={<MarketPlaceCart />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/my-certificate" element={<MyCerificate />} />
      <Route path="/my-course" element={<MyCourse />} />
      <Route path="/my-course/:id" element={<MyCourseDetails />} />
      <Route path="/purchase-history" element={<PurchaseHistory />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
