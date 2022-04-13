import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITasks } from "../../models/ITask";

interface TaskState {
    tasks: ITasks[];
    togleCreatedTask:boolean;
    togleArchiveView:boolean;
}
const initialState: TaskState = {
    tasks: [
        {
            id: 0,
            name: "Shopping list",
            created: '2021-04-20T13:51:50.417-07:00',
            category: "task",
            content: "Tomatoes, bread",
            editDate: "",
            active: true,
            editStatus: false,
        },
        {
            id: 1,
            name: "The theory of evolution",
            created: '2021-04-27T13:51:50.417-07:00',
            category: 'randomThougth',
            content: "The evolution...",
            editDate: "",
            active: true,
            editStatus: false,
        },
        {
            id: 2,
            name: "New Feature",
            created: '2021-05-05T13:51:50.417-07:00',
            category: 'idea',
            content: "Implemented new feature",
            editDate: "",
            active: true,
            editStatus: false,
        },
        {
            id: 3,
            name: "William Gaddis",
            created: '2021-05-07T13:51:50.417-07:00',
            category: "quote",
            content: "Power doesn't continue ",
            editDate: "",
            active: true,
            editStatus: false,
        },
        {
            id: 4,
            name: "Books",
            created: '2021-05-15T13:51:50.417-07:00',
            category: "task",
            content: "The Learn Startap",
            editDate: "",
            active: true,
            editStatus: false,
        },
        
    ],
    togleCreatedTask: true,
    togleArchiveView:false,
}
export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push({
                id: state.tasks.length,
                name: action.payload.listName,
                created: new Date().toDateString(),
                category: action.payload.taskCategory,
                content: action.payload.text,
                editDate: "",
                active: true,
                editStatus: false,
           
            })
            state.togleCreatedTask=!state.togleCreatedTask
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter((item) => item.id !== action.payload)

        },
        addEditTask(state, action) {
            state.tasks[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.text,
                created: action.payload.created,
                category: action.payload.taskCategory,
                content: action.payload.text,
                editDate: new Date().toISOString(),
                active: true,
                editStatus: false,
            }
        },
        togleEditStatus(state, action) {
            state.tasks[action.payload.id].editStatus = !action.payload.editStatus
             console.log(state.tasks[action.payload.id].editStatus)
        },
        changeTogleCreated(state,action){
            state.togleCreatedTask=!action.payload
        },
        addArchiveTask(state,action){
            state.tasks[action.payload.id].active=!action.payload.active
            
        },
        changeTogleArchiveView(state,action){
            state.togleArchiveView=!action.payload
            console.log(action.payload)
        }
    }

})
export const { addTask, deleteTask, addEditTask, togleEditStatus,changeTogleCreated,changeTogleArchiveView } = taskSlice.actions
export default taskSlice.reducer