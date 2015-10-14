/**
 * @author Sven Koelpin
 */
import {combineReducers, createStore, applyMiddleware} from "redux";
import ExercisesReducer from "../exercises/ExercisesReducer";
import EditorReducer from "../editor/EditorReducer";
import thunkMiddleware from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export default createStoreWithMiddleware(combineReducers({
    EditorReducer,
    ExercisesReducer
}));
