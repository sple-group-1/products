/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useAuth } from '@/commons/auth';
import DetailBlog from '../components/DetailBlog'
import getBlogDataDetail from '../services/getBlogDataDetail'
const DetailBlogPage = props => {
const { id } = useParams()
	const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	detailBlog: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [blogDataDetail, setBlogDataDetail] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailBlog: true}))
			const { data: blogDataDetail } = await getBlogDataDetail({ id })
			setBlogDataDetail(blogDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, detailBlog: false}))
		}
	}
	if (checkPermission("Read Blog")) { 
		fetchData()
	}
}, [])

	
	useEffect(() => {
		setTitle("Detail Blog Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/blog
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
{ checkPermission("Read Blog") && ( 
<Layouts.DetailContainerLayout
	title={"Detail Blog"}
	singularName={"Blog"}
	items={{...blogDataDetail}}
	isLoading={isLoading.detailBlog}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailBlog {...{ data : { ...blogDataDetail }}} />
</Layouts.DetailContainerLayout>

)}

	</Layouts.ViewContainerLayout>
  )
}
export default DetailBlogPage

