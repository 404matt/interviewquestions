import React, { useState, useEffect } from 'react';

function ArtPieceList() {
    const [artPieces, setArtPieces] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8000/task3/artpieces/');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setArtPieces(data);
            } catch (error) {
                console.error("Error fetching art pieces", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {artPieces.map((art: { id: any; title: any; image_url: any; }) => (
                <div key={art.id}>
                    <h2>{art.title}</h2>
                    {art.image_url && <img src={art.image_url} alt={art.title} />}

                </div>
            ))}
        </div>
    );
}

export default ArtPieceList;
