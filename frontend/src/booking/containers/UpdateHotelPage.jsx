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
import FormUpdateHotel from '../components/FormUpdateHotel'

import getHotelData from '../services/getHotelData'
const UpdateHotelPage = props => {
const [isLoading, setIsLoading] = useState({
	updateHotel: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [hotelData, setHotelData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updateHotel: true}))
		const { data: hotelDataResponse } = await getHotelData({ id  })

	    setHotelData(hotelDataResponse.data)


	    setIsLoading(prev => ({...prev, updateHotel: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Update Hotel Page")
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
		singularName={"Hotel"}
		isLoading={isLoading.updateHotel}
	>
		{hotelData ? 
		(<>
		 <FormUpdateHotel
			{...{ 
				hotelData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateHotelPage

