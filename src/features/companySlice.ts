import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { iceOrdered } from "./iceSlice";

export interface CompanyType {
	id: number;
	name: string;
	companySize: string;
}

interface CompanyState {
	companies: CompanyType[];
}

const initialState: CompanyState = {
	companies: [],
};

export const companySlice = createSlice({
	name: "Company",
	initialState,
	reducers: {
		cakeAdded: (state, action: PayloadAction<number>) => {
			state.companies -= action.payload;
		},
		cakeRestoked: (state, action: PayloadAction<number>) => {
			state.noOfCake += action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(iceOrdered, (state, action) => {
			state.noOfCake -= action.payload;
		});
	},
});

export const { cakeOrdered, cakeRestoked } = cakeSlice.actions;
export default cakeSlice.reducer;
