import {createSlice} from '@reduxjs/toolkit';

const todoslice= createSlice(
    {
   name:'todo',
   initialState:{
    items:{
        id:0,
        name:'',
        age:'',
        tech:''
    }
   },
   reducers:{
    addTodo:(state,action)=>{
    state.items={
        ...state.items,
        
        id: Math.random(),
        name: action.payload.name,
        age: action.payload.age,
         tech:action.payload.tech,
      }
    },

   }

})
 
export  const {addTodo}  = todoslice.actions;


export  default todoslice.reducer;