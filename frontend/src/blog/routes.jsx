/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import BlogPage from './containers/BlogPage'
import AddBlogPage from './containers/AddBlogPage'
import DetailBlogPage from './containers/DetailBlogPage'
import UpdateBlogPage from './containers/UpdateBlogPage'

const blogRoutes = [
{ 
	path: "/blog",
	element: <RequireAuth permissionNeeded="ReadBlog" ><BlogPage/></RequireAuth>
}

	
,
{ 
	path: "/blog/add",
	element: <RequireAuth permissionNeeded="CreateBlog" ><AddBlogPage/></RequireAuth>
}

	
,
{ 
	path: "/blog/update",
	element: <RequireAuth permissionNeeded="UpdateBlog" ><UpdateBlogPage/></RequireAuth>
}

	
,
{ 
	path: "/blog/:id",
	element: <RequireAuth permissionNeeded="ReadBlog" ><DetailBlogPage/></RequireAuth>
}

	

]

export default blogRoutes
