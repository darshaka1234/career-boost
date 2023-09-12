import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react/ApiProvider";
import { apiSlice } from "./features/companySlice.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ApiProvider api={apiSlice}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ApiProvider>
	</React.StrictMode>
);
