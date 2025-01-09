import React from "react";
import CartLayout from "../../../../layout/CartLayout";
import MainLayout from "../../../../layout/DashboardLayout";
import CartList from "../../../../components/cart/CartList";

const MarketPlaceCart = () => {
  return (
    <MainLayout>
      <CartLayout>
        <CartList />
      </CartLayout>
    </MainLayout>
  );
};

export default MarketPlaceCart;
