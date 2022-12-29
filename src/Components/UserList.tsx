/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../app/store'
import { AppDispatch } from '../app/store';
import {fetchUsers, openModal,} from '../features/user/userSlice'
import {setUserSelected, } from '../features/user/userSlice'
import {fetchDeleteUsers} from '../features/user/userSlice'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { UserModelState } from '../models/user';

import { useHistory, useLocation, withRouter } from 'react-router-dom';


function UserList() {
  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector((state:RootState) => state.users.users)

  const history = useHistory();
 
  const reload = (user:any) => {
    dispatch(setUserSelected(user))
    dispatch(openModal(false)) 
    history.push("/edit");
  
  };
  const see = (user:any) => {
    dispatch(setUserSelected(user))
    dispatch(openModal(true))   
  
  };
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Nombre', width: 130 },
    { field: 'document', headerName: 'Nro. Documento', width: 130 },
    { field: 'address', headerName: 'Dirección', width: 130 },
    { field: 'phone', headerName: 'Teléfono', width: 130 },
    {
      field: "action1",
      headerName: "Action",
      sortable: false,
      renderCell: (params:any) => {
        const onClick = (e:any) => {
          e.stopPropagation();
          console.log(params)
          const user=users.find((user:UserModelState)=>user._id===params.id)
          return see(user);
        };
  
        return <Button onClick={onClick}>Ver</Button>;
      }
    },
    {
      field: "action2",
      headerName: "Action",
      sortable: false,
      renderCell: (params:any) => {
        const onClick = (e:any) => {
          e.stopPropagation();
          console.log(params)
          const user=users.find((user:UserModelState)=>(user._id===params.id))
          
           return reload(user)
          
        };
  
        return <Button onClick={onClick}>Editar</Button>;
      }
    },
  
  ]
  const[ids,setIds]=useState([])

  useEffect(()=>{
     dispatch(fetchUsers())
  },[])
  return (
<div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row: any) =>  row._id}
        onSelectionModelChange={(ids:any) => {
          setIds(ids)
        }}
      />
      {ids.length !==0 && <Button onClick={()=>dispatch(fetchDeleteUsers(ids))} variant="contained" color="primary">
          Borrar Usuarios
        </Button>}
    </div>
  )
}
export default withRouter(UserList)

