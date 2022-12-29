import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../app/store';
import {closeModal} from '../features/user/userSlice'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export default function ModalUser() {
    const dispatch = useDispatch<AppDispatch>()
  const openModal = useSelector((state:RootState) => state.users.openModal)
  console.log('open modal',openModal)
 const user = useSelector((state:RootState) => state.users.userSelected)
 const handleClose = () => dispatch(closeModal(false));
  return (
    <Modal
  open={openModal}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Nombre : {user.name}
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
     Nro Documento : {user.document}
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
     Direccion: {user.address}
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
     Telefono: {user.phone}
    </Typography>
  </Box>
</Modal>
  )
}
