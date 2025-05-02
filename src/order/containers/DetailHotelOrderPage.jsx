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

import DetailHotelOrder from '../components/DetailHotelOrder'
import getDetailHotelOrderDataBinding from '../services/getDetailHotelOrderDataBinding'
const DetailHotelOrderPage = props => {
const { id } = useParams()

	const [isLoading, setIsLoading] = useState({
	detailHotelOrder: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailHotelOrderDataBinding, setDetailHotelOrderDataBinding] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailHotelOrder: true}))
			const { data: detailHotelOrderDataBinding } = await getDetailHotelOrderDataBinding({ id })
			setDetailHotelOrderDataBinding(detailHotelOrderDataBinding.data)
		} finally {
			setIsLoading(prev => ({...prev, detailHotelOrder: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Hotel Order Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/order
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Hotel Order"}
	singularName={"Hotel"}
	items={{...detailHotelOrderDataBinding}}
	isLoading={isLoading.detailHotelOrder}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailHotelOrder {...{ data : { ...detailHotelOrderDataBinding }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailHotelOrderPage

