import React from 'react';
import img1 from '../../../ass/women1.png';
import img2 from '../../../ass/w2.png';
import img3 from '../../../ass/w3.png';
import { Grid, Typography } from '@mui/material';
import ReviewCard from './ReviewCard';


const data=[
    {
        img:img1,
        name:'Aoneta rane',
        title:'CEO of This compane',
        text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum soluta excepturi illo quis molestias, pariatur laudantium tempora quidem in veritatis omnis ea corporis quibusdam ducimus.',
        dath:"September 14, 2019"
    },
    {
        img:img2,
        name:'Reta rane',
        title:'CEO of This compane',
        text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum soluta excepturi illo quis molestias, pariatur laudantium tempora quidem in veritatis omnis ea corporis quibusdam ducimus.',
        dath:"September 20, 2018"
    },
    {
        img:img3,
        name:'Bemola rane',
        title:'CEO of This compane',
        text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum soluta excepturi illo quis molestias, pariatur laudantium tempora quidem in veritatis omnis ea corporis quibusdam ducimus.',
        dath:"September 25, 2017"
    },
]

const Review = () => {
    return (
        <div>
            <Typography fontSize='40px' textAlign='center' >Clients Feedback</Typography>
            <Grid container spacing={2} margin='auto' >
                {
                    data.map((dt,i)=><Grid key={i} item  md={4} sm={8}>
                        <ReviewCard
                        dt={dt}
                        ></ReviewCard>
                    </Grid>)
                }
            </Grid>
        </div>
    );
};

export default Review;