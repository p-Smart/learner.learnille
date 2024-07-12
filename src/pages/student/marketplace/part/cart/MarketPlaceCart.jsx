import React from 'react'
import CartLayout from '../../../../../components/layout/CartLayout'
import MainLayout from '../../../../../components/layout/MainLayout'
import CartList from '../../../../../components/cart/CartList'

const MarketPlaceCart = () => {
  return (
    <MainLayout>
        <CartLayout>
           <CartList/>
        </CartLayout>
    </MainLayout>
  )
}

export default MarketPlaceCart