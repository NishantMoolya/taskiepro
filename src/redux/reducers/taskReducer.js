import { createSlice } from "@reduxjs/toolkit";
import { getAllTasks,addTask, updateTask, removeTask } from "../api/taskApi";

const tasksSlice = createSlice({
    name:'tasks',
    initialState:{
        todos:[],
        reminders:[],
        isLoading:true
    },
    reducers:{
     deleteTask:(state,action) => {
        const { _id,category } = action.payload;
        if(category === 'todo'){
            const ind = state.todos.findIndex(todo => todo._id === _id);
            state.todos.splice(ind,1);
        }else if(category === 'reminder'){
            const ind = state.reminders.findIndex(reminder => reminder._id === _id);
            state.reminders.splice(ind,1);
        }
    },
    markCompleted:(state,action) => {
        const { completed,_id } = action.payload;
        state.todos.map(todo => {
            if(todo._id === _id){    
                todo.completed = completed;
                return todo;
            }else return todo;
        });
    }
},
extraReducers:(builder) => {
    builder.addCase(getAllTasks.pending, (state,action) => {
        state.isLoading = true
    })
    .addCase(getAllTasks.fulfilled, (state,action) => {
        if(action.payload.category === 'todos'){
            state.todos = action.payload.payload;
            state.isLoading = false;
        }else if(action.payload.category === 'reminders'){
            state.reminders = action.payload.payload;
            state.isLoading = false;
        }else{
            state.isLoading = false;
            return state;
        }
    })
    .addCase(getAllTasks.rejected, (state,action) => {
        state.isLoading = false
    })

    builder.addCase(addTask.pending, (state,action) => {
        state.isLoading = true;
    })
    .addCase(addTask.fulfilled, (state,action) => {
        const { task } = action.payload;
        if(task != null){
            if(action.payload.category === "todo"){
                state.todos = [...state.todos,task];
                state.isLoading = false;
            }else if(action.payload.category === "reminder"){
                state.reminders = [...state.reminders,task];
                state.isLoading = false;
            }
        }
    })
    .addCase(addTask.rejected, (state,action) => {
        state.isLoading = false;
    })

    builder.addCase(updateTask.fulfilled, (state,action) => {

    });

    builder.addCase(removeTask.fulfilled, (state,action) => {

    });
}

});

export const { deleteTask,markCompleted } = tasksSlice.actions;
export default tasksSlice.reducer;


