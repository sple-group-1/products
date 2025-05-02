/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';


import deleteWishlist from '../services/deleteWishlist'

import * as Layouts from "@/commons/layouts";

const WishlistTable = ({ listWishlist,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  
  const [selectedDeleteWishlistConfirmation, setSelectedDeleteWishlistConfirmation] = React.useState(null);
  
  
  	const {  } = useParams();
  
  const [showModalDeleteWishlistConfirmation, setShowModalDeleteWishlistConfirmation] = React.useState(false);
  
  
  
  	
    const deleteWishlist = async (selectedDeleteWishlistConfirmation) => {
      await deleteWishlist({
      });
  		navigate('/wishlist/:collectionId');
    }
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listWishlist]}
  	  itemsAttrs={[
          {
            id: "addedAt",
            condition: "",
            label: "addedAt",
  		  featureName: "addedAt",
            editable: false
          }
  ]}
        itemsEvents={(wishlistItem) => [
          
          <Link to=''>
            <Button
              size="sm"
              variant=
                          "secondary"
            >
              Delete Wishlist
            </Button>
          </Link>
          
          
        ]}
  	/>
  		
  </>
  )
};

export default WishlistTable;
