/*
  Generated on 23/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteHotel from '../services/deleteHotel';
import deleteRoomOption from '../services/deleteRoomOption';

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

  const confirmDeleteRoomOption = async () => {
    await deleteRoomOption({
    });
    navigate('/hotel/:id');
  };

  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "title",
          condition: "",
          label: "Title",
          featureName: "title",
        }
        ,
        {
          id: "image",
          condition: "",
          label: "Image",
          featureName: "imageUrls",
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
