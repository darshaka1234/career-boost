import { useState } from "react";
import { useAddJobMutation } from "../../features/apiSlice";

const AddJob = () => {
	const [addJob] = useAddJobMutation();
	const [, setJob] = useState({});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setJob((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { Title, Level, CompanyId } = e.currentTarget.elements as any;

		setJob((Job) => ({
			...Job,
			[e.currentTarget.name]: e.currentTarget.value,
		}));
		let formData = {
			Title: Title.value,
			Level: Level.value,
			CompanyId: CompanyId.value,
		};
		addJob(formData)
			.unwrap()
			.then(() => {
				setJob(() => ({
					Title: "",
					Level: "",
					CompanyId: "",
				}));
			})
			.catch((error: any) => {
				console.log(error);
			});
	};

	return (
		<div className='max-w-md mx-auto'>
			<form className='space-y-4' onSubmit={handleSubmit}>
				<div>
					<label htmlFor='Title' className='block text-gray-700'>
						Title
					</label>
					<input
						onChange={handleInputChange}
						type='text'
						name='Title'
						className='block w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500'
						placeholder='Job Title'
					/>
				</div>
				<div>
					<label htmlFor='Level' className='block text-gray-700'>
						Job Level
					</label>
					<select
						name='Level'
						onChange={handleInputChange}
						className='block w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500'>
						<option value='Intern'>Small</option>
						<option value='Junior'>Medium</option>
						<option value='Senior'>Large</option>
						<option value='TechLead'>Medium</option>
						<option value='Director'>Large</option>
					</select>
				</div>
				<div>
					<label htmlFor='CompanyId' className='block text-gray-700'>
						CompanyId
					</label>
					<input
						onChange={handleInputChange}
						type='number'
						name='CompanyId'
						className='block w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500'
						placeholder='Company Id'
					/>
				</div>
				<div>
					<button
						type='submit'
						className='w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:bg-blue-700'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddJob;
