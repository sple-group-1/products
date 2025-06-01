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
import UpcomingHotelCard from "../components/UpcomingHotelCard";

import getListUpcomingHotelOrderDataBinding from '../services/getListUpcomingHotelOrderDataBinding'
import UpcomingEventCard from "../components/UpcomingEventCard";

import getListUpcomingEventOrderDataBinding from '../services/getListUpcomingEventOrderDataBinding'
const UpcomingOrders = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listRowUpcomingHotel: false,
	listRowUpcomingEvent: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listUpcomingHotelOrderDataBinding, setListUpcomingHotelOrderDataBinding] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRowUpcomingHotel: true}))
				const { data: listUpcomingHotelOrderDataBinding } = await getListUpcomingHotelOrderDataBinding()
				setListUpcomingHotelOrderDataBinding(listUpcomingHotelOrderDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRowUpcomingHotel: false}))
			}
		}
		fetchData()
  	}, [])
const [listUpcomingEventOrderDataBinding, setListUpcomingEventOrderDataBinding] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRowUpcomingEvent: true}))
				const { data: listUpcomingEventOrderDataBinding } = await getListUpcomingEventOrderDataBinding()
				setListUpcomingEventOrderDataBinding(listUpcomingEventOrderDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRowUpcomingEvent: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Upcoming Orders")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"ListRow UpcomingHotel"}
	singularName={"UpcomingHotel"}
	items={[listUpcomingHotelOrderDataBinding]}
	isLoading={isLoading.listRowUpcomingHotel}
>
	<UpcomingHotelCard
		listUpcomingHotelOrderDataBinding={listUpcomingHotelOrderDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>
<Layouts.ListContainerCardLayout
	title={"ListRow UpcomingEvent"}
	singularName={"UpcomingEvent"}
	items={[listUpcomingEventOrderDataBinding]}
	isLoading={isLoading.listRowUpcomingEvent}
>
	<UpcomingEventCard
		listUpcomingEventOrderDataBinding={listUpcomingEventOrderDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpcomingOrders

