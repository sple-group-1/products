/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
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
import RoomCard from "../components/RoomCard";

import getRoomOptionAvailabilityData from '../services/getRoomOptionAvailabilityData'
const ListRoomOptionAvailabilityPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listRoomOptionAvailability: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [roomOptionAvailabilityData, setRoomOptionAvailabilityData] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRoomOptionAvailability: true}))
				const { data: roomOptionAvailabilityData } = await getRoomOptionAvailabilityData()
				setRoomOptionAvailabilityData(roomOptionAvailabilityData.data)
			} finally {
				setIsLoading(prev => ({...prev, listRoomOptionAvailability: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("List Room Option Availability Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/admin/hotel/${hotelId}/room-option/${roomId}/availability/add
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Add Room Option Availability
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Room Option Availability"}
	singularName={"Room"}
	items={[roomOptionAvailabilityData]}
	isLoading={isLoading.listRoomOptionAvailability}
>
	<RoomCard
		roomOptionAvailabilityData={roomOptionAvailabilityData}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ListRoomOptionAvailabilityPage

