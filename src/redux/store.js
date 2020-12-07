import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

// import do reducer onde ficara armazenado os states do todo
import todoListReducer from './slices/todoListSlice';

// Função que cria e configura a store
export default store = configureStore({
	reducer: combineReducers({
		todoList: todoListReducer,
	}),
	middleware: getDefaultMiddleware({
		serializableCheck: false,
		immutableCheck: false,
	}),
});
