const JoinUsProcess = () => {
    return (
        <div className="bg-white rounded-lg">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800 text-center">
                Join the VISAthing Family
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
                    <img
                        src="https://visathing.com/images/career/apply.svg"
                        alt="Apply Icon"
                        className="w-20 h-20 mb-4"
                    />
                    <h3 className="text-md font-semibold mb-3 text-gray-800">Apply</h3>
                    <p className="text-xs  text-gray-600 text-center">
                        Submit your CV through our website and fill out the application.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
                    <img
                        src="https://visathing.com/images/career/assessment.svg"
                        alt="Assessment Icon"
                        className="w-20 h-20 mb-4"
                    />
                    <h3 className="text-md font-semibold mb-3 text-gray-800">Assessment</h3>
                    <p className="text-xs  text-gray-600 text-center">
                        We assess your skills and call you for an interview.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
                    <img
                        src="https://visathing.com/images/career/interview.svg"
                        alt="Interview Icon"
                        className="w-20 h-20 mb-4"
                    />
                    <h3 className="text-md font-semibold mb-3 text-gray-800">Interview</h3>
                    <p className="text-xs  text-gray-600 text-center">
                        Attend the interview on the scheduled date. We will contact you afterward if you are selected. Employee selection is based on potential.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
                    <img
                        src="https://visathing.com/images/career/welcome.svg"
                        alt="Welcome Icon"
                        className="w-20 h-20 mb-4"
                    />
                    <h3 className="text-md font-semibold mb-3 text-gray-800">Welcome to the Team</h3>
                    <p className="text-xs  text-gray-600 text-center">
                        After receiving your appointment letter via email, you're officially part of the VISAthing team. Join us, learn diligently, and grow faster.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JoinUsProcess;
