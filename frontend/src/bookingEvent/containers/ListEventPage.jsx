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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import EventCard from "../components/EventCard";

import getListEventDataBinding from '../services/getListEventDataBinding'
const ListEventPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listRowEvent: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listEventDataBinding, setListEventDataBinding] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRowEvent: true}))
				const { data: listEventDataBinding } = await getListEventDataBinding()
				setListEventDataBinding(listEventDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRowEvent: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("List Event Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreateEvent") &&  (
			  	  <Link to={`/event/add
			  	  `}>
			  	  	<Button className="p-2" variant="primary">
			  	  	  Add Event
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"ListRow Event"}
	singularName={"Event"}
	items={[listEventDataBinding]}
	isLoading={isLoading.listRowEvent}
>
	<EventCard
		listEventDataBinding={listEventDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ListEventPage

