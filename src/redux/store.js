import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoListReducer from './slices/todoListSlice';
import counterReducer from './slices/counterSlice';

export default store = configureStore({
	reducer: combineReducers({
		counter: counterReducer,
		todoList: todoListReducer,
	}),
});
