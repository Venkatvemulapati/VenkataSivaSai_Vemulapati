import { combineReducers } from "redux";
import BookReducer from "./BookReducer";
import UserReducer from "./UserReducer";


const RootReducer = combineReducers({
    books : BookReducer,
    user: UserReducer
});

export default RootReducer;