import { combineReducers } from 'redux';

/* ------------- Reducers ------------- */

import profile from "./profile";
import task from "./task";

/* ------------- Reducers ------------- */

const rootReducer = combineReducers({
    profile,
    task
});

export default (state, action) => (
    // action.type === LOGOUT ? rootReducer(undefined, action) : rootReducer(state, action)
    rootReducer(state, action)
)
