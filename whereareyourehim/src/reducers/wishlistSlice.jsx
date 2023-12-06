import { createSlice } from '@reduxjs/toolkit'

const initialState={
    value:[]
}

export const wishlistSlice =createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        addWishlist:(state,action)=>{
            state.value.push(action.payload)
        },
        removeWishlist:(state,action)=>{
            state.value = state.value.filter((i)=>i.id !== action.payload)
        }
    }
})
export const {addWishlist,removeWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer 
