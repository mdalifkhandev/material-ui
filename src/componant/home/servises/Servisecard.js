import { Avatar, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Servisecard = ({ servis }) => {
    const { img, name } = servis
    return (
        <div>
            <Card sx={{
                maxWidth: 345,
                marginTop: 10,
                boxShadow: 10,
                borderRadius: 5
            }}>
                <CardMedia
                    sx={{
                        width: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 5
                    }}
                //  component='img'
                // image={img}
                // title={name}

                >
                    <Avatar
                        alt="Remy Sharp"

                        src={img}
                        sx={{
                            width: 180,
                            height: 180,
                        }}
                    />
                </CardMedia>
                <Box>
                    <CardContent sx={{
                        textAlign: 'center'
                    }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </div>
    );
};

export default Servisecard;