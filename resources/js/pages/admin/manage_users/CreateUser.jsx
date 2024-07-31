import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  role: Yup.string().required('Role is required'),
});

const roles = ['Admin', 'User', 'Manager']; // Example roles

const CreateUser = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    role: roles[0],
  };

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission for creating a new user
    console.log('Form Data:', values);
    resetForm(); // Optionally reset the form after submission
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Create New User</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 mb-2">Name</label>
              <Field
                id="name"
                name="name"
                type="text"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 mb-2">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-700 mb-2">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 mt-1" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="role" className="text-gray-700 mb-2">Role</label>
              <Field
                as="select"
                id="role"
                name="role"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="role" component="div" className="text-red-500 mt-1" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
              Create User
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateUser;
