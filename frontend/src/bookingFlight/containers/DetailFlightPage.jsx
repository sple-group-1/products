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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import DetailFlight from '../components/DetailFlight'
import getDetailFlightDataBinding from '../services/getDetailFlightDataBinding'
import ClassCard from "../components/ClassCard";

import getFlightClassOptionListDataBinding from '../services/getFlightClassOptionListDataBinding'
const DetailFlightPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	detailFlight: false,
	listClassOption: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailFlightDataBinding, setDetailFlightDataBinding] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailFlight: true}))
			const { data: detailFlightDataBinding } = await getDetailFlightDataBinding({ id })
			setDetailFlightDataBinding(detailFlightDataBinding.data)
		} finally {
			setIsLoading(prev => ({...prev, detailFlight: false}))
		}
	}
	fetchData()
}, [])
const [flightClassOptionListDataBinding, setFlightClassOptionListDataBinding] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listClassOption: true}))
				const { data: flightClassOptionListDataBinding } = await getFlightClassOptionListDataBinding()
				setFlightClassOptionListDataBinding(flightClassOptionListDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listClassOption: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Detail Flight Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`flight/:id/classoption/add
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Add Class Option
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Flight"}
	singularName={"Flight"}
	items={{...detailFlightDataBinding}}
	isLoading={isLoading.detailFlight}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailFlight {...{ data : { ...detailFlightDataBinding }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerCardLayout
	title={"List Class Option"}
	singularName={"Class"}
	items={[flightClassOptionListDataBinding]}
	isLoading={isLoading.listClassOption}
>
	<ClassCard
		flightClassOptionListDataBinding={flightClassOptionListDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailFlightPage

