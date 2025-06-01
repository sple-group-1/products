/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext } from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { notifySuccess, notifyError } from "@/commons/utils/toaster";

import DetailHotelBooking from '../components/DetailHotelBooking'
import getDetailHotelBookingDataBinding from '../services/getDetailHotelBookingDataBinding'
import DetailHotelRoomBooking from '../components/DetailHotelRoomBooking'
import getDetailRoomBookingDataBinding from '../services/getDetailRoomBookingDataBinding'
import checkout from '../services/checkout'
import DetailPayment from '../components/DetailPayment'
import getBookingFeeReviewDataBinding from '../services/getBookingFeeReviewDataBinding';
import { formatToIDR } from '../utils/formatToIDR';

const HotelConfimationPage = props => {
	const { end_date, room_count, id, roomId, start_date } = useParams();
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState({
		detailHotelBooking: false,
		detailHotelRoomBooking: false,
		detailPayment: false,
		checkout: false
	});
	const { setTitle } = useContext(HeaderContext);

	const [detailHotelBookingDataBinding, setDetailHotelBookingDataBinding] = useState()
	const [detailRoomBookingDataBinding, setDetailRoomBookingDataBinding] = useState()
	const [countAmountDataBinding, setCountAmountDataBinding] = useState()

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({ ...prev, detailHotelBooking: true }))
				const { data: detailHotelBookingDataBinding } = await getDetailHotelBookingDataBinding({ id })
				setDetailHotelBookingDataBinding(detailHotelBookingDataBinding.data)
			} finally {
				setIsLoading(prev => ({ ...prev, detailHotelBooking: false }))
			}
		}
		fetchData()
	}, [])



	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({ ...prev, detailHotelRoomBooking: true }))
				const { data: detailRoomBookingDataBinding } = await getDetailRoomBookingDataBinding({ id: roomId })
				const detailRoom = { ...detailRoomBookingDataBinding.data, price: formatToIDR(detailRoomBookingDataBinding.data.price) };
				setDetailRoomBookingDataBinding(detailRoom)
			} finally {
				setIsLoading(prev => ({ ...prev, detailHotelRoomBooking: false }))
			}
		}
		fetchData()
	}, [])


	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({ ...prev, detailPayment: true }))
				const { data: bookingFeeReviewDataBinding } = await getBookingFeeReviewDataBinding({ roomId, start_date, end_date, room_count })
				const bookingFeeReview = { ...bookingFeeReviewDataBinding.data, total_price: formatToIDR(bookingFeeReviewDataBinding.data.total_price) };
				setCountAmountDataBinding(bookingFeeReview)
			} finally {
				setIsLoading(prev => ({ ...prev, detailPayment: false }))
			}
		}
		fetchData()
	}, [])

	useEffect(() => {
		setTitle("Hotel Confirmation Page")
	}, []);

	// Handle checkout function
	const handleCheckout = async () => {
		try {
			setIsLoading(prev => ({ ...prev, checkout: true }));

			// Prepare payload for the API
			const payload = {
				quantity: room_count,
				startDate: start_date,
				endDate: end_date,
				bookingOptionId: roomId
			};

			// Make POST request to the order/save endpoint
			const response = await checkout(payload);

			notifySuccess('Checkout successful!');

			navigate('/order');

		} catch (error) {
			console.error('Checkout error:', error);
			notifyError('Failed to process your order. Please try again.');
		} finally {
			setIsLoading(prev => ({ ...prev, checkout: false }));
		}
	};

	return (
		<Layouts.ViewContainerLayout
			buttons={
				<>
				</>
			}
		>
			<Layouts.DetailContainerLayout
				title={"Detail Hotel"}
				singularName={"Hotel"}
				items={{ ...detailHotelBookingDataBinding }}
				isLoading={isLoading.detailHotelBooking}
				isCorrelatedWithAnotherComponent={false}
			>
				<DetailHotelBooking {...{ data: { ...detailHotelBookingDataBinding } }} />
			</Layouts.DetailContainerLayout>
			<Layouts.DetailContainerLayout
				title={"Detail Hotel Room"}
				singularName={"Hotel"}
				items={{ ...detailRoomBookingDataBinding }}
				isLoading={isLoading.detailHotelRoomBooking}
				isCorrelatedWithAnotherComponent={false}
			>
				<DetailHotelRoomBooking {...{ data: { ...detailRoomBookingDataBinding } }} />
			</Layouts.DetailContainerLayout>
			<Layouts.DetailContainerLayout
				title={"Detail Payment"}
				singularName={"Payment"}
				items={{ ...countAmountDataBinding }}
				isLoading={isLoading.detailPayment}
				isCorrelatedWithAnotherComponent={false}
			>
				<DetailPayment {...{ data: { ...countAmountDataBinding } }} />
			</Layouts.DetailContainerLayout>

			<Layouts.ViewContainerButtonLayout>
				<Button
					className="p-2 w-1/2 mx-auto"
					variant="primary"
					onClick={handleCheckout}
					disabled={isLoading.checkout}
				>
					{isLoading.checkout ? (
						<>
							<Spinner size="sm" className="mr-2" />
							Processing...
						</>
					) : (
						'Checkout'
					)}
				</Button>
			</Layouts.ViewContainerButtonLayout>

		</Layouts.ViewContainerLayout>
	)
}
export default HotelConfimationPage