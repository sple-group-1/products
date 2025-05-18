/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const BlogCard = ({ listBlogDataBinding,
		 

	}) => {
  const { checkPermission } = useAuth();
  const {id } = useParams()
  const detail = async (blogItem) => {
    isMobile() && navigate(`/blog/${blogItem.id}`
    );
  };
  return (
    <Layouts.ListComponentCardLayout
    items={[listBlogDataBinding]}
    detail={detail}
  	isRow
  	itemsAttrs={[
          {
            id: "title",
            condition: "",
            label: "Title",
  		  featureName: "title",
            editable: false
          },
          {
            id: "createdAt",
            condition: "",
            label: "Created At",
  		  featureName: "createdAt",
            editable: false
          }
  ]}
      itemsEvents={(blogItem) => [
        
        <Link to={`/blog/${blogItem.id}`}>
          <Button
            size="sm"
            variant=
                "primary"
          >
            Detail
          </Button>
        </Link>
        
        
  	]}
    />
  )	
};

export default BlogCard;
