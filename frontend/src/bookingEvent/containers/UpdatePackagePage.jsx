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
import FormUpdatePackageForm from '../components/FormUpdatePackageForm'

import getPackageData from '../services/getPackageData'
const UpdatePackagePage = props => {
const [isLoading, setIsLoading] = useState({
	updatePackageForm: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [packageData, setPackageData] = useState()
const {packageId} = useParams()
const {eventId} = useParams()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updatePackageForm: true}))
		const { data: packageDataResponse } = await getPackageData({ packageId  })

	    setPackageData(packageDataResponse.data)

		console.log(packageDataResponse,"aaa")
	    setIsLoading(prev => ({...prev, updatePackageForm: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Update Package Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
				<Link to={`/event/${eventId}/package/${packageId}
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
		singularName={"Package"}
		isLoading={isLoading.updatePackageForm}
	>
		{packageData ? 
		(<>
		 <FormUpdatePackageForm
			{...{ 
				packageData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdatePackagePage

