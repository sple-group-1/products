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
import { useSearchParams } from "react-router";
import FormUpdateFlight from '../components/FormUpdateFlight'
const UpdateFlightPage = props => {
const [isLoading, setIsLoading] = useState({
	updateFlight: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [flightData, setFlightData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updateFlight: true}))
		const { data: flightDataResponse } = await getFlightData({ id  })

	    setFlightData(flightDataResponse.data)


	    setIsLoading(prev => ({...prev, updateFlight: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Update Flight Page")
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
		singularName={"Flight"}
		isLoading={isLoading.updateFlight}
	>
		{flightData ? 
		(<>
		 <FormUpdateFlight
			{...{ 
				flightData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateFlightPage

