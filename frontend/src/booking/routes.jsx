/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
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
	path: "/hotel",
	element: <SearchHotelFormPage />,
}

	
,
{ 
	path: "/hotel/search/keyword/:keyword/start_date/:start_date/end_date/:end_date/rooms_count/:rooms_count",
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
	path: "/hotel/:id/start_date/:start_date/end_date/:end_date/rooms_count/:rooms_count",
	element: <DetailHotelPage />,
}

	
,
{ 
	path: "/hotel/:Id/room/:RoomId/book",
	element: <HotelConfimationPage />,
}

	

]

export default bookingRoutes
