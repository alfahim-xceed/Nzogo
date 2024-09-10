import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faDollarSign, faHandsHelping, faChartLine, faLaptop } from "@fortawesome/free-solid-svg-icons";

const benefitsData = [
    {
        icon: faBriefcase,
        title: "Great Work Environment",
        description:
            "VISAThing offers a friendly and fun work environment where all employees can thrive and bring their best.",
    },
    {
        icon: faChartLine,
        title: "Career Growth Opportunities",
        description:
            "Challenging opportunities help employees grow and develop their careers.",
    },
    {
        icon: faLaptop,
        title: "Learning and Development",
        description:
            "We provide support for employees to learn new skills and grow professionally.",
    },
    {
        icon: faDollarSign,
        title: "Competitive Salary and Benefits",
        description:
            "We offer a competitive salary package and benefits for all employees.",
    },
    {
        icon: faHandsHelping,
        title: "Supportive Culture",
        description:
            "VISAThing believes in a culture of collaboration and teamwork, where we support each other.",
    },
];

const Benefits = () => {
    return (
        <div className="bg-white rounded-lg ">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Benefits and Opportunities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {benefitsData.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 p-5 bg-gray-100 rounded-lg shadow-sm">
                        <FontAwesomeIcon
                            icon={benefit.icon}
                            className="text-blue-600 text-2xl flex-shrink-0"
                        />
                        <div>
                            <h3 className="text-md font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                            <p className="text-xs text-gray-700">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Benefits;
