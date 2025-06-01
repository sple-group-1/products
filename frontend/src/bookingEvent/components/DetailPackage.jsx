/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deletePackage from '../services/deletePackage';

import * as Layouts from "@/commons/layouts";


const DetailPackage = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalDeletePackageConfirmation, setShowModalDeletePackageConfirmation] = React.useState(false); 
    
    const updatePackage = async () => {
      navigate(
        '/event/:eventId/updatepackage?'
        + `packageId=${data.packageId}`
        
      );
    };
    
    const order = async () => {
      navigate(
        '/event/:eventId/package/:packageId/placeorder?'
        + `eventId=${data.eventId}`
        + '&'
        + `packageId=${data.packageId}`
        
      );
    };
    
  
    const deletePackage = async () => {
      await deletePackage({
        packageId: data.packageId,
      });
      navigate('/event/:eventId');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "packageName",
          condition: "",
          label: "Package Name",
          featureName: "packageName",
        }
        ,
        {
          id: "price",
          condition: "",
          label: "Price",
          featureName: "price",
        }
        
      ]}
      itemsEvents={[
            checkPermission("DeletePackage") &&  (
              <Button
                variant="secondary"
                onClick={() => setShowModalDeletePackageConfirmation(true)}
              >
                Delete Package
              </Button>
            )
        ,
            checkPermission("UpdatePackage") &&  (
              <Button
                variant="secondary"
                onClick={() => updatePackage()}
              >
                Update Package
              </Button>
            )
        ,
            <Button
          variant="secondary"
          onClick={() => order()}
        >
          Order
        </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalDeletePackageConfirmation}
           title={"Delete Package Confirmation"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalDeletePackageConfirmation(false)}>Batal</Button></Link>
          <Button
            variant="secondary"
            onClick={() => deletePackage()}
          >
            Delete Package
          </Button>
        </Modal>
        
      ]}
    />
  );
};

export default DetailPackage;
