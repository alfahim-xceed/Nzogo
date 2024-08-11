import React, { useState } from 'react';
import { useCreateNewMediaMutation, useGetMediaPathQuery } from '../../services/api';
import { toast } from 'react-toastify';

const UploadProfilePhoto = ({ user_id }) => {
    const [file, setFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const { data: details, error, isLoading } = useGetMediaPathQuery();
    const [createNewMedia] = useCreateNewMediaMutation();

    if (isLoading) {
        return <>Loading..</>;
    }

    if (error) {
        return <p className="text-red-500">Failed to load media path. Please try again later.</p>;
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size > 2048 * 1024) { // 2MB limit
            toast.error("File size should be less than 2MB");
            return;
        }
        setFile(selectedFile);
    };

    const handleUpload = async () => {
        if (!file) {
            toast.error("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('table_id', user_id);

        setIsUploading(true);

        try {
            const res = await createNewMedia(formData).unwrap();
            toast.success("File uploaded successfully");
        } catch (error) {
            console.error("File upload error: ", error);
            toast.error("File upload error");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="flex flex-col my-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Change Profile Picture</h2>

            {details?.media_path ? (
                <h1>Media Path Found: {details.media_path}</h1>
            ) : (
                <>
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
                            disabled={isUploading} // Disable input while uploading
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
                        className={`mt-6 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isUploading && 'cursor-not-allowed opacity-50'}`}
                        disabled={isUploading}
                    >
                        {isUploading ? 'Uploading...' : 'Upload'}
                    </button>
                </>
            )}
        </div>
    );
};

export default UploadProfilePhoto;
