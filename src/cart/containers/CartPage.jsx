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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import CartItemCardForm from "../components/CartItemCardForm";
import getDataBinding from '../services/getDataBinding'
const CartPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listRowCartItem: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataBinding, setDataBinding] = useState()
	
	const [selectedItems, setSelectedItems] = useState([])
	const [edited, setEdited] = useState([])
	const { itemId } = useParams()

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
	  if (dataBinding) {
	    setEdited(dataBinding)
	  }
	}, [dataBinding])
	
	const handleChange = (updatedItems) => {
		setEdited(
			(prevData) =>
			prevData.map((p, idx) => ({
				...p,
				...updatedItems[idx],
			}))
		);
	};

	
	useEffect(() => {
		setTitle("CartPage")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
{isLoading.listRowCartItem ? (
	<div className="flex justify-center items-center h-full">
 		<Spinner />
	</div>
) : (
	<Layouts.FormContainerLayout
		title={"ListRow CartItem"}
		singularName={"CartItem"}
	>
		<CartItemCardForm
			dataBinding={dataBinding}
			edited={[edited]}
			itemId={itemId}
        	handleChange={handleChange}
			selectedItems={selectedItems}
			setSelectedItems={setSelectedItems}
			isLoading={isLoading.listRowCartItem}
			
		/>
	</Layouts.FormContainerLayout>
)}

	</Layouts.ViewContainerLayout>
  )
}
export default CartPage

