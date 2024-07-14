import React from 'react'
import Chat from '../pages/student/Chat'
import Consultation from '../pages/student/consultion/Consultation'
import ConsultationDetails from '../pages/student/consultion/part/Details'
import Dashboard from '../pages/student/Dashboard'
import MyCerificate from '../pages/student/MyCerificate'
import MyCourse from '../pages/student/my-course/MyCourse'
import PurchaseHistory from '../pages/student/PurchaseHistory'
import MKTConsultDetails from '../pages/student/marketplace/part/consultaion/Details'
import MarketPlacePage from '../pages/student/marketplace/MarketPlacePage'
import CourseDetails from '../pages/student/marketplace/part/courses/CourseDetails'
import MarketPlaceCart from '../pages/student/marketplace/part/cart/MarketPlaceCart'
import WishList from '../pages/student/wishlist/WishList'
import { Routes,Route, Navigate } from 'react-router-dom'
import NotFound from '../pages/NotFound';
import Pay from '../pages/student/marketplace/part/make-payment/Pay'
import MyCourseDetails from '../pages/student/my-course/MyCourseDetails'


const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/overview'/> }/>
        <Route path="/chat" element={<Chat/> } />
        <Route path="/consultations" element={<Consultation/> } />
        <Route path="/consultations/:id" element={<ConsultationDetails/> } />
        <Route path="/overview" element={<Dashboard/> } />
        <Route path="/marketplace" element={<MarketPlacePage/> } />
        <Route path="/marketplace/consultation/:id" element={<MKTConsultDetails/> } />
        <Route path="/marketplace/course/:id" element={<CourseDetails/> } />
        <Route path="/marketplace/cart" element={<MarketPlaceCart/> } />
        <Route path="/marketplace/cart/pay" element={<Pay/> } />
        <Route path="/my-certificate" element={<MyCerificate/> } />
        <Route path="/my-course" element={<MyCourse/>} />
        <Route path="/my-course/:id" element={<MyCourseDetails/>} />
        <Route path="/purchase-history" element={<PurchaseHistory/>} />
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRouter;