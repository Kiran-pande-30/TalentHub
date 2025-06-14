import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../utils/constants';

const Signup = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  if (token) {
    navigate('/');
  }
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    // description: '',
    email: '',
    password: '',
    passwordConfirm: '',
    role: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.userName ||
      !formData.email ||
      !formData.role ||
      !formData.password ||
      !formData.passwordConfirm
    ) {
      setError('Please fill in all required fields.');
      return;
    }

    if (formData.password !== formData.passwordConfirm) {
      setError('Passwords do not match.');
      return;
    }

    // Sending POST request to the server
    try {
      const response = await fetch(`${API_URL}/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data;
      const contentType = response.headers.get('content-type');
      if(contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        throw new Error('Unexpected response format');
      }
      // const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      console.log('Form submitted:', data);
      setSuccess('Signup successful!');
      setError('');

      // Reset form data after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        userName: '',
        // description: '',
        email: '',
        role: '',
        password: '',
        passwordConfirm: '',
      });

      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
<div className="mx-auto max-w-md w-full rounded-lg bg-white p-8 shadow-md overflow-hidden">
      {/* Applied larger shadow */}
      <div className="absolute left-[-400px] top-[-120px] flex h-[350px] w-[950px] rotate-12 skew-x-6 scale-110 transform items-center justify-center rounded-full bg-[rgba(30,160,170,0.1)] blur-lg"></div>
      <h1 className="mb-6 text-center text-2xl font-semibold text-gray-800">
        Signup
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex justify-between space-x-4">
          <div className="flex-1">
            <label
              htmlFor="firstName"
              className="mb-1 block font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              required
              className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="mb-1 block font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              required
              className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="mb-1 block font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
            required
            className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>
        {/* <div className="mb-4">
          <label
            htmlFor="description"
            className="mb-1 block font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Brief description of your needs"
            className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={formData.description}
            onChange={handleChange}
          />
        </div> */}
        <div className="mb-4">
          <label
            htmlFor="role"
            className="mb-1 block font-medium text-gray-700"
          >
            Role
          </label>
          <select
            name="role"
            id="role"
            required
            className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="client">Client</option>
            <option value="freelancer">Freelancer</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-1 block font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex justify-between space-x-4">
          <div className="flex-1">
            <label
              htmlFor="password"
              className="mb-1 block font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="passwordConfirm"
              className="mb-1 block font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Confirm Password"
              required
              className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
          </div>
        </div>
        {error && <p className="mb-2 text-red-600">{error}</p>}
        {success && <p className="mb-2 text-green-600">{success}</p>}
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{' '}
          <a
            href="/login"
            class="font-medium text-blue-600 hover:text-blue-500 hover:underline dark:text-blue-400"
          >
            Login here
          </a>
        </p>
        <button
          type="submit"
          className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
