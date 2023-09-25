import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

function RandomCatFact() {
    const [fact, setFact] = useState('');
    const [open, setOpen] = useState(false);

    const fetchCatFact = () => {
        fetch('https://catfact.ninja/fact')
            .then(response => response.json())
            .then(data => {
                setFact(data.fact);
                setOpen(true);  // Open the snackbar once the fact is fetched
            })
            .catch(error => {
                console.error("Error fetching the cat fact:", error);
            });
    };

    const handleClose = () => {
        setOpen(false);
      };

    return (
        <>
        
            <Button variant="contained" color="primary" onClick={fetchCatFact}>
                Get Random Cat Fact
            </Button>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={10000}
                onClose={handleClose}
                message={fact}
                action={
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                }
            />
            </>
                );
}

export default RandomCatFact;
