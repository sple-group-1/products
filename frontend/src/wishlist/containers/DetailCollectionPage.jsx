/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
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

import getListWishlist from '../services/getListWishlist'
const DetailCollectionPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableWishlist: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listWishlist, setListWishlist] = useState()
	
	
	


useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableWishlist: true}))
				const { data: listWishlist } = await getListWishlist({ collectionId })
				setListWishlist(listWishlist.data)
			} finally {
				setIsLoading(prev => ({...prev, tableWishlist: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Detail Collection Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/wishlist/collections
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			  	
			  	
			  	<Link to={`/wishlist/:collectionId/add
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Add Wishlist
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Wishlist"}
	singularName={"Wishlist"}
	items={[listWishlist]}
	isLoading={isLoading.tableWishlist}
>
	<WishlistTable
		listWishlist={listWishlist}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailCollectionPage

