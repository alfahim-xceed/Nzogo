import React from 'react';
import { useGetExampleDataQuery, usePostExampleDataMutation } from '../services/api';

function ExampleComponent() {
    const { data, error, isLoading } = useGetExampleDataQuery();
    const [postExampleData] = usePostExampleDataMutation();

    const handlePost = async () => {
        try {
            const response = await postExampleData({ name: 'fahim' }).unwrap();
            console.log('Response:', response);
        } catch (error) {
            console.error('Failed to post data:', error);
        }
    };

    return (
        <div className="container">
            <h1>Hello, React!</h1>
            {isLoading ? (
                'Loading...'
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <pre>{data.message}</pre>
            )}
            <button onClick={handlePost} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Post Request</button>
        </div>
    );
}

export default ExampleComponent;
