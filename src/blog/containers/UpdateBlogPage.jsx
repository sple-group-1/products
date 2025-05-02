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
import { useSearchParams } from "react-router";
import FormUpdateBlog from '../components/FormUpdateBlog'

import getBlogData from '../services/getBlogData'
const UpdateBlogPage = props => {
const { id } = useParams()

	const [isLoading, setIsLoading] = useState({
	updateBlog: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [blogData, setBlogData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updateBlog: true}))
		const { data: blogDataResponse } = await getBlogData({ id  })

	    setBlogData(blogDataResponse.data)


	    setIsLoading(prev => ({...prev, updateBlog: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Update Blog Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/blog/${id}
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Blog"}
		isLoading={isLoading.updateBlog}
	>
		{blogData ? 
		(<>
		 <FormUpdateBlog
			{...{ 
				blogData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateBlogPage

