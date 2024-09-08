import { Link } from 'react-router-dom';
import {useGetCountryListQuery } from '../../../services/country_api';

const CountryList = () => {
    const { data: details, error, isLoading } = useGetCountryListQuery();


    if (isLoading) {
        return <>Loading..</>;
    }

    if (error) {
        return <p className="text-red-500">Error loading countries. Please try again later.</p>;
    }


    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Select Country</h2>

            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serial</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {details && details.length > 0 ? (
                            details.map((country, index) => (
                                <tr key={country.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <Link to={`/admin/manage-embassy/list/${country.id}`}>
                                            {country.name}
                                        </Link>
                                    </td>


                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No countries to show.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CountryList;
