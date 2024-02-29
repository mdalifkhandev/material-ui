import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const OurWorkCard = ({ data }) => {
    const { img, name, text } = data
    return (
        <div>
            <Card sx={{
                maxWidth: 345,
                marginTop: 10,
                boxShadow: 10,
                borderRadius: 5,
                padding: 3,
                mb: 5
            }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={img}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5
                    }}
                />
                <Box sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
                <IconButton
                sx={{
                    border:1
                }}
                >
                    <AddIcon/>
                </IconButton>
                </Box>
            </Card>
        </div>
    );
};

export default OurWorkCard;