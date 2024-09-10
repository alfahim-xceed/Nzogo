const JobPosition = () => {
    // Define the recipient email and subject
    const recipientEmail = "nzogo@gmail.com";
    const emailSubject = "Application for Internship";

    // Create the Gmail compose URL with proper encoding
    const gmailComposeURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(emailSubject)}`;

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-600 text-center mb-8">Open Positions</h1>
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg mb-6 max-w-lg">
                <h2 className="text-lg  font-semibold mb-4 text-gray-800">Internship</h2>
                <p className="text-xs text-gray-700 mb-6">
                    The VISAthing family is looking for its newest Creative Writer who can craft
                    exciting and compelling stories that are highly useful for VISAthing's
                    customers!
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                    <span className="text-xs text-gray-600 mb-4 sm:mb-0">
                        Not monitoring | Internship
                    </span>
                    <a
                        href={gmailComposeURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out text-xs"
                    >
                        Apply Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default JobPosition;
