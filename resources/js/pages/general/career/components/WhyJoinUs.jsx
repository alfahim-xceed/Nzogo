const WhyJoinUs = () => {
    return (
        <div className="bg-white py-4 md:py-8 lg:py-12">
            <div className="flex flex-col lg:flex-row lg:space-x-6">
                <img
                    src="https://visathing.com/_next/image/?url=%2Fimages%2Fcareer%2Fwhy_join_us_thumb.jpg&w=1920&q=75"
                    alt="Why Join Us"
                    className="w-1/2 lg:w-1/3 h-auto rounded-lg object-cover mb-4 lg:mb-0"
                />
                <div className="lg:w-1/2 flex flex-col justify-center p-4 lg:p-6 shadow">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Join Us</h2>
                    <p className="text-xs text-gray-700 leading-relaxed">
                        VISAThing is a group of inspired and eager minds. We are a global team
                        with offices in Dhaka, Chattogram, Sylhet, Nepal & Kolkata.
                        <br />
                        <br />
                        At VISAThing, every single person is unique and matters. If you are
                        someone who enjoys challenges and constantly learning new things, then
                        VISAThing is for you. If you're excited to shape the future of visa
                        application processes, we would love to have you in our team!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyJoinUs;
