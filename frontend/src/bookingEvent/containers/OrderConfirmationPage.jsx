/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
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
import EventDetail from '../components/EventDetail'
import getEventDataDetail from '../services/getEventDataDetail'
import PackageDetail from '../components/PackageDetail'
import getPackageDataDetail from '../services/getPackageDataDetail'
import FormConfirmationOrderForm from '../components/FormConfirmationOrderForm'
const OrderConfirmationPage = props => {
const [isLoading, setIsLoading] = useState({
	eventDetail: false,
	packageDetail: false,
	confirmationOrderForm: false,

	});
	const { setTitle } = useContext(HeaderContext);
    const {eventId} = useParams()
    const {packageId} = useParams()

const [eventDataDetail, setEventDataDetail] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, eventDetail: true}))
			const { data: eventDataDetail } = await getEventDataDetail({ eventId })
			setEventDataDetail(eventDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, eventDetail: false}))
		}
	}
	fetchData()
}, [])
const [packageDataDetail, setPackageDataDetail] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, packageDetail: true}))
			const { data: packageDataDetail } = await getPackageDataDetail({ packageId })
			setPackageDataDetail(packageDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, packageDetail: false}))
		}
	}
	fetchData()
}, [])


	
	useEffect(() => {
		setTitle("Order Confirmation Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/event/${eventId}
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Event Detail"}
	singularName={"Detail"}
	items={{...eventDataDetail}}
	isLoading={isLoading.eventDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<EventDetail {...{ data : { ...eventDataDetail }}} />
</Layouts.DetailContainerLayout>
<Layouts.DetailContainerLayout
	title={"Package Detail"}
	singularName={"Detail"}
	items={{...packageDataDetail}}
	isLoading={isLoading.packageDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<PackageDetail {...{ data : { ...packageDataDetail }}} />
</Layouts.DetailContainerLayout>
<Layouts.FormContainerLayout
		singularName={"Order"}
		
	>
		<FormConfirmationOrderForm
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default OrderConfirmationPage

