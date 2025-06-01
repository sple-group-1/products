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

import DetailHotelBooking from '../components/DetailHotelBooking'
import getDetailHotelBookingDataBinding from '../services/getDetailHotelBookingDataBinding'
import DetailHotelRoomBooking from '../components/DetailHotelRoomBooking'
import getDetailRoomBookingDataBinding from '../services/getDetailRoomBookingDataBinding'
import DetailPayment from '../components/DetailPayment'
import getCountAmountDataBinding from '../services/getCountAmountDataBinding'
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
const [countAmountDataBinding, setCountAmountDataBinding] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailPayment: true}))
			const { data: countAmountDataBinding } = await getCountAmountDataBinding({ end_date, rooms_count, start_date })
			setCountAmountDataBinding(countAmountDataBinding.data)
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
	items={{...countAmountDataBinding}}
	isLoading={isLoading.detailPayment}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailPayment {...{ data : { ...countAmountDataBinding }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default HotelConfimationPage

