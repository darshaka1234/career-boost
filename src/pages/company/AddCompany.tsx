import {useState} from 'react'
import { useAppDispatch } from "../../types/hook";

const AddCompany = () => {
  const dispatch = useAppDispatch();

  const [company, setCompany] = useState({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value }  = e.target;
    setCompany({
      ...company,
      [name]: value,
    });
  };

    const handleSubmit = (e:React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(company);
    setCompany({ name: '', size: '' });
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            onChange={handleInputChange}
            type="text"
            name= "Name"
            className="block w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="companySize" className="block text-gray-700">
            Company Size
          </label>
          <select
            name="companySize"
            onChange={handleInputChange}
            
            className="block w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCompany;
