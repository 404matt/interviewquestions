import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function ArtPieceList() {
    const [artPieces, setArtPieces] = useState([]);
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
      setOpen(!open);
    };
    function formatDate(date: number) {
        if (date < 0) {
            return `${Math.abs(date)} BC`;
        } else {
            return `${date} AC`;
        }
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
    <Button variant="contained" color="primary" onClick={toggleDrawer}>See Cat Art</Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer} style={{ background: 'transparent' }} 
      PaperProps={{ style: { background: 'transparent' } }}>
        <div style={{ width: 450 }}> 
            {artPieces.map((art: { id: string; title: string;artist:string; image_url: string; date_created:number }) => (
                <Card sx={{ maxWidth: 450 }} key={art.id} className="cat-card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={art.image_url}
                            className="art-image"
                            alt={art.title} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {art.title}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                            {art.artist}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {formatDate(art.date_created)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
                    <div>
        </div>
            </div>
          </Drawer>
            </>
    );
}

export default ArtPieceList;
