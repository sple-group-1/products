/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import BlogPage from './containers/BlogPage'
import AddBlogPage from './containers/AddBlogPage'
import DetailBlogPage from './containers/DetailBlogPage'
import UpdateBlogPage from './containers/UpdateBlogPage'

const blogRoutes = [
{ 
	path: "/blog",
	element: <BlogPage />,
}

	
,
{ 
	path: "/blog/add",
	element: <AddBlogPage />,
}

	
,
{ 
	path: "blog/update",
	element: <UpdateBlogPage />,
}

	
,
{ 
	path: "/blog/:id",
	element: <DetailBlogPage />,
}

	

]

export default blogRoutes
