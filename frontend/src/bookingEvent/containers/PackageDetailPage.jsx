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
import { useAuth } from '@/commons/auth';
import DetailPackage from '../components/DetailPackage'
import getDetailPackageDataBinding from '../services/getDetailPackageDataBinding'
const PackageDetailPage = props => {
const { packageId } = useParams()
	const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	detailPackage: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailPackageDataBinding, setDetailPackageDataBinding] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailPackage: true}))
			const { data: detailPackageDataBinding } = await getDetailPackageDataBinding({ packageId, eventId })
			setDetailPackageDataBinding(detailPackageDataBinding.data)
		} finally {
			setIsLoading(prev => ({...prev, detailPackage: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Package Detail Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/event/${eventId}
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
	title={"Detail Package"}
	singularName={"Package"}
	items={{...detailPackageDataBinding}}
	isLoading={isLoading.detailPackage}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailPackage {...{ data : { ...detailPackageDataBinding }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default PackageDetailPage

