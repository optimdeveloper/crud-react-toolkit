import React from 'react'

import { withRouter } from "react-router-dom";

import { Button } from '@mui/material';
import UserForm from '../Components/UserForm'
import UserList from '../Components/UserList'
import { history } from '../Utils/constants';

 function Home() {
  
  return (
    <div>
        <UserForm/>
        <UserList/>
    </div>
  )
}
export default Home
