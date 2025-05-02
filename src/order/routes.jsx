/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import OrderPage from './containers/OrderPage'
import DetailHotelOrderPage from './containers/DetailHotelOrderPage'
import DetailFlightOrderPage from './containers/DetailFlightOrderPage'
import DetailEventOrderPage from './containers/DetailEventOrderPage'

const orderRoutes = [
{ 
	path: "/order",
	element: <OrderPage />,
}

	
,
{ 
	path: "/order/hotel/:id",
	element: <DetailHotelOrderPage />,
}

	
,
{ 
	path: "/order/flight/:id",
	element: <DetailFlightOrderPage />,
}

	
,
{ 
	path: "/order/event/:id",
	element: <DetailEventOrderPage />,
}

	

]

export default orderRoutes
