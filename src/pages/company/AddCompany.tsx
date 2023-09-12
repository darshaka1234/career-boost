import {useState} from 'react'
import { useAddCompanyMutation } from '../../features/apiSlice';

const AddCompany = () => {

const [addCompany ] = useAddCompanyMutation()
  const [, setCompany] = useState({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCompany((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const { Name, Size } = e.currentTarget.elements as any;
   
       setCompany((company) => ({
      ...company,
      [e.currentTarget.name]: e.currentTarget.value,
    }));
    let formData = {
      Name: Name.value,
      Size: Size.value,
   };
   addCompany(formData)
      .unwrap()
      .then(() => {
        setCompany(() => ({
          Name: '',
          Size: '',
        }));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name" className="block text-gray-700">
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
          <label htmlFor="Size" className="block text-gray-700">
            Company Size
          </label>
          <select
            name="Size"
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
