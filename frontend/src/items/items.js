import React, { useState, useEffect } from 'react';
const backendURL = process.env.REACT_APP_BACKEND_URL;

function ItemList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Using the service name from docker-compose as the hostname.
        fetch('http://localhost:8000/api/items')
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the items", error);
                setLoading(false);
            });
    }, []);  // The empty array means this effect will only run once, similar to componentDidMount.

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Items</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
