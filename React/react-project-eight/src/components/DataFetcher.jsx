import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState([]); // Corrected state variable name
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(fetchedData => {
                setData(fetchedData);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error)); // Added error handling
    }, []); // Runs only on the first render

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <ul>
                    {data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DataFetcher;
