/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import WishlistCollectionsPage from './containers/WishlistCollectionsPage'
import DetailCollectionPage from './containers/DetailCollectionPage'
import AddNewCollectionPage from './containers/AddNewCollectionPage'
import UpdateCollectionPage from './containers/UpdateCollectionPage'
import AddWishlistPage from './containers/AddWishlistPage'

const wishlistRoutes = [
{ 
	path: "/wishlist/collections",
	element: <WishlistCollectionsPage />,
}

	
,
{ 
	path: "/wishlist/:collectionId",
	element: <DetailCollectionPage />,
}

	
,
{ 
	path: "/wishlist/collections/add",
	element: <AddNewCollectionPage />,
}

	
,
{ 
	path: "/wishlist/collections/:collectionId/edit",
	element: <UpdateCollectionPage />,
}

	
,
{ 
	path: "/wishlist/:collectionId/add",
	element: <AddWishlistPage />,
}

	

]

export default wishlistRoutes
