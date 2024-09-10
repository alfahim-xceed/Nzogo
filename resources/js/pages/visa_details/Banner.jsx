import { Link } from "react-router-dom";

const Banner = ({ data }) => {
    // console.log("data ",data);
    return (
        <div className="banner bg-blue-50 py-12 mb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
                    <div className="sm:w-1/2">
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-4 leading-tight">
                            Apply online to {data[1]} {data[2]} visa from {data[0]}
                        </h2>
                        <p className="text-xs text-gray-700 mb-6">
                            If you want to go to {data[1]} from Bangladesh, you must need a visa first. Getting an {data[1]} visa for Bangladeshi might seem complex to you but do not worry. If you are from Bangladesh, you need to apply for an {data[1]} e visa.

                            Bangladesh has no {data[1]} Embassy. The nearest embassy is located in China. However, the e-visa is required to be applied online, so applicants do not need to visit any other nations. Well, there is some basic information that applicants need to know before deciding to apply for {data[1]}. Keep reading this article for authentic information.
                        </p>
                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 ">Basic Information</button>

                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600">Embassy details</button>

                        <Link to="/appointment/book">
                            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-xs font-medium text-dark-900 focus:outline-none bg-blue-400 rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700   dark:border-gray-600">Book an appointment</button>
                        </Link>
                    </div>
                    <div className="sm:w-1/2 sm:pl-8">
                        <img className="w-full h-auto rounded-lg  object-cover" src="https://visathing.com/images/banner_bg_pattern.svg" alt="VISAThing Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;


