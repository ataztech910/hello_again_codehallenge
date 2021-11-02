import { combineReducers } from "redux";
import { bountiesReducer } from "./BountiesReducer";

const rootReducer = combineReducers({
  bounties: bountiesReducer,
});

export default rootReducer;
