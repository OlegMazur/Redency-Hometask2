import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/TaskSlise"
const rootReducer =combineReducers({
    taskReducer
})
export const setupStore =()=>{
     return configureStore({
        reducer:rootReducer
     })  
}
export type RootState =ReturnType<typeof rootReducer>
export type AppStore =ReturnType<typeof setupStore>
 export type AppDispatch =AppStore['dispatch']