/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import OrderPage from './containers/OrderPage'
import DetailHotelOrderPage from './containers/DetailHotelOrderPage'
import DetailEventOrderPage from './containers/DetailEventOrderPage'

const orderRoutes = [
{ 
	path: "/order",
	element: <OrderPage />,
}

	
,
{ 
	path: "/order/hotel/:orderId",
	element: <DetailHotelOrderPage />,
}

	
,
{ 
	path: "/order/event/:orderId",
	element: <DetailEventOrderPage />,
}

	

]

export default orderRoutes
