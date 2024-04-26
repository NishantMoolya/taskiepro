import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = process.env.REACT_APP_BASE_URL;

const getAllTasks = createAsyncThunk("getAllTasks", async (category) => {
    try {
        const res = await fetch(`${baseURL}/task/${category}`,{
            method:"GET",
            headers:{"Content-Type":"application/json"},
            credentials:'include'
        });
        if(res.status === 200){
            return await res.json();
        }else{
            return { category:null,payload:null };
        }
    } catch (err) {
        console.log(`an error in getting tasks:${err}`);
        return { category:null,payload:null };
    }
});

const addTask = createAsyncThunk("addTask", async (task) => {
    try {
        const { category } = task;
        if(category === "reminder"){
            task = { task:{
                title:task.title,
                interval:task.interval,
                date:task.date
            },
            category
        }
        }else if(category === "todo"){
            task = {
                category,
                task:{
                    title:task.title,
                    completed:false
                }
            }
        }
        const res = await fetch(`${baseURL}/task`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            credentials:'include',
            body:JSON.stringify(task)
        });
        if(res.status === 201){
            return await res.json();
        }else{
            return { task:null };
        }
    } catch (err) {
        console.log(`an error in adding task:${err}`);
        return { task:null };
    }
});

const updateTask = createAsyncThunk("updateTask", async (task) => {
    try {
        const res = await fetch(`${baseURL}/task`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            credentials:'include',
            body:JSON.stringify(task)
        });
        if(res.status === 200){
            return await res.json();
        }else{
            return { task:null };
        }
    } catch (err) {
        console.log(`an error in updating task:${err}`);
        return { task:null };
    }
});

const removeTask = createAsyncThunk("removeTask", async (details) => {
    try {
        const res = await fetch(`${baseURL}/task`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            credentials:'include',
            body:JSON.stringify(details)
        });
        if(res.status === 204){
            return await res.json();
        }else{
            return null;
        }
    } catch (err) {
        console.log(`an error in removing task:${err}`);
        return null;
    }
});

export { getAllTasks,addTask,updateTask,removeTask };
