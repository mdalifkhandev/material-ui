import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Box sx={{
                height:300,
                backgroundColor:'#263238',
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'

            }} >
                <Typography color='white' fontSize='50px'>This is Foter</Typography>
                <Box sx={{
                    gap:5
                }}>
                    <Button sx={{
                        margin:5,
                        borderRadius:5
                    }}>Get's Start</Button>
                    <Button sx={{
                        margin:5,
                        borderRadius:5
                    }}>Get's Start</Button>
                </Box>
            </Box>
        </div>
    );
};

export default Footer;