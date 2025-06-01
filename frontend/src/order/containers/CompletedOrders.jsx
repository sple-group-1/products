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
import CompletedHotelCard from "../components/CompletedHotelCard";

import getListCompletedHotelOrderDataBinding from '../services/getListCompletedHotelOrderDataBinding'
import CompletedEventCard from "../components/CompletedEventCard";

import getListCompletedEventOrderDataBinding from '../services/getListCompletedEventOrderDataBinding'
const CompletedOrders = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listRowCompletedHotel: false,
	listRowCompletedEvent: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listCompletedHotelOrderDataBinding, setListCompletedHotelOrderDataBinding] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRowCompletedHotel: true}))
				const { data: listCompletedHotelOrderDataBinding } = await getListCompletedHotelOrderDataBinding()
				setListCompletedHotelOrderDataBinding(listCompletedHotelOrderDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRowCompletedHotel: false}))
			}
		}
		fetchData()
  	}, [])
const [listCompletedEventOrderDataBinding, setListCompletedEventOrderDataBinding] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRowCompletedEvent: true}))
				const { data: listCompletedEventOrderDataBinding } = await getListCompletedEventOrderDataBinding()
				setListCompletedEventOrderDataBinding(listCompletedEventOrderDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRowCompletedEvent: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Completed Orders")
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
	title={"ListRow CompletedHotel"}
	singularName={"CompletedHotel"}
	items={[listCompletedHotelOrderDataBinding]}
	isLoading={isLoading.listRowCompletedHotel}
>
	<CompletedHotelCard
		listCompletedHotelOrderDataBinding={listCompletedHotelOrderDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>
<Layouts.ListContainerCardLayout
	title={"ListRow CompletedEvent"}
	singularName={"CompletedEvent"}
	items={[listCompletedEventOrderDataBinding]}
	isLoading={isLoading.listRowCompletedEvent}
>
	<CompletedEventCard
		listCompletedEventOrderDataBinding={listCompletedEventOrderDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CompletedOrders

