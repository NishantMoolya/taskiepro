import { createSlice } from "@reduxjs/toolkit";
import { getAllTasks,addTask, updateTask, removeTask } from "../api/taskApi";

const tasksSlice = createSlice({
    name:'tasks',
    initialState:{
        todos:[],
        reminders:[]
    },
    reducers:{
     markCompleted:(state,action) => {
        state.todos.map(task => {if(task._id === action.payload) task.completed = true});
    },
    updateTitle:(state,action) => {
        state.todos.map(task => {if(task._id === action.payload._id) task.title = action.payload.title});
    }
},
extraReducers:(builder) => {
    builder.addCase(getAllTasks.fulfilled, (state,action) => {
        state.todos = action.payload.todos;
        state.reminders = action.payload.reminders;
    });
    builder.addCase(addTask.fulfilled, (state,action) => {
        const { task } = action.payload;
        if(task != null){
            if(action.payload.category === "todo"){
                state.todos = [...state.todos,task];
            }else if(action.payload.category === "reminder"){
                state.reminders = [...state.reminders,task];
            }
        }
    });
    builder.addCase(updateTask.fulfilled, (state,action) => {

    });
    builder.addCase(removeTask.fulfilled, (state,action) => {

    });
}

});

export const { markCompleted,updateTitle } = tasksSlice.actions;
export default tasksSlice.reducer;


