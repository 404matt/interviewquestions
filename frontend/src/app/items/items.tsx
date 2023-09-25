import React, { useState, useEffect } from 'react';
type Item = {
    id: number;
    name: string;
  };
function ItemList() {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Test to make sure CORS works with django backend
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
    }, []);  
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
