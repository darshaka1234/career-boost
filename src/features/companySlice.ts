import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
	reducerPath: "apiSlice",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://localhost:7125/api",
	}),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		getCompanies: builder.query({
			query: () => "Company/Get",
			providesTags: ["Post"],
		}),
		addCompany: builder.mutation({
			query: (payload) => ({
				url: "Company/Create",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}),
			invalidatesTags: ["Post"],
		}),
		getJobs: builder.query({
			query: () => "Job/Get",
			providesTags: ["Post"],
		}),
		addJob: builder.mutation({
			query: (payload) => ({
				url: "Job/Create",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}),
			invalidatesTags: ["Post"],
		}),
		getCandidates: builder.query({
			query: () => "Candidate/Get",
			providesTags: ["Post"],
		}),
		addCandidate: builder.mutation({
			query: (payload) => ({
				url: "Candidate/Create",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}),
			invalidatesTags: ["Post"],
		}),
	}),
});
export const {
	useGetCompaniesQuery,
	useAddCompanyMutation,
	useGetJobsQuery,
	useAddJobMutation,
	useGetCandidatesQuery,
	useAddCandidateMutation,
} = apiSlice;
