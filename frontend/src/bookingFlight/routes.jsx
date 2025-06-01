/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import SearchFlightFormPage from './containers/SearchFlightFormPage'
import ListFlightPage from './containers/ListFlightPage'
import DetailFlightPage from './containers/DetailFlightPage'
import FlightConfirmationPage from './containers/FlightConfirmationPage'
import AddFlightPage from './containers/AddFlightPage'
import AddClassOptionPage from './containers/AddClassOptionPage'
import UpdateFlightPage from './containers/UpdateFlightPage'
import UpdateClassOptionPage from './containers/UpdateClassOptionPage'
import ListClassOptionAvailability from './containers/ListClassOptionAvailability'
import AddClassOptionAvailability from './containers/AddClassOptionAvailability'
import UpdateClassOptionAvailabilityPage from './containers/UpdateClassOptionAvailabilityPage'

const bookingFlightRoutes = [
{ 
	path: "/flight",
	element: <SearchFlightFormPage />,
}

	
,
{ 
	path: "/flight/search/departurelocation/:departureLocation/arrivallocation/:arrivalLocation/departuretime/:departureTime",
	element: <ListFlightPage />,
}

	
,
{ 
	path: "/flight/add",
	element: <AddFlightPage />,
}

	
,
{ 
	path: "flight/:id/classoption/add",
	element: <AddClassOptionPage />,
}

	
,
{ 
	path: "/flight/update",
	element: <UpdateFlightPage />,
}

	
,
{ 
	path: "/flight/:id/classoption/update",
	element: <UpdateClassOptionPage />,
}

	
,
{ 
	path: "",
	element: <ListClassOptionAvailability />,
}

	
,
{ 
	path: "",
	element: <AddClassOptionAvailability />,
}

	
,
{ 
	path: "",
	element: <UpdateClassOptionAvailabilityPage />,
}

	
,
{ 
	path: "/flight/:id/departurelocation/:departureLocation/arrivallocation/:arrivalLocation/departuretime/:departureTime",
	element: <DetailFlightPage />,
}

	
,
{ 
	path: "/flight/:id/class/:classId/book",
	element: <FlightConfirmationPage />,
}

	

]

export default bookingFlightRoutes
