import { BrowserRouter } from "react-router-dom";
import "focus-visible/dist/focus-visible";
import { Global, css } from "@emotion/react";
import Chat from "@/pages/Chat/Chat";
import MyCerificate from "@/pages/MyCerificate";
import MyCourse from "@/pages/my-courses/MyCourses";
import PurchaseHistory from "@/pages/PurchaseHistory";
import MKTConsultDetails from "@/pages/marketplace/part/consultaion/Details";
import MarketPlacePage from "@/pages/marketplace/MarketPlacePage";
import CourseDetails from "@/pages/marketplace/part/courses/CourseDetails";
import MarketPlaceCart from "@/pages/marketplace/part/cart/MarketPlaceCart";
import WishList from "@/pages/wishlist/WishList";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Pay from "@/pages/marketplace/part/make-payment/Pay";
import MyCourseDetails from "@/pages/my-courses/MyCourseDetails";
import Overview from "@/pages/Overview/Overview";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications/Notifications";
import Activities from "./pages/Notifications/Activities";
import Consultation from "./pages/consultation/Consultations";
import VirtualCall from "./pages/VirtualCall";

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<Navigate to="/overview" />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/consultations" element={<Consultation />} />
        <Route path="/marketplace" element={<MarketPlacePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/notifications/activity" element={<Activities />} />
        <Route
          path="/marketplace/consultation/:id"
          element={<MKTConsultDetails />}
        />
        <Route path="/marketplace/course/:id" element={<CourseDetails />} />
        <Route path="/cart" element={<MarketPlaceCart />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/my-certificate" element={<MyCerificate />} />
        <Route path="/my-courses" element={<MyCourse />} />
        <Route path="/my-courses/:id" element={<MyCourseDetails />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/call" element={<VirtualCall />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
