/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteBlog from '../services/deleteBlog';

import * as Layouts from "@/commons/layouts";


const DetailBlog = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalDeleteBlogConfirmation, setShowModalDeleteBlogConfirmation] = React.useState(false); 
    
    const updateBlog = async () => {
      navigate(
        '/blog/update?'
        + `id=${data.id}`
        
      );
    };
    
  
    const deleteBlog = async () => {
      await deleteBlog({
        id: data.id,
      });
      navigate('/blog');
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
          id: "createdAt",
          condition: "",
          label: "Created At",
          featureName: "createdAt",
        }
        ,
        {
          id: "content",
          condition: "",
          label: "Content",
          featureName: "content",
        }
        
      ]}
      itemsEvents={[
            checkPermission("DeleteBlog") &&  (
              <Button
                variant="secondary"
                onClick={() => setShowModalDeleteBlogConfirmation(true)}
              >
                Delete Blog
              </Button>
            )
        ,
            checkPermission("UpdateBlog") &&  (
              <Button
                variant="secondary"
                onClick={() => updateBlog()}
              >
                Update Blog
              </Button>
            )
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalDeleteBlogConfirmation}
           title={"Delete Blog Confirmation"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalDeleteBlogConfirmation(false)}>Batal</Button></Link>
          <Button
            variant="danger"
            onClick={() => deleteBlog()}
          >
            Delete Blog
          </Button>
        </Modal>
        
      ]}
    />
  );
};

export default DetailBlog;
