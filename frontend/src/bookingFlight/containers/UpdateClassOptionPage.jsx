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
import FormUpdateClassOption from '../components/FormUpdateClassOption'
const UpdateClassOptionPage = props => {
const [isLoading, setIsLoading] = useState({
	updateClassOption: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [classOptionData, setClassOptionData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updateClassOption: true}))
		const { data: classOptionDataResponse } = await getClassOptionData({ id  })

	    setClassOptionData(classOptionDataResponse.data)


	    setIsLoading(prev => ({...prev, updateClassOption: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Update Class Option Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Class"}
		isLoading={isLoading.updateClassOption}
	>
		{classOptionData ? 
		(<>
		 <FormUpdateClassOption
			{...{ 
				classOptionData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateClassOptionPage

