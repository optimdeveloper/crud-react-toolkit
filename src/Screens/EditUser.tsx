import { Button } from '@mui/material';
import React from 'react'
import { withRouter } from "react-router-dom";
import UserForm from '../Components/UserForm';
import { history } from '../Utils/constants';



 function EditUser() {
    const reload = () => {
       
        history.push("/");
      
      };
  return (
     <div><UserForm edit={true}/> </div>
  )
}
export default EditUser