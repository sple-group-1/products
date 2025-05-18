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
import FormUpdateEventForm from '../components/FormUpdateEventForm'

import getEventData from '../services/getEventData'
const UpdateEventPage = props => {
const { eventId, packageId } = useParams()

	const [isLoading, setIsLoading] = useState({
	updateEventForm: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [eventData, setEventData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updateEventForm: true}))
		const { data: eventDataResponse } = await getEventData({ eventId  })

	    setEventData(eventDataResponse.data)


	    setIsLoading(prev => ({...prev, updateEventForm: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Update Event Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/event/${eventId}
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Event"}
		isLoading={isLoading.updateEventForm}
	>
		{eventData ? 
		(<>
		 <FormUpdateEventForm
			{...{ 
				eventData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateEventPage

