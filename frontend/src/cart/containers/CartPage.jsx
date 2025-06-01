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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import CartItemCard from "../components/CartItemCard";

import getDataBinding from '../services/getDataBinding'
import checkoutcartitem from '../services/checkoutcartitem'
const CartPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listRowCartItem: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataBinding, setDataBinding] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRowCartItem: true}))
				const { data: dataBinding } = await getDataBinding()
				setDataBinding(dataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listRowCartItem: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("CartPage")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"ListRow CartItem"}
	singularName={"CartItem"}
	items={[dataBinding]}
	isLoading={isLoading.listRowCartItem}
>
	<CartItemCard
		dataBinding={dataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CartPage

