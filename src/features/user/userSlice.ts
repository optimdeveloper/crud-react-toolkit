
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axios_mern } from '../../Api/axios'
import { UserModelState } from '../../models/user'


interface UserState {
  users: UserModelState[]
  error: any
  openModal: boolean,
  userSelected:UserModelState
}

const initialState: UserState = {
  users: [],
  error:null,
  openModal:false,
  userSelected: {name:'',document:'',address:'',phone:0}
}
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await axios_mern.get('')
    return response.data
  }
)
export const fetchAddUser = createAsyncThunk(
  'users/fetchAddUser',
  async (data:UserModelState) => {
    const response = await axios_mern.post('', data)
    return response.data
  }
)
export const fetchEditUser = createAsyncThunk(
  'users/fetchEditUser',
  async (item:UserModelState) => {
    await axios_mern.put('', item)
    const {data} = await axios_mern.get('')
    return data
  }
)
export const fetchDeleteUsers = createAsyncThunk(
  'users/fetchDeleteUsers',
  async (items:any) => {
   await axios_mern.post('delete_some',{users:items})
    const {data} = await axios_mern.get('')
    return data
  }
)
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserSelected(state, action) {
      state.userSelected=action.payload
    },
    openModal(state, action) {
      state.openModal=action.payload
    },
    closeModal(state, action) {
      state.openModal=action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAddUser.fulfilled, (state, action) => {
      state.users.unshift(action.payload.user)
    })
    builder.addCase(fetchAddUser.rejected, (state) => {
      state.error='error'
    })
    builder.addCase(fetchEditUser.fulfilled, (state, action) => {
       state.users= action.payload.users
    })
    builder.addCase(fetchEditUser.rejected, (state) => {
      state.error='error'
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users=action.payload.users
    })
    builder.addCase(fetchUsers.rejected, (state) => {
      state.error='error'
    })
    builder.addCase(fetchDeleteUsers.fulfilled, (state, action) => {
      state.users= action.payload.users
    })
    builder.addCase(fetchDeleteUsers.rejected, (state) => {
      state.error='error'
    })
  
  },
})


export const {openModal,closeModal,setUserSelected}=userSlice.actions

export default userSlice.reducer