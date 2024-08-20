

const AppliedVisaList=()=>{
    const details=[{id:"1",date:"19 July,2023"}];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Application List</h2>

            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serial</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">id</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">date</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {details && details.length > 0 ? (
                            details.map((cur, index) => (
                                <tr key={cur.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Details of {cur.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cur.date}</td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No cur to show.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AppliedVisaList;
