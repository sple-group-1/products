/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
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
import FormForm from '../components/FormForm'

import getRoomOptionAvailabilityData from '../services/getRoomOptionAvailabilityData'
const UpdateRoomOptionAvailability = props => {
const { hotelId, id, roomId } = useParams()

	const [isLoading, setIsLoading] = useState({
	form: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [roomOptionAvailabilityData, setRoomOptionAvailabilityData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, form: true}))
		const { data: roomOptionAvailabilityDataResponse } = await getRoomOptionAvailabilityData({   })

	    setRoomOptionAvailabilityData(roomOptionAvailabilityDataResponse.data)


	    setIsLoading(prev => ({...prev, form: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Update Room Option Availability")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={""}
		isLoading={isLoading.form}
	>
		{roomOptionAvailabilityData ? 
		(<>
		 <FormForm
			{...{ 
				roomOptionAvailabilityData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateRoomOptionAvailability

