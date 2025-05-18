/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import ListEventPage from './containers/ListEventPage'
import DetailEventPage from './containers/DetailEventPage'
import PackageDetailPage from './containers/PackageDetailPage'
import AddEventPage from './containers/AddEventPage'
import UpdateEventPage from './containers/UpdateEventPage'
import AddPackageOptionPage from './containers/AddPackageOptionPage'
import UpdatePackagePage from './containers/UpdatePackagePage'
import OrderConfirmationPage from './containers/OrderConfirmationPage'

const bookingEventRoutes = [
{ 
	path: "/event",
	element: <ListEventPage />,
}

	
,
{ 
	path: "/event/add",
	element: <AddEventPage />,
}

	
,
{ 
	path: "/event/update",
	element: <UpdateEventPage />,
}

	
,
{ 
	path: "/event/:eventId/addpackage",
	element: <AddPackageOptionPage />,
}

	
,
{ 
	path: "/package/:eventId/update",
	element: <UpdatePackagePage />,
}

	
,
{ 
	path: "/event/:eventId",
	element: <DetailEventPage />,
}

	
,
{ 
	path: "/event/:eventId/package/:packageId",
	element: <PackageDetailPage />,
}

	
,
{ 
	path: "/event/:eventId/package/:packageId/placeorder",
	element: <OrderConfirmationPage />,
}

	

]

export default bookingEventRoutes
