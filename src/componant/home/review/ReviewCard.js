import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import React from 'react';

const ReviewCard = ({dt}) => {
    const {img,name,title,text}=dt
    return (
        <div>
            <Card sx={{ 
                maxWidth: 345,
                marginTop: 10,
                boxShadow: 10,
                borderRadius: 5
                 }}
                 
                 >
                <CardHeader
                
                    avatar={
                        <Avatar src={img} sx={{ bgcolor: 'red' }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            {/* <MoreVertIcon /> */}
                        </IconButton>
                    }
                    title={name}
                    subheader={title}
                />
                
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
                
               
            </Card>
        </div>
    );
};

export default ReviewCard;