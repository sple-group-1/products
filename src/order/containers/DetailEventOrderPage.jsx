/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailEventOrder from '../components/DetailEventOrder'
import getDetailEventOrderDataBinding from '../services/getDetailEventOrderDataBinding'
const DetailEventOrderPage = props => {
const { orderId } = useParams()

	const [isLoading, setIsLoading] = useState({
	detailEventOrder: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailEventOrderDataBinding, setDetailEventOrderDataBinding] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailEventOrder: true}))
			const { data: detailEventOrderDataBinding } = await getDetailEventOrderDataBinding({ orderId })
			setDetailEventOrderDataBinding(detailEventOrderDataBinding.data)
		} finally {
			setIsLoading(prev => ({...prev, detailEventOrder: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Event Order Page")
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
	title={"Detail Event Order"}
	singularName={"Event"}
	items={{...detailEventOrderDataBinding}}
	isLoading={isLoading.detailEventOrder}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailEventOrder {...{ data : { ...detailEventOrderDataBinding }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailEventOrderPage

