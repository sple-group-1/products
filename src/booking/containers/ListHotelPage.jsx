/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
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
import HotelCard from "../components/HotelCard";

import getListHotelDataBinding from '../services/getListHotelDataBinding'
const ListHotelPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listRowHotel: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listHotelDataBinding, setListHotelDataBinding] = useState()
	
	
	


	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRowHotel: true}))
				const { data: listHotelDataBinding } = await getListHotelDataBinding()
				setListHotelDataBinding(listHotelDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRowHotel: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("List Hotel Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/hotel
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  back
			  		</Button>
			  	</Link>
			  	
			  	
			  	<Link to={`/admin/hotel/add
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Add Hotel
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"ListRow Hotel"}
	singularName={"Hotel"}
	items={[listHotelDataBinding]}
	isLoading={isLoading.listRowHotel}
>
	<HotelCard
		listHotelDataBinding={listHotelDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ListHotelPage

