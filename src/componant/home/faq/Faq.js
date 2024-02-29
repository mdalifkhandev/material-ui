import { Grid, Typography } from '@mui/material';
import React from 'react';
import Accotion from './Accotion';

const data = [
    {
        name: 'Lorem Ipsum',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        name: 'Lorem Ipsum',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        name: 'Lorem Ipsum',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },

]

const Faq = () => {
    return (
        <div>
            <Typography fontSize='40px' textAlign='center'> Frequantly Asked Question </Typography>
            <Grid>
                {
                    data.map((dt, i) => <Grid key={i}>
                        <Accotion
                            dt={dt}
                        ></Accotion>
                    </Grid>)
                }
            </Grid>
        </div>
    );
};

export default Faq;