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
import { useSearchParams } from "react-router";
import { useAuth } from '@/commons/auth';
import FormUpdatePackageForm from '../components/FormUpdatePackageForm'

import getPackageData from '../services/getPackageData'
const UpdatePackagePage = props => {
const { packageId } = useParams()
	const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	updatePackageForm: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [packageData, setPackageData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updatePackageForm: true}))
		const { data: packageDataResponse } = await getPackageData({ eventId  })

	    setPackageData(packageDataResponse.data)


	    setIsLoading(prev => ({...prev, updatePackageForm: false}))
    }
	if (checkPermission("UpdatePackage")) { 
		fetch()
	}
  }, [])

	
	useEffect(() => {
		setTitle("Update Package Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/event/:eventId/package/${packageId}
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
{ checkPermission("UpdatePackage") && ( 
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

)}

	</Layouts.ViewContainerLayout>
  )
}
export default UpdatePackagePage

