import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
function ArtPieceList() {
    const [artPieces, setArtPieces] = useState([]);
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
      setOpen(!open);
    };
  
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
        <>
        <Button onClick={toggleDrawer}>Toggle Drawer</Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <div style={{ width: 350 }}> {/* Set your desired width */}
          {/* Your drawer content goes here */}
            {artPieces.map((art: { id: any; title: any; image_url: any;description:string; date_created:string }) => (
                <div key={art.id}>
                    <h2>{art.title}</h2>
                    {art.image_url && <img src={art.image_url} alt={art.title} className="art-image"/>}
                    {art.date_created}
                    <ReactMarkdown children={art.description}/>
                </div>
            ))}
                    <div>
        </div>
            </div>
          </Drawer>
            </>
    );
}

export default ArtPieceList;
