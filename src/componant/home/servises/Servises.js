import React from 'react';
import img1 from '../../../ass/web.jpg'
import img2 from '../../../ass/app.jpg'
import img3 from '../../../ass/graph.jpg'
import Servisecard from './Servisecard';
import { Grid, Typography } from '@mui/material';

const serviseimg = [
    {
        img: img1,
        name: 'Web devlopment'
    },
    {
        img: img2,
        name: 'Apps devlopment'
    },
    {
        img: img3,
        name: 'Graphis Degine'
    }
]

const Servises = () => {
    return (
        <div>
            <Typography textAlign='center' margin='40px' fontSize='40px' >Provide Awasome <span>Servises</span></Typography>
            
            <Grid container spacing={2} sx={{
                margin:'auto'
            }} >
                {
                    serviseimg.map((servis, i) =>
                        <Grid item md={4} sm={8} key={i} >
                            <Servisecard
                                key={i}
                                servis={servis}
                            ></Servisecard>
                          </Grid> 
                    )
                }
            </Grid>
        </div>
    );
};

export default Servises;