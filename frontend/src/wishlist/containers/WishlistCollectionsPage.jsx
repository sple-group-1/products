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
import WishlistTable from "../components/WishlistTable";

import getListCollections from '../services/getListCollections'
const WishlistCollectionsPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableWishlistCollections: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listCollections, setListCollections] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableWishlistCollections: true}))
				const { data: listCollections } = await getListCollections()
				setListCollections(listCollections.data)
			} finally {
				setIsLoading(prev => ({...prev, tableWishlistCollections: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Wishlist Collections Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/wishlist/collections/add
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Add Collection
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Wishlist Collections"}
	singularName={"Wishlist"}
	items={[listCollections]}
	isLoading={isLoading.tableWishlistCollections}
>
	<WishlistTable
		listCollections={listCollections}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default WishlistCollectionsPage

