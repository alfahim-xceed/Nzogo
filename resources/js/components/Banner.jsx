const Banner = () => {
    return (
        <div className="banner bg-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between">
                    <div className="sm:w-1/2">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                            Visa Processing Support Center in Bangladesh
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg mb-4">
                            Visa processing is a very challenging task when planning to go abroad from Bangladesh. VISAThing is the country's leading visa processing support center, providing solutions for visa-related issues for over 99 countries.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center">
                            <button className="bg-blue-500 text-white text-sm sm:text-base font-bold py-2 px-6 rounded mb-2 sm:mb-0 sm:mr-4">
                                Book Appointment
                            </button>
                            <button className="border border-blue-500 text-blue-500 text-sm sm:text-base font-bold py-2 px-6 rounded">
                                Business with us
                            </button>
                        </div>
                    </div>
                    <div className="sm:w-1/2 sm:pl-8">
                        <img className="w-full" src="https://visathing.com/_next/image/?url=https%3A%2F%2Funispaces.sgp1.cdn.digitaloceanspaces.com%2Fnebula%2Fimages%2F1714039209188.png&w=640&q=100" alt="VISAThing Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;