import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../feature/cakeSlice";
import iceReducer from "../feature/iceSlice";
import userReducer from "../feature/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	Company: companyReducer,
	Job: jobReducer,
	Candidate: candidateReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
