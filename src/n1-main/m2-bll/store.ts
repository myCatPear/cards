import {combineReducers, legacy_createStore as createStore} from "redux";
import {testReducer} from "./test-reducer";

export const rootReducer = combineReducers({
    testReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>