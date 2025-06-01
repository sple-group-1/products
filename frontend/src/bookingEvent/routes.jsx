/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import ListEventPage from './containers/ListEventPage'
import DetailEventPage from './containers/DetailEventPage'
import PackageDetailPage from './containers/PackageDetailPage'
import AddEventPage from './containers/AddEventPage'
import AddPackageOptionPage from './containers/AddPackageOptionPage'
import UpdatePackagePage from './containers/UpdatePackagePage'
import OrderConfirmationPage from './containers/OrderConfirmationPage'
import UpdateEventPage from './containers/UpdateEventPage'

const bookingEventRoutes = [
{ 
	path: "/event",
	element: <RequireAuth permissionNeeded="ReadEvent" ><ListEventPage/></RequireAuth>
}

	
,
{ 
	path: "/event/add",
	element: <RequireAuth permissionNeeded="CreateEvent" ><AddEventPage/></RequireAuth>
}

	
,
{ 
	path: "/event/:eventId/addpackage",
	element: <RequireAuth permissionNeeded="CreatePackage" ><AddPackageOptionPage/></RequireAuth>
}

	
,
{ 
	path: "/event/:eventId/updatepackage",
	element: <RequireAuth permissionNeeded="UpdatePackage" ><UpdatePackagePage/></RequireAuth>
}

	
,
{ 
	path: "/event/update",
	element: <RequireAuth permissionNeeded="UpdateEvent" ><UpdateEventPage/></RequireAuth>
}

	
,
{ 
	path: "/event/:eventId",
	element: <RequireAuth permissionNeeded="ReadEvent" ><DetailEventPage/></RequireAuth>
}

	
,
{ 
	path: "/event/:eventId/package/:packageId",
	element: <RequireAuth permissionNeeded="ReadPackage" ><PackageDetailPage/></RequireAuth>
}

	
,
{ 
	path: "/event/:eventId/package/:packageId/placeorder",
	element: <OrderConfirmationPage />,
}

	

]

export default bookingEventRoutes
