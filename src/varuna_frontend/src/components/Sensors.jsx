import React, { useState, useEffect } from 'react';

const Sensors = () => {
    const [sample, setSample] = useState(null);

    useEffect(() => {
        const fetchSample = async () => {
            try {
                const response = await fetch('http://bd3sg-teaaa-aaaaa-qaaba-cai.localhost:4943/sample');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSample(data.message);
            } catch (error) {
                console.error('Error fetching sample:', error);
            }
        };

        fetchSample();
    }, []);

    return (
        <div>
            <h1>Sample Data</h1>
            {sample ? (
                <div>
                    <h2>Current Sample</h2>
                    <p>ID: {sample.id}</p>
                    <p>DateTime: {sample.dateTime}</p>
                    <p>pH: {sample.pH}</p>
                    <p>Temperature: {sample.temperature}</p>
                    <p>Turbidity: {sample.turbidity}</p>
                    <p>TDS: {sample.tds}</p>
                    <p>Quantity: {sample.quantity}</p>
                </div>
            ) : (
                <p>Loading sample...</p>
            )}
        </div>
    );
};

export default Sensors;