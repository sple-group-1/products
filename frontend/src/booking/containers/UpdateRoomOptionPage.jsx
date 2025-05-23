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
import FormUpdateRoomOption from '../components/FormUpdateRoomOption'

import getRoomOptionData from '../services/getRoomOptionData'
const UpdateRoomOptionPage = props => {
const { hotelId, roomId } = useParams()

	const [isLoading, setIsLoading] = useState({
	updateRoomOption: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [roomOptionData, setRoomOptionData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updateRoomOption: true}))
		const { data: roomOptionDataResponse } = await getRoomOptionData({   })

	    setRoomOptionData(roomOptionDataResponse.data)


	    setIsLoading(prev => ({...prev, updateRoomOption: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Update Room Option Page")
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
		singularName={"Room"}
		isLoading={isLoading.updateRoomOption}
	>
		{roomOptionData ? 
		(<>
		 <FormUpdateRoomOption
			{...{ 
				roomOptionData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateRoomOptionPage

