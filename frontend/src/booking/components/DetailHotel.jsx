/*
  Generated on 23/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React from 'react';
import { useNavigate } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';

import deleteHotel from '../services/deleteHotel';

import * as Layouts from "@/commons/layouts";


const DetailHotel = ({ data }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();

  const updateHotel = async () => {
    navigate(
      `/admin/hotel/${data.id}/update`
    );
  };

  const [showModal, setShowModal] = React.useState({
    deleteHotel: false,
  });

  const confirmDeleteHotel = async () => {
    await deleteHotel({
      id: data.id,
    });
    navigate('/hotel');
  };


  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "image",
          condition: "",
          label: "Gambar",
          featureName: "imageUrl",
        }
        ,
        {
          id: "title",
          condition: "",
          label: "Title",
          featureName: "title",
        }
        ,
        {
          id: "location",
          condition: "",
          label: "Location",
          featureName: "location",
        }
        ,
        {
          id: "facilities",
          condition: "",
          label: "Facilities",
          featureName: "facilities",
        }

      ]}
      itemsEvents={
        [
          checkPermission("UpdateHotel") ? (
            <Button
              variant="secondary"
              onClick={() => updateHotel()}
            >
              Update Hotel
            </Button>
          ) : null,
          checkPermission("DeleteHotel") ? (
            <Button
              variant="secondary"
              onClick={() => setShowModal({ ...showModal, deleteHotel: true })}
            >
              Delete Hotel
            </Button>
          ) : null
        ]
      }
      itemsModals={
        [
          <Modal
            key='delete-hotel-modal'
            isShow={showModal.deleteHotel}
            title={"Delete Hotel Confirmation"}
            text={"Are you sure you want to delete this hotel?"}
          >
            <div className='flex flex-row justify-between gap-4'>
              <Button
                variant="tertiary"
                className="grow"
                onClick={() => setShowModal({ ...showModal, deleteHotel: false })}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                className="grow"
                onClick={confirmDeleteHotel}
              >
                Delete Hotel
              </Button>
            </div>
          </Modal>
        ]
      }
    />
  );
};

export default DetailHotel;
