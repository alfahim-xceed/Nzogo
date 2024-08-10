import React, { useState } from 'react';

const UploadProfilePhoto = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        // Handle the file upload logic here
        console.log('File to upload:', file);
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-lg my-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Upload Your File</h2>

            <label className="flex flex-col items-center justify-center w-full h-32 bg-white border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-gray-400">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-12 h-12 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7l10 10M17 7l-10 10"></path>
                    </svg>
                    <p className="text-sm text-gray-500">Drag and drop your file here or click to select</p>
                </div>
                <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>

            {file && (
                <div className="mt-4 text-gray-700">
                    <p className="text-lg font-medium">Selected File:</p>
                    <p className="text-sm">{file.name}</p>
                </div>
            )}

            <button
                onClick={handleUpload}
                className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Upload
            </button>
        </div>
    );
};

export default UploadProfilePhoto;
