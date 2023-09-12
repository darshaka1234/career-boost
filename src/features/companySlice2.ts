import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type Company = {
	name: string;
	companySize: string;
};

interface CompanyType {
	loading: boolean;
	companies: Company[];
	error?: string;
}

const initialState: CompanyType = {
	loading: false,
	companies: [],
	error: "",
};

export const fetchCompanies = createAsyncThunk("Company/get", async () => {
	const res = await axios.get("https://localhost:7125/api/Company/Get");
	return res.data;
});

export const addCompany = createAsyncThunk(
	"Company/create",
	async (company: Company) => {
		const res = await axios.post(
			"https://localhost:7125/api/Company/Create",
			company
		);
		return res.data;
	}
);

export const companySlice = createSlice({
	name: "Company",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCompanies.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(
			fetchCompanies.fulfilled,
			(state, action: PayloadAction<Company[]>) => {
				state.loading = false;
				state.companies = action.payload;
			}
		);
		builder.addCase(fetchCompanies.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
		builder.addCase(addCompany.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(
			addCompany.fulfilled,
			(state, action: PayloadAction<Company[]>) => {
				state.loading = false;
				state.companies = action.payload;
			}
		);
		builder.addCase(addCompany.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	},
});

export default companySlice.reducer;
