import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRegisterUserMutation } from '../../services/api';
import { setToken, setId } from '../../slices/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Define validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    phone: Yup.string().required('Phone number is required').matches(/^\d{11}$/, 'Phone number must be 11 digits'),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

const Register = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        terms: false,
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [registerUser, { error, isLoading }] = useRegisterUserMutation();

    const handleSubmit = async (values, { resetForm }) => {
        let { name, email, password, phone } = values;

        try {
            const res = await registerUser({ name, email, password, phone, role_id: 2 }).unwrap();
            dispatch(setId(res.id));
            dispatch(setToken(res.access_token));
            localStorage.setItem("token", res.access_token);
            localStorage.setItem("id", res.id);
            resetForm();
            toast.success("Register successful");
            navigate("/profile");

        } catch (error) {
            console.error("err => ", error);
            toast.error("Some error occured");
        }
        
    };

    return (
        <section className="bg-gray-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900">
                            Create an account
                        </h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {() => (
                                <Form className="space-y-4 md:space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                                        <Field
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="John Doe"
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
                                    </div>
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
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Your phone</label>
                                        <Field
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="1234567890"
                                        />
                                        <ErrorMessage name="phone" component="div" className="text-red-500 mt-1" />
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
                                    <div>
                                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                                        <Field
                                            type="password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        />
                                        <ErrorMessage name="confirmPassword" component="div" className="text-red-500 mt-1" />
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <Field
                                                id="terms"
                                                name="terms"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                                            <ErrorMessage name="terms" component="div" className="text-red-500 mt-1" />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-900 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        Create an account
                                    </button>
                                    <p className="text-sm font-light text-gray-500">
                                        Already have an account? <span className="font-medium text-primary-600 hover:underline">
                                            <Link to="/login">Login here</Link>
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

export default Register;
