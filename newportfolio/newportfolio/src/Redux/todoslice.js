import {createSlice} from '@reduxjs/toolkit';

const todoslice= createSlice(
    {
   name:'todo',
   initialState:{
    items:[]
   },
   reducers:{
    addTodo:(state,action)=>{
    state.items.push({
        id: state.items.length + 1,
        name: action.payload.name,
        age: action.payload.age,
         tech:action.payload.tech,
      })
    },

   }

})
 
export  const {addTodo}  = todoslice.actions;


export  default todoslice.reducer;