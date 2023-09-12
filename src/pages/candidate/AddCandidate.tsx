import {useState} from 'react'
import { useAddCandidateMutation } from '../../features/apiSlice';

const AddCandidate = () => {

const [addCandidate ] = useAddCandidateMutation()
  const [, setCandidate] = useState({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCandidate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const { FirstName, LastName, Email, Phone, JobId } = e.currentTarget.elements as any;
   
       setCandidate((Candidate) => ({
      ...Candidate,
      [e.currentTarget.name]: e.currentTarget.value,
    }));
    let formData = {
      FirstName: FirstName.value,
      LastName: LastName.value,
      Email: Email.value,
      Phone: Phone.value,
      JobId: JobId.value,
  
   };
   addCandidate(formData)
      .unwrap()
      .then(() => {
        setCandidate(() => ({
          FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
      JobId: '',
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
          <label htmlFor="First Name" className="block text-gray-700">
            First Name
          </label>
          <input
            onChange={handleInputChange}
            type="text"
            name= "FirstName"
            className="block w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your First Name"
          />
        </div>
        <div>
          <label htmlFor="Last Name" className="block text-gray-700">
            Last Name
          </label>
          <input
            onChange={handleInputChange}
            type="text"
            name= "LastName"
            className="block w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your Last Name"
          />
        </div>
                <div>
          <label htmlFor="Email" className="block text-gray-700">
            Email
          </label>
          <input
            onChange={handleInputChange}
            type="email"
            name= "Email"
            className="block w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
          />
        </div>
                <div>
          <label htmlFor="Phone" className="block text-gray-700">
            Phone Number
          </label>
          <input
            onChange={handleInputChange}
            type="text"
            name= "Phone"
            className="block w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your Phone Number"
          />
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

export default AddCandidate;
