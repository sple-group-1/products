/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import BlogCard from "../components/BlogCard";

import getListBlogDataBinding from '../services/getListBlogDataBinding'
const BlogPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listRowBlog: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listBlogDataBinding, setListBlogDataBinding] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRowBlog: true}))
				const { data: listBlogDataBinding } = await getListBlogDataBinding()
				setListBlogDataBinding(listBlogDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRowBlog: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Blog Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			{checkPermission("CreateBlog") && (

			  	<Link to={`/blog/add
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Add Blog
			  		</Button>
			  	</Link>
			)}	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"ListRow Blog"}
	singularName={"Blog"}
	items={[listBlogDataBinding]}
	isLoading={isLoading.listRowBlog}
>
	<BlogCard
		listBlogDataBinding={listBlogDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default BlogPage

