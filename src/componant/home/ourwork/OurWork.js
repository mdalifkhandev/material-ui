import { Box, Grid, IconButton, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import img1 from '../../../ass/web.jpg'
import img2 from '../../../ass/app.jpg'
import img3 from '../../../ass/graph.jpg'
import OurWorkCard from './OurWorkCard';

const carddata = [
    [
        {
            img: img1,
            name: 'Web devlopment',
            text:'How to Lern Web Design amd Devlopment'
        },
        {
            img: img2,
            name: 'Apps devlopment',
            text:'How to Lern App Design amd Devlopment'
        },
        {
            img: img3,
            name: 'Graphis Degine',
            text:'How to Lern Graphis Design and ginious'
        }
    ],
    [
        {
            img: img2,
            name: 'Apps devlopment',
            text:'How to Lern App Design amd Devlopment'
        },
        {
            img: img3,
            name: 'Graphis Degine',
            text:'How to Lern Graphis Design and ginious'
        },
        {
            img: img1,
            name: 'Web devlopment',
            text:'How to Lern Web Design amd Devlopment'
        },
    ],
    [
        {
            img: img3,
            name: 'Graphis Degine',
            text:'How to Lern Graphis Design and ginious'
        },
        {
            img: img1,
            name: 'Web devlopment',
            text:'How to Lern Web Design amd Devlopment'
        },
        {
            img: img2,
            name: 'Apps devlopment',
            text:'How to Lern App Design amd Devlopment'
        },
    ]
    
]

const OurWork = () => {


    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    return (
        <div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 15
            }}>
                <Typography color='green' margin='10px' fontSize='40px'>Here are some of our Work</Typography>
                <Box sx={{
                    borderBottom: 1, borderColor: 'divider',

                    display: 'flex',
                    justifyContent: 'space-between'

                }}>
                    <Tabs sx={{
                        '& .Mui-selected': {
                            color: 'primary.green'
                        }
                    }} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                    <Box sx={{
                        mx: 5
                    }}>
                        <IconButton
                            onClick={() => setValue(value - 1)}
                            disabled={value === 0}
                        >
                            <ArrowBackOutlinedIcon sx={{
                                borderRadius: 10,
                                border: 1
                            }} />
                        </IconButton>
                        <IconButton
                            onClick={() => setValue(value + 1)}
                            disabled={value === 2}
                        >
                            <ArrowForwardIcon sx={{
                                borderRadius: 10,
                                border: 1
                            }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Grid container spacing={2} justifyContent='center' sx={{
                margin: 'auto'
            }} >

                {
                    carddata[value].map((data, i) => 
                    <Grid key={i}>
                        <OurWorkCard
                            data={data}
                        ></OurWorkCard>
                    </Grid>
                    )
                }

            </Grid>

        </div>
    );
};

export default OurWork;