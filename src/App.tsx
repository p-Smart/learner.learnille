import { BrowserRouter } from "react-router-dom";
import "focus-visible/dist/focus-visible";
import { Global, css } from "@emotion/react";
import Chat from "@/pages/Chat/Chat";
import MyCerificate from "@/pages/MyCerificate";
import MyCourse from "@/pages/my-courses/MyCourses";
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
import PurchaseHistory from "./pages/PurchaseHistory";
import RouteProtector from "./components/hocs/RouteProtector";

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
        <Route
          path="/"
          element={
            <RouteProtector>
              <Navigate to="/overview" />
            </RouteProtector>
          }
        />
        <Route
          path="/overview"
          element={
            <RouteProtector>
              <Overview />
            </RouteProtector>
          }
        />
        <Route
          path="/chat"
          element={
            <RouteProtector>
              <Chat />
            </RouteProtector>
          }
        />
        <Route
          path="/consultations"
          element={
            <RouteProtector>
              <Consultation />
            </RouteProtector>
          }
        />
        <Route
          path="/marketplace"
          element={
            <RouteProtector>
              <MarketPlacePage />
            </RouteProtector>
          }
        />
        <Route
          path="/settings"
          element={
            <RouteProtector>
              <Settings />
            </RouteProtector>
          }
        />
        <Route
          path="/notifications"
          element={
            <RouteProtector>
              <Notifications />
            </RouteProtector>
          }
        />
        <Route
          path="/notifications/activity"
          element={
            <RouteProtector>
              <Activities />
            </RouteProtector>
          }
        />
        <Route
          path="/marketplace/consultation/:id"
          element={
            <RouteProtector>
              <MKTConsultDetails />
            </RouteProtector>
          }
        />
        <Route
          path="/marketplace/course/:id"
          element={
            <RouteProtector>
              <CourseDetails />
            </RouteProtector>
          }
        />
        <Route
          path="/cart"
          element={
            <RouteProtector>
              <MarketPlaceCart />
            </RouteProtector>
          }
        />
        <Route
          path="/pay"
          element={
            <RouteProtector>
              <Pay />
            </RouteProtector>
          }
        />
        <Route
          path="/my-certificate"
          element={
            <RouteProtector>
              <MyCerificate />
            </RouteProtector>
          }
        />
        <Route
          path="/my-courses"
          element={
            <RouteProtector>
              <MyCourse />
            </RouteProtector>
          }
        />
        <Route
          path="/my-courses/:id"
          element={
            <RouteProtector>
              <MyCourseDetails />
            </RouteProtector>
          }
        />
        <Route
          path="/purchase-history"
          element={
            <RouteProtector>
              <PurchaseHistory />
            </RouteProtector>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RouteProtector>
              <WishList />
            </RouteProtector>
          }
        />
        <Route
          path="/call"
          element={
            <RouteProtector>
              <VirtualCall />
            </RouteProtector>
          }
        />
        <Route
          path="*"
          element={
            <RouteProtector>
              <NotFound />
            </RouteProtector>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
