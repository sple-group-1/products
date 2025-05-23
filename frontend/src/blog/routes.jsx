/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import BlogPage from './containers/BlogPage'
import AddBlogPage from './containers/AddBlogPage'
import DetailBlogPage from './containers/DetailBlogPage'
import UpdateBlogPage from './containers/UpdateBlogPage'

const blogRoutes = [
{ 
	path: "/blog",
	element: <RequireAuth permissionNeeded="Read Blog" ><BlogPage/></RequireAuth>
}

	
,
{ 
	path: "/blog/add",
	element: <RequireAuth permissionNeeded="Create Blog" ><AddBlogPage/></RequireAuth>
}

	
,
{ 
	path: "blog/update",
	element: <RequireAuth permissionNeeded="UpdateBlog" ><UpdateBlogPage/></RequireAuth>
}

	
,
{ 
	path: "/blog/:id",
	element: <RequireAuth permissionNeeded="Read Blog" ><DetailBlogPage/></RequireAuth>
}

	

]

export default blogRoutes
