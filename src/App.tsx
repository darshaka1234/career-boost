import { Routes, Route, Navigate } from "react-router-dom";
import LandPage from "./pages/LandPage";
import CompanyPage from "./pages/company/CompanyPage";
import JobPage from "./pages/job/JobPage";
import CandidatePage from "./pages/candidate/CandidatePage";
import AddCompany from "./pages/company/AddCompany";
import AddJob from "./pages/job/AddJob";

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<LandPage />} />
				<Route path='/companies'>
					<Route index element={<CompanyPage />} />
					<Route path='new' element={<AddCompany />} />
				</Route>
				<Route path='/jobs'>
					<Route index element={<JobPage />} />
					<Route path='new' element={<AddJob />} />
				</Route>
				<Route path='/candidates'>
					<Route index element={<CandidatePage />} />
					<Route path='new' element={<AddJob />} />
				</Route>
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</>
	);
};

export default App;
