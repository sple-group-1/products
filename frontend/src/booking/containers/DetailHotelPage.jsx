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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import DetailHotel from '../components/DetailHotel'
import getDetailHotelDataBinding from '../services/getDetailHotelDataBinding'
import RoomCard from "../components/RoomCard";

import getHotelRoomOptionListDataBinding from '../services/getHotelRoomOptionListDataBinding'
const DetailHotelPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	detailHotel: false,
	listRoomOptions: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailHotelDataBinding, setDetailHotelDataBinding] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailHotel: true}))
			const { data: detailHotelDataBinding } = await getDetailHotelDataBinding({ id })
			setDetailHotelDataBinding(detailHotelDataBinding.data)
		} finally {
			setIsLoading(prev => ({...prev, detailHotel: false}))
		}
	}
	fetchData()
}, [])
const [hotelRoomOptionListDataBinding, setHotelRoomOptionListDataBinding] = useState()
	
	
	


	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRoomOptions: true}))
				const { data: hotelRoomOptionListDataBinding } = await getHotelRoomOptionListDataBinding()
				setHotelRoomOptionListDataBinding(hotelRoomOptionListDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRoomOptions: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Detail Hotel Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/review/:Id
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Review Page
			  		</Button>
			  	</Link>
			  	
			  	
			  	<Link to={`/admin/hotel/${id}/room-option/add
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Add Room Option
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Hotel"}
	singularName={"Hotel"}
	items={{...detailHotelDataBinding}}
	isLoading={isLoading.detailHotel}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailHotel {...{ data : { ...detailHotelDataBinding }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerCardLayout
	title={"List Room Options"}
	singularName={"Room"}
	items={[hotelRoomOptionListDataBinding]}
	isLoading={isLoading.listRoomOptions}
>
	<RoomCard
		hotelRoomOptionListDataBinding={hotelRoomOptionListDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailHotelPage

