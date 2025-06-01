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
import FlightCard from "../components/FlightCard";

import getListFlightDataBinding from '../services/getListFlightDataBinding'
const ListFlightPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listRowFlight: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listFlightDataBinding, setListFlightDataBinding] = useState()
	
	
	


	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRowFlight: true}))
				const { data: listFlightDataBinding } = await getListFlightDataBinding()
				setListFlightDataBinding(listFlightDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRowFlight: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("List Flight Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	
			  	
			  	<Link to={`/flight/add
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Add Flight
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"ListRow Flight "}
	singularName={"Flight"}
	items={[listFlightDataBinding]}
	isLoading={isLoading.listRowFlight}
>
	<FlightCard
		listFlightDataBinding={listFlightDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ListFlightPage

