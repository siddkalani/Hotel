import {createSlice} from '@reduxjs/toolkit'


const sidebarSlice = createSlice({
    name:'sidebar',
    initialState:false,
    reducers:{
        toggleSidebar:(state,action)=>{
        return !state
        }
    }
})

export const sidebarActions = sidebarSlice.actions
export default sidebarSlice