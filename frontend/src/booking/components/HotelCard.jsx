/*
  Generated on 23/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const HotelCard = ({ listHotelDataBinding }) => {
  const { checkPermission } = useAuth();

  // Get current query parameters
  const searchParams = useParams();

  // Function to build URL with preserved query parameters
  const buildDetailLink = (hotelId) => {
    // Create the base URL for the detail page
    let detailUrl = `/hotel/${hotelId}`;

    // If there are query parameters, append them to the URL
    if (searchParams && Object.keys(searchParams).length > 0) {
      const queryString = new URLSearchParams(searchParams).toString();
      detailUrl = `${detailUrl}?${queryString}`;
    }
    console.log("detailUrl", detailUrl);
    return detailUrl;
  };

  return (
    <Layouts.ListComponentCardLayout
      items={[listHotelDataBinding]}
      itemsAttrs={[
        {
          id: "image",
          condition: "",
          label: "",
          featureName: "imageUrl",
          editable: false
        },
        {
          id: "title",
          condition: "",
          label: "Title",
          featureName: "title",
          editable: false
        },
        {
          id: "startPrice",
          condition: "",
          label: "Start Price",
          featureName: "startPrice",
          editable: false
        },
        {
          id: "location",
          condition: "",
          label: "Location",
          featureName: "location",
          editable: false
        }
      ]}
      itemsEvents={(hotelItem) => [
        <Link to={buildDetailLink(hotelItem.id)} key={`detail-${hotelItem.id}`}>
          <Button
            size="sm"
            variant="primary"
          >
            Detail
          </Button>
        </Link>
      ]}
    />
  )
};

export default HotelCard;