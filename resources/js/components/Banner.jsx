import { Link } from "react-router-dom";

const Banner = ({
    title = "Visa Processing Support Center in Bangladesh",
    desc = "Visa processing is a very challenging task when planning to go abroad from Bangladesh. VISAthing is the country's leading visa processing support center, providing solutions for visa-related issues for over 99 countries.",
    button = true,
    img_src = "https://visathing.com/_next/image/?url=https%3A%2F%2Funispaces.sgp1.cdn.digitaloceanspaces.com%2Fnebula%2Fimages%2F1714039209188.png&w=640&q=100"
}) => {
    return (
        <div className="banner bg-blue-50 py-12 mb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
                    <div className="sm:w-1/2">
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-4 leading-tight">
                            {title}
                        </h2>
                        <p className="text-sm text-gray-700 mb-6">
                            {desc}
                        </p>
                        {button && (
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link to="/appointment/book">
                                    <button className="bg-blue-600 text-white text-xs font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        Book Appointment
                                    </button>
                                </Link>
                                <button className="border border-blue-600 text-blue-600 text-xs font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Business with us
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="sm:w-1/2 sm:pl-8">
                        <img className="w-full h-auto rounded-lg  object-cover" src={img_src} alt="VISAThing Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
