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
import HotelCard from "../components/HotelCard";

import getListHotelDataBinding from '../services/getListHotelDataBinding'
import FlightCard from "../components/FlightCard";

import getListFlightDataBinding from '../services/getListFlightDataBinding'
import EventCard from "../components/EventCard";

import getListEventDataBinding from '../services/getListEventDataBinding'
const CompletedOrders = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listRowHotelOrder: false,
	listRowFlightOrder: false,
	listRowEventOrder: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listHotelDataBinding, setListHotelDataBinding] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRowHotelOrder: true}))
				const { data: listHotelDataBinding } = await getListHotelDataBinding()
				setListHotelDataBinding(listHotelDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRowHotelOrder: false}))
			}
		}
		fetchData()
  	}, [])
const [listFlightDataBinding, setListFlightDataBinding] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRowFlightOrder: true}))
				const { data: listFlightDataBinding } = await getListFlightDataBinding()
				setListFlightDataBinding(listFlightDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRowFlightOrder: false}))
			}
		}
		fetchData()
  	}, [])
const [listEventDataBinding, setListEventDataBinding] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRowEventOrder: true}))
				const { data: listEventDataBinding } = await getListEventDataBinding()
				setListEventDataBinding(listEventDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRowEventOrder: false}))
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
	title={"ListRow Hotel Order"}
	singularName={"Hotel"}
	items={[listHotelDataBinding]}
	isLoading={isLoading.listRowHotelOrder}
>
	<HotelCard
		listHotelDataBinding={listHotelDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>
<Layouts.ListContainerCardLayout
	title={"ListRow Flight Order"}
	singularName={"Flight"}
	items={[listFlightDataBinding]}
	isLoading={isLoading.listRowFlightOrder}
>
	<FlightCard
		listFlightDataBinding={listFlightDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>
<Layouts.ListContainerCardLayout
	title={"ListRow Event Order"}
	singularName={"Event"}
	items={[listEventDataBinding]}
	isLoading={isLoading.listRowEventOrder}
>
	<EventCard
		listEventDataBinding={listEventDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CompletedOrders

