import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useGetCountryListQuery } from "../../services/country_api";
import { useGetCategoryCountryListQuery } from "../../services/category_country_api";
import { useGetCountryServiceListByCountryCategoryIdQuery } from "../../services/country_service_api";
import { useCreateAppointmentMutation } from "../../services/appointment_api";
import { toast } from "react-toastify";

const BookAppointment = () => {

    const [createAppointment]=useCreateAppointmentMutation();
    const { data: countryDetails, isLoading: countryLoading, error: countryError } = useGetCountryListQuery();


    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const { data: categoryCountryDetails, refetch: refetchCategories } = useGetCategoryCountryListQuery(
        { travelling_to_id: selectedCountry },
        { skip: !selectedCountry } // Skip query if no country is selected
    );

    const { data: serviceDetails, refetch: refetchServices } = useGetCountryServiceListByCountryCategoryIdQuery({
        country_id: selectedCountry,
        category_id: selectedCategory,
    }, {
        skip: !selectedCountry || !selectedCategory,
    });

    useEffect(() => {
        if (selectedCountry) {
            refetchCategories();
        }
    }, [selectedCountry, refetchCategories]);

    useEffect(() => {
        if (selectedCategory) {
            refetchServices();
        }
    }, [selectedCategory, refetchServices]);

    const formik = useFormik({
        initialValues: {
            desired_travel_destination_id: "",
            visa_category_id: "",
            service_id: "",
            expected_travel_date: "",
            appointment_schedule: "",
            appointment_type: "",
            meeting_type: "",
        },
        onSubmit: async (values, { setSubmitting }) => {


            try {
                await createAppointment(values).unwrap();
                toast.success("Appointment booked successfully");
            } catch (err) {
                console.error(err);
                toast.error("Failed to book appointment");
            }
        },
    });

    // Handle loading and error states
    if (countryLoading) return <div>Loading...</div>;
    if (countryError) return <div>Error loading data</div>;

    const countryOptions = countryDetails?.map((country) => ({
        value: country.id,
        label: country.name,
    }));

    const visaCategoryOptions = categoryCountryDetails?.map((category) => ({
        value: category.category_id,
        label: category.category_name,
    })) || [];

    const serviceOptions = serviceDetails?.map((service) => ({
        value: service.id,
        label: service.service.name,
    })) || [];

    return (
        <div className="max-w-lg mx-auto p-8 mt-8 mb-19">
            <h1 className="text-xl font-semibold mb-7 text-center">Book an Appointment</h1>
            <form onSubmit={formik.handleSubmit} className="space-y-4 text-xs">
                {/* Country Select */}
                <div>
                    <label className="block mb-1 text-gray-700">Country</label>
                    <select
                        name="desired_travel_destination_id"
                        value={formik.values.desired_travel_destination_id}
                        onChange={(e) => {
                            formik.handleChange(e);
                            setSelectedCountry(e.target.value);
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Select Country</option>
                        {countryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Category Select */}
                <div>
                    <label className="block mb-1 text-gray-700">Visa Category</label>
                    <select
                        name="visa_category_id"
                        value={formik.values.visa_category_id}
                        onChange={(e) => {
                            formik.handleChange(e);
                            setSelectedCategory(e.target.value);
                        }}
                        disabled={!selectedCountry}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Select Category</option>
                        {visaCategoryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Service Select */}
                <div>
                    <label className="block mb-1 text-gray-700">Service</label>
                    <select
                        name="service_id"
                        value={formik.values.service_id}
                        onChange={formik.handleChange}
                        disabled={!selectedCategory}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Select Service</option>
                        {serviceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Expected Travel Date */}
                <div>
                    <label className="block mb-1 text-gray-700">Expected Travel Date</label>
                    <input
                        type="date"
                        name="expected_travel_date"
                        value={formik.values.expected_travel_date}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Appointment Schedule (Datetime) */}
                <div>
                    <label className="block mb-1 text-gray-700">Appointment Schedule</label>
                    <input
                        type="datetime-local"
                        name="appointment_schedule"
                        value={formik.values.appointment_schedule}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Appointment Type */}
                <div>
                    <label className="block mb-1 text-gray-700">Appointment Type</label>
                    <select
                        name="appointment_type"
                        value={formik.values.appointment_type}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Select Appointment Type</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Application Submission">Application Submission</option>
                    </select>
                </div>

                {/* Meeting Type */}
                <div>
                    <label className="block mb-1 text-gray-700">Meeting Type</label>
                    <select
                        name="meeting_type"
                        value={formik.values.meeting_type}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Select Meeting Type</option>
                        <option value="Physical">Physical</option>
                        <option value="Virtual">Virtual</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default BookAppointment;
