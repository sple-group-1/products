/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailHotelBooking from '../components/DetailHotelBooking'
import getDetailHotelBookingDataBinding from '../services/getDetailHotelBookingDataBinding'
import DetailHotelRoomBooking from '../components/DetailHotelRoomBooking'
import getDetailRoomBookingDataBinding from '../services/getDetailRoomBookingDataBinding'
import DetailPayment from '../components/DetailPayment'
import getCountPriceDataBinding from '../services/getCountPriceDataBinding'
const HotelConfimationPage = props => {
const { end_date, rooms_count, invalid, roomId, start_date } = useParams()

	const [isLoading, setIsLoading] = useState({
	detailHotelBooking: false,
	detailHotelRoomBooking: false,
	detailPayment: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailHotelBookingDataBinding, setDetailHotelBookingDataBinding] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailHotelBooking: true}))
			const { data: detailHotelBookingDataBinding } = await getDetailHotelBookingDataBinding({ id })
			setDetailHotelBookingDataBinding(detailHotelBookingDataBinding.data)
		} finally {
			setIsLoading(prev => ({...prev, detailHotelBooking: false}))
		}
	}
	fetchData()
}, [])
const [detailRoomBookingDataBinding, setDetailRoomBookingDataBinding] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailHotelRoomBooking: true}))
			const { data: detailRoomBookingDataBinding } = await getDetailRoomBookingDataBinding({ roomId })
			setDetailRoomBookingDataBinding(detailRoomBookingDataBinding.data)
		} finally {
			setIsLoading(prev => ({...prev, detailHotelRoomBooking: false}))
		}
	}
	fetchData()
}, [])
const [countPriceDataBinding, setCountPriceDataBinding] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailPayment: true}))
			const { data: countPriceDataBinding } = await getCountPriceDataBinding({ end_date, rooms_count, start_date })
			setCountPriceDataBinding(countPriceDataBinding.data)
		} finally {
			setIsLoading(prev => ({...prev, detailPayment: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Hotel Confimation Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Button className="mt-2 sm:mt-0" variant="primary" onClick={place_order}>Place Order</Button>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Hotel Booking"}
	singularName={"Hotel"}
	items={{...detailHotelBookingDataBinding}}
	isLoading={isLoading.detailHotelBooking}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailHotelBooking {...{ data : { ...detailHotelBookingDataBinding }}} />
</Layouts.DetailContainerLayout>
<Layouts.DetailContainerLayout
	title={"Detail Hotel Room Booking"}
	singularName={"Hotel"}
	items={{...detailRoomBookingDataBinding}}
	isLoading={isLoading.detailHotelRoomBooking}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailHotelRoomBooking {...{ data : { ...detailRoomBookingDataBinding }}} />
</Layouts.DetailContainerLayout>
<Layouts.DetailContainerLayout
	title={"Detail Payment"}
	singularName={"Payment"}
	items={{...countPriceDataBinding}}
	isLoading={isLoading.detailPayment}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailPayment {...{ data : { ...countPriceDataBinding }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default HotelConfimationPage

