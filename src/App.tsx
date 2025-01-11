import { BrowserRouter } from "react-router-dom";
import "focus-visible/dist/focus-visible";
import { Global, css } from "@emotion/react";
import Chat from "@/pages/Chat/Chat";
import Consultation from "@/pages/consultion/Consultation";
import ConsultationDetails from "@/pages/consultion/part/Details";
import MyCerificate from "@/pages/MyCerificate";
import MyCourse from "@/pages/my-course/MyCourse";
import PurchaseHistory from "@/pages/PurchaseHistory";
import MKTConsultDetails from "@/pages/marketplace/part/consultaion/Details";
import MarketPlacePage from "@/pages/marketplace/MarketPlacePage";
import CourseDetails from "@/pages/marketplace/part/courses/CourseDetails";
import MarketPlaceCart from "@/pages/marketplace/part/cart/MarketPlaceCart";
import WishList from "@/pages/wishlist/WishList";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Pay from "@/pages/marketplace/part/make-payment/Pay";
import MyCourseDetails from "@/pages/my-course/MyCourseDetails";
import Overview from "@/pages/Overview/Overview";
import Settings from "./pages/Settings";

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
        <Route path="/consultations/:id" element={<ConsultationDetails />} />
        <Route path="/marketplace" element={<MarketPlacePage />} />
        <Route path="/settings" element={<Settings />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
