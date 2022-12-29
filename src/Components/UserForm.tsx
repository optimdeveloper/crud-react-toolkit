

import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from 'react-redux'
import {fetchAddUser, fetchEditUser} from '../features/user/userSlice'
import { AppDispatch } from "../app/store";
import type { RootState } from '../app/store'

import { useEffect } from "react";

const useStyles = makeStyles({
  container: {
    margin:'10px',

    '& .MuiTextField-root': {
      margin: '10px',
      width: '300px',
    },
   
  },
});

export default function UserForm({edit}:any) {
  const classes= useStyles()
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state:RootState) => state.users.userSelected)
    const { handleSubmit, control,reset, setValue } = useForm();
    const onSubmit = (data:any) => {
      if(edit){
        dispatch(fetchEditUser({...data,id:user._id}))
      }else{
        dispatch(fetchAddUser(data))
        reset();
      }
     
    };
    useEffect(()=>{
    if(edit){
      setValue('name',user.name)
      setValue('document',user.document)
      setValue('address',user.address)
      setValue('phone',user.phone)
    }
    },[])
  return (
    <div className={classes.container}>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Nombre requerido' }}
            render={({ field: { onChange, value },fieldState: { error } }) => (
                <TextField
                error={!!error}
                  helperText={error ? error.message : null}
                  label="Nombre"
                  value={value}
                  onChange={onChange}
                />
              )}
              />
              <Controller
            name="document"
            control={control}
            defaultValue=""
            rules={{ required: 'Nro. documento requerido' }}
            render={({ field: { onChange, value },fieldState: { error } }) => (
                <TextField
                error={!!error}
                  helperText={error ? error.message : null}
                  label="Nro. documento"
                  value={value}
                  onChange={onChange}
                />
              )}
              />
      </div>
      <div>
      <Controller
            name="address"
            control={control}
            defaultValue=""
            rules={{ required: 'Dirección requerido' }}
            
            render={({ field: { onChange, value }, fieldState: { error }}) => (
                <TextField
                
                 error={!!error}
                  helperText={error ? error.message : null}
                  label="Dirección"
                  value={value}
                  onChange={onChange}
                />
              )}
              />
        <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{ required: 'Teléfono requerido' }}
            render={({ field: { onChange, value },fieldState: { error }}) => (
                <TextField
                error={!!error}
                  helperText={error ? error.message : null}
                  label="Teléfono"
                  value={value}
                  onChange={onChange}
                />
              )}
              />
      </div>
     {!edit ?  <Button type="submit" variant="contained" color="primary">
          Agregar Usuario
        </Button>:
        <Button type="submit" variant="contained" color="primary">
          Editar Usuario
        </Button>}
     
    </form>
    </div>
   
  );
}
