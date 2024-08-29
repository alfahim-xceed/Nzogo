const Banner = ({ data }) => {
    return (
        <div className="banner bg-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-8">

                    <h4 className="text-xl sm:text-4xl lg:text-2xl font-bold leading-tight mb-4">
                        Apply online to {data[1].name} {data[2].name} visa from {data[0].name}
                    </h4>


                    <div className="flex">
                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 ">Basic Information</button>
                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600">Embassy details</button>
                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-dark-900 focus:outline-none bg-blue-400 rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700   dark:border-gray-600">Book an appointment</button>



                    </div>

                </div>
            </div>
        </div>
    );
}

export default Banner;
