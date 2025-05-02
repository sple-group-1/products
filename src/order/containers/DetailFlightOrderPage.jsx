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

import DetailFlightOrder from '../components/DetailFlightOrder'
import getDetailFlightOrderDataBinding from '../services/getDetailFlightOrderDataBinding'
const DetailFlightOrderPage = props => {
const { id } = useParams()

	const [isLoading, setIsLoading] = useState({
	detailFlightOrder: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailFlightOrderDataBinding, setDetailFlightOrderDataBinding] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailFlightOrder: true}))
			const { data: detailFlightOrderDataBinding } = await getDetailFlightOrderDataBinding({ id })
			setDetailFlightOrderDataBinding(detailFlightOrderDataBinding.data)
		} finally {
			setIsLoading(prev => ({...prev, detailFlightOrder: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Flight Order Page")
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
	title={"Detail Flight Order"}
	singularName={"Flight"}
	items={{...detailFlightOrderDataBinding}}
	isLoading={isLoading.detailFlightOrder}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailFlightOrder {...{ data : { ...detailFlightOrderDataBinding }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailFlightOrderPage

