import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name:'tasks',
    initialState:{
        todos:[],
        reminders:[]
    },
    reducers:{
     addTask:(state,action) => {
        const { title,date,category } = action.payload;
        if(category === 'todo'){
            state.todos.push({title,completed:false,_id:Date.now()});
        }else{
            state.reminders.push({title,date,_id:Date.now()});
        }
     },   
     markCompleted:(state,action) => {
        state.todos.map(task => {if(task._id === action.payload) task.completed = true});
    },
    removeTask:(state,action) => {
        const ind = state.todos.findIndex(task => task._id === action.payload);
        state.todos.splice(ind,1);
    }

}

});

export const { addTask,markCompleted,removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;


