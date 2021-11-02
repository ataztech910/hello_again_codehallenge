import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppState = ReturnType<typeof rootReducer>;
export default store;
