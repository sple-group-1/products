/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
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
import DetailEvent from '../components/DetailEvent'
import getDetailEventDataBinding from '../services/getDetailEventDataBinding'
import OptionTable from "../components/OptionTable";

import getListPackageDataBinding from '../services/getListPackageDataBinding'
const DetailEventPage = props => {
const { eventId } = useParams()
	const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	detailEvent: false,
	packageOption: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailEventDataBinding, setDetailEventDataBinding] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailEvent: true}))
			const { data: detailEventDataBinding } = await getDetailEventDataBinding({ eventId })
			setDetailEventDataBinding(detailEventDataBinding.data)
		} finally {
			setIsLoading(prev => ({...prev, detailEvent: false}))
		}
	}
	fetchData()
}, [])
const [listPackageDataBinding, setListPackageDataBinding] = useState()
	
	
	


	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, packageOption: true}))
				const { data: listPackageDataBinding } = await getListPackageDataBinding({ packageId })
				setListPackageDataBinding(listPackageDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, packageOption: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Detail Event Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/event
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			  	
			  	
			  	{checkPermission("CreatePackage") &&  (
			  	  <Link to={`/event/${eventId}/addpackage
			  	  `}>
			  	  	<Button className="p-2 w-full" variant="primary">
			  	  	  Add Package Option
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Event"}
	singularName={"Event"}
	items={{...detailEventDataBinding}}
	isLoading={isLoading.detailEvent}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailEvent {...{ data : { ...detailEventDataBinding }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerTableLayout
	title={"Package Option"}
	singularName={"Option"}
	items={[listPackageDataBinding]}
	isLoading={isLoading.packageOption}
>
	<OptionTable
		listPackageDataBinding={listPackageDataBinding}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailEventPage

