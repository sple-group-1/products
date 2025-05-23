/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import SearchHotelFormPage from './containers/SearchHotelFormPage'
import ListHotelPage from './containers/ListHotelPage'
import DetailHotelPage from './containers/DetailHotelPage'
import HotelConfimationPage from './containers/HotelConfimationPage'
import AddHotelPage from './containers/AddHotelPage'
import AddRoomOptionPage from './containers/AddRoomOptionPage'
import UpdateHotelPage from './containers/UpdateHotelPage'
import UpdateRoomOptionPage from './containers/UpdateRoomOptionPage'
import ListRoomOptionAvailabilityPage from './containers/ListRoomOptionAvailabilityPage'
import AddRoomOptionAvailabilityPage from './containers/AddRoomOptionAvailabilityPage'
import UpdateRoomOptionAvailability from './containers/UpdateRoomOptionAvailability'

const bookingRoutes = [
{ 
	path: "/hotel/search",
	element: <SearchHotelFormPage />,
}

	
,
{ 
	path: "/hotel",
	element: <ListHotelPage />,
}

	
,
{ 
	path: "/admin/hotel/add",
	element: <AddHotelPage />,
}

	
,
{ 
	path: "/admin/hotel/:id/room-option/add",
	element: <AddRoomOptionPage />,
}

	
,
{ 
	path: "/admin/hotel/:id/update",
	element: <UpdateHotelPage />,
}

	
,
{ 
	path: "/admin/hotel/:hotelId/room-option/:roomId",
	element: <UpdateRoomOptionPage />,
}

	
,
{ 
	path: "/admin/hotel/:hotelId/room-option/:roomId/availability",
	element: <ListRoomOptionAvailabilityPage />,
}

	
,
{ 
	path: "/admin/hotel/:hotelId/room-option/:roomId/availability/add",
	element: <AddRoomOptionAvailabilityPage />,
}

	
,
{ 
	path: "/admin/hotel/:hotelId/room-option/:roomId/availability/:id",
	element: <UpdateRoomOptionAvailability />,
}

	
,
{ 
	path: "/hotel/:id",
	element: <DetailHotelPage />,
}

	
,
{ 
	path: "/hotel/:id/room/:roomId/book",
	element: <HotelConfimationPage />,
}

	

]

export default bookingRoutes
