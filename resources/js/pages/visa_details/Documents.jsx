import React from 'react';

const Documents = ({ data }) => {
    return (
        <div className="w-full max-w-4xl mx-auto p-6 space-y-4">
            <h2 className="text-xl font-bold mb-2">Required Documents</h2>

            {data.length > 0 ? (
                data.map((cur, ind) => (
                    <div key={ind} className="bg-white shadow-md rounded-lg border border-gray-200 p-4">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">{cur.name}</h2>
                        <p className="text-gray-600">{cur.description}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No documents to show.</p>
            )}
        </div>
    );
};

export default Documents;
