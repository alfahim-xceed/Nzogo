import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLoginUserMutation } from '../../services/api';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setToken,setId } from '../../slices/authSlice';

// Define validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const Login = () => {
    const [loginUser] = useLoginUserMutation(); // Make sure this is correctly imported
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const { email, password } = values;
            const res = await loginUser({ email, password }).unwrap(); // Use unwrap for better error handling
            console.log("id => ",res.id);
            dispatch(setId(res.id));
            dispatch(setToken(res.access_token));
            toast.success("Login successful");
            resetForm();
            navigate("/");
        } catch (err) {
            toast.error(err.message || "An error occurred");
        }
    };

    return (
        <section className="bg-gray-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900">
                            Login
                        </h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {() => (
                                <Form className="space-y-4 md:space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="name@company.com"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                        <Field
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        />
                                        <ErrorMessage name="password" component="div" className="text-red-500 mt-1" />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-900 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        Login
                                    </button>
                                    <p className="text-sm font-light text-gray-500">
                                        Don't have an account? <span className="font-medium text-primary-600 hover:underline">
                                            <Link to="/register">Signup here</Link>
                                        </span>
                                    </p>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
